import Link from "next/link";
import type { Metadata } from "next";
import { studyMaterials } from "@/lib/data";

export const metadata: Metadata = { title: "Study Materials — Free PDF Notes" };

const sections = [
  "Subject-wise PDF Notes",
  "Current Affairs",
  "Important One-Liners",
  "English Vocabulary",
  "Synonyms & Antonyms",
  "One Word Substitution",
  "Idioms & Phrases",
  "Previous Year Questions",
  "Important Exam Updates",
];

export default function StudyMaterialsPage() {
  return (
    <>
      <section className="dark-section py-14 text-white" style={{ background: "linear-gradient(135deg, var(--navy-deep), var(--navy))" }}>
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl font-bold text-white">Study Materials / अध्ययन सामग्री</h1>
          <p className="mx-auto mt-3 max-w-2xl text-white/75">Subject-wise PDF Notes, One-Liners और बहुत कुछ — पूरी तरह Free।</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-10">
        <div className="flex flex-wrap gap-2">
          {sections.map((s) => (
            <span key={s} className="rounded-full border border-[var(--line)] bg-card px-3.5 py-1.5 text-sm text-[var(--ink)]">✓ {s}</span>
          ))}
        </div>

        <h2 className="gold-underline mt-10 text-2xl font-bold">PDF Notes Library</h2>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b-2" style={{ borderColor: "var(--navy)", color: "var(--navy)" }}>
                <th className="py-3">Title</th>
                <th className="py-3">Subject</th>
                <th className="py-3">Pages</th>
                <th className="py-3">Type</th>
                <th className="py-3">Download</th>
              </tr>
            </thead>
            <tbody>
              {studyMaterials.map((m) => (
                <tr key={m.title} className="border-b border-[var(--line)]">
                  <td className="py-3 font-semibold">{m.title}</td>
                  <td className="py-3 text-[var(--inksoft)]">{m.subject}</td>
                  <td className="py-3 text-[var(--inksoft)]">{m.pages}</td>
                  <td className="py-3 text-[var(--inksoft)]">{m.type}</td>
                  <td className="py-3"><a href="#" className="btn-gold !py-1.5 !px-3 !text-xs">⬇ PDF</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card mt-10 p-6 text-center">
          <p className="text-[var(--inksoft)]">नई PDF हर सप्ताह जोड़ी जाती है — अपडेट के लिए जुड़े रहें।</p>
          <Link href="/contact" className="btn-gold mt-4">संपर्क करें →</Link>
        </div>
      </section>
    </>
  );
}
