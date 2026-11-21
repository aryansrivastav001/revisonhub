"use client";

import { useState, type FormEvent } from "react";

type Status = { type: "idle" | "success" | "error"; message: string };

const fields = [
  { name: "name", label: "आपका नाम / Your Name", type: "text", autoComplete: "name", required: true },
  { name: "email", label: "ईमेल / Email", type: "email", autoComplete: "email", required: true },
  { name: "mobile", label: "मोबाइल नंबर / Mobile", type: "tel", autoComplete: "tel", required: false },
] as const;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ type: "idle", message: "" });
  const [sending, setSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      mobile: String(data.get("mobile") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    setSending(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { ok?: boolean; error?: string; message?: string };

      if (!response.ok || !result.ok) {
        setStatus({ type: "error", message: result.error || "संदेश नहीं भेजा जा सका / Could not send the message." });
        return;
      }

      form.reset();
      setStatus({ type: "success", message: result.message || "संदेश भेज दिया गया / Message sent." });
    } catch {
      setStatus({ type: "error", message: "नेटवर्क त्रुटि। कृपया फिर से प्रयास करें / Network error, please try again." });
    } finally {
      setSending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-4 p-6">
      <h2 className="text-xl font-bold">हमें संदेश भेजें / Send a Message</h2>

      {fields.map((field) => (
        <div key={field.name}>
          <label htmlFor={`contact-${field.name}`} className="mb-1.5 block text-sm font-semibold">
            {field.label}
          </label>
          <input
            id={`contact-${field.name}`}
            name={field.name}
            type={field.type}
            autoComplete={field.autoComplete}
            required={field.required}
            className="w-full rounded-lg border border-[var(--line)] bg-bg px-4 py-2.5 outline-none focus:border-[var(--gold)]"
          />
        </div>
      ))}

      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-semibold">
          संदेश / Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          className="w-full rounded-lg border border-[var(--line)] bg-bg px-4 py-2.5 outline-none focus:border-[var(--gold)]"
        />
      </div>

      {status.message && (
        <p
          role="status"
          aria-live="polite"
          className={status.type === "error" ? "text-sm text-red-700" : "text-sm text-green-700"}
        >
          {status.message}
        </p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="btn-gold w-full disabled:cursor-not-allowed disabled:opacity-60"
      >
        {sending ? "भेजा जा रहा है... / Sending..." : "भेजें / Send"}
      </button>

      <p className="text-center text-xs text-[var(--inksoft)]">हम आमतौर पर 24 घंटों में उत्तर देते हैं।</p>
    </form>
  );
}
