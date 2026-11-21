import type { Metadata } from "next";
import { Suspense } from "react";
import { currentAffairs } from "@/lib/data";
import CurrentAffairsQA from "@/components/CurrentAffairsQA";

export const metadata: Metadata = { title: "Current Affairs — दैनिक सम-सामयिकी" };

export default function CurrentAffairsPage() {
  return (
    <>
      <section className="dark-section py-14 text-white" style={{ background: "linear-gradient(135deg, var(--navy-deep), var(--navy))" }}>
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl font-bold text-white">Current Affairs / करेंट अफेयर्स</h1>
          <p className="mx-auto mt-3 max-w-2xl text-white/75">प्रतिदिन की सम-सामयिक घटनाएँ — परीक्षा के लिए महत्वपूर्ण।</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10">
        {currentAffairs.map((c) => (
          <article key={c.title} className="card mb-6 p-6">
            <h2 className="text-xl font-bold">{c.title}</h2>
            <ul className="mt-4 space-y-2.5">
              {c.points.map((p, i) => (
                <li key={p} className="flex gap-3 text-[var(--ink)]">
                  <span className="font-bold text-[var(--gold)]">{i + 1}.</span> {p}
                </li>
              ))}
            </ul>
          </article>
        ))}
        <p className="text-center text-sm text-[var(--inksoft)]">रोज़ाना नई करेंट अफेयर्स अपडेट — बुकमार्क करके रखें 🔖</p>
      </section>

      {/* Quick Q&A — har open par naya random set */}
      <Suspense fallback={<div className="mx-auto max-w-4xl px-4 pb-14"><div className="card h-40 animate-pulse p-5" /></div>}>
        <CurrentAffairsQA />
      </Suspense>
    </>
  );
}
