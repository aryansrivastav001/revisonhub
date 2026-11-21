import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Student Dashboard" };

const enrolled = [
  { title: "UPSSSC PET 2026 Foundation", progress: 45 },
  { title: "SSC CHSL Complete Batch", progress: 30 },
];

export default function DashboardPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">नमस्ते, विद्यार्थी! 👋</h1>
          <p className="mt-1 text-[var(--inksoft)]">आपका Personal Dashboard — आपकी सफलता, हमारा संकल्प!</p>
        </div>
        <Link href="/study-materials" className="btn-gold">📚 नया Study Material देखें</Link>
      </div>

      {/* Stats */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: "📚", l: "Enrolled Batches", v: "2" },
          { icon: "🧪", l: "Tests Given", v: "14" },
          { icon: "🎯", l: "Avg. Score", v: "72%" },
          { icon: "🔥", l: "Study Streak", v: "5 days" },
        ].map((s) => (
          <div key={s.l} className="card p-6">
            <span className="text-2xl">{s.icon}</span>
            <p className="mt-2 text-2xl font-bold">{s.v}</p>
            <p className="text-sm text-[var(--inksoft)]">{s.l}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        {/* Enrolled batches */}
        <div>
          <h2 className="gold-underline text-xl font-bold">Enrolled Batches</h2>
          <div className="mt-5 space-y-4">
            {enrolled.map((c) => (
              <div key={c.title} className="card p-5">
                <p className="font-semibold">{c.title}</p>
                <div className="mt-3 h-2.5 w-full rounded-full" style={{ background: "rgba(11,31,75,0.08)" }}>
                  <div className="h-full rounded-full" style={{ width: `${c.progress}%`, background: "linear-gradient(90deg, var(--gold), var(--gold-2))" }} />
                </div>
                <p className="mt-1.5 text-xs text-[var(--inksoft)]">{c.progress}% complete</p>
              </div>
            ))}
          </div>
        </div>

        {/* Test history */}
        <div>
          <h2 className="gold-underline text-xl font-bold">Test History & Performance</h2>
          <div className="card mt-5 overflow-hidden p-0">
            <table className="w-full text-left text-sm">
              <thead>
                <tr style={{ background: "var(--navy)", color: "#fff" }}>
                  <th className="px-4 py-3">Test</th>
                  <th className="px-4 py-3">Score</th>
                  <th className="px-4 py-3">Rank</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["SSC CGL Full Mock #1", "78%", "342"],
                  ["Maths — Percentage", "85%", "120"],
                  ["Reasoning — Blood Relation", "72%", "510"],
                  ["UPSSSC PET Mock #1", "68%", "890"],
                ].map(([t, s, r]) => (
                  <tr key={t} className="border-b border-[var(--line)] last:border-0">
                    <td className="px-4 py-3 font-semibold">{t}</td>
                    <td className="px-4 py-3 text-[var(--gold)]">{s}</td>
                    <td className="px-4 py-3 text-[var(--inksoft)]">#{r}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card mt-5 p-5 text-sm text-[var(--inksoft)]">
            📄 PDF Downloads व Study Progress भी यहीं से manage होंगे। डेटा database connect होने के बाद यहाँ automatic आएगा।
          </div>
        </div>
      </div>
    </section>
  );
}
