import type { Metadata } from "next";
import { Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const hindi = Noto_Sans_Devanagari({
  variable: "--font-hindi",
  subsets: ["devanagari", "latin"],
});

// Social platforms need an absolute URL for preview images.
// Vercel provides VERCEL_URL automatically; set NEXT_PUBLIC_SITE_URL for other hosts.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

const shareImage = {
  url: "/images/aboutimg.jpg",
  width: 1013,
  height: 331,
  alt: "RevisioN Hub — Competitive Exam Preparation",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "RevisioN Hub — आपकी सफलता, हमारा संकल्प! | SSC, UPSSSC PET, Railway, Banking",
    template: "%s | RevisioN Hub",
  },
  description:
    "SSC CHSL, SSC CGL, UPSSSC PET, Railway, UP Police, Banking एवं अन्य प्रतियोगी परीक्षाओं की तैयारी के लिए Free Study Material, Daily MCQ और Current Affairs।",
  keywords: ["SSC CHSL", "SSC CGL", "UPSSSC PET", "Railway", "UP Police", "Banking", "Study Material", "Daily MCQ"],
  openGraph: {
    title: "RevisioN Hub — आपकी सफलता, हमारा संकल्प!",
    description: "Learn Today, Lead Tomorrow. प्रतियोगी परीक्षाओं की तैयारी एक ही प्लेटफॉर्म पर।",
    type: "website",
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    images: [shareImage],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="hi" className={`${hindi.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <ScrollReveal />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
