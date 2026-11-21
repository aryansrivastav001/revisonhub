import nodemailer from "nodemailer";
import { connectDB } from "@/lib/db";
import Contact from "@/model/contactModel";

// With Cache Components enabled, Next.js uses the default Node.js runtime,
// which nodemailer and mongoose require (no `runtime` export allowed).

const DEFAULT_CONTACT_EMAIL = "aryansrivastav2121@gmail.com";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Keep header fields on a single line to avoid SMTP header injection.
const singleLine = (value: string) => value.replace(/[\r\n]+/g, " ").trim();

type ContactPayload = Record<string, unknown>;

export async function GET() {
  return Response.json({ ok: true, service: "Contact API" });
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? singleLine(body.name) : "";
  const email = typeof body.email === "string" ? singleLine(body.email) : "";
  const mobile = typeof body.mobile === "string" ? singleLine(body.mobile) : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message) {
    return Response.json(
      { ok: false, error: "कृपया नाम, ईमेल और संदेश भरें / Name, email and message are required." },
      { status: 400 }
    );
  }

  if (!EMAIL_PATTERN.test(email)) {
    return Response.json({ ok: false, error: "कृपया मान्य ईमेल दर्ज करें / Please enter a valid email." }, { status: 400 });
  }

  if (name.length > 100 || email.length > 200 || mobile.length > 20 || message.length > 5000) {
    return Response.json({ ok: false, error: "One or more fields are too long." }, { status: 400 });
  }

  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpUser || !smtpPass || smtpPass.startsWith("your-")) {
    console.error("Contact API: SMTP_USER / SMTP_PASS are not configured in .env");
    return Response.json(
      { ok: false, error: "Email service is not configured yet. Please contact the site owner." },
      { status: 503 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: { user: smtpUser, pass: smtpPass },
  });

  try {
    await transporter.sendMail({
      from: `"RevisioN Hub Contact" <${smtpUser}>`,
      to: process.env.CONTACT_EMAIL || DEFAULT_CONTACT_EMAIL,
      replyTo: email,
      subject: `New contact message from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Mobile: ${mobile || "-"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });
  } catch (error) {
    console.error("Contact API: failed to send email", error);
    return Response.json(
      { ok: false, error: "संदेश अभी नहीं भेजा जा सका। कृपया बाद में प्रयास करें / Could not send right now." },
      { status: 502 }
    );
  }

  // Optional: store a copy in MongoDB when a connection string is configured.
  const mongoUri = process.env.MONGODB_URI;
  if (mongoUri) {
    try {
      await connectDB(mongoUri);
      await Contact.create({ name, email, mobile, message });
    } catch (error) {
      console.error("Contact API: failed to save message to MongoDB", error);
    }
  }

  return Response.json({ ok: true, message: "धन्यवाद! आपका संदेश भेज दिया गया है / Your message has been sent." });
}
