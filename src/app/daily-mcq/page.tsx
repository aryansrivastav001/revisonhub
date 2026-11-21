"use client";

import { useState } from "react";
import { dailyMcqs } from "@/lib/data";

export default function DailyMcqPage() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const answered = Object.keys(answers).length;

  return (
    <>
      <section className="dark-section py-14 text-white" style={{ background: "linear-gradient(135deg, var(--navy-deep), var(--navy))" }}>
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl font-bold text-white">Daily MCQ Challenge / डेली चैलेंज</h1>
          <p className="mx-auto mt-3 max-w-2xl text-white/75">रोज़ाना नए प्रश्न हल करें, अपनी streak बनाएँ।</p>
          <p className="mt-4 inline-block rounded-full px-4 py-1.5 text-sm" style={{ background: "rgba(201,162,39,0.15)", color: "var(--gold)" }}>
            🔥 Today's Streak: 1 day · Solved: {answered}/{dailyMcqs.length}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        {dailyMcqs.map((m, qi) => (
          <div key={m.q} className="card mb-5 p-6">
            <div className="flex items-start gap-3">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg text-sm font-bold text-white" style={{ background: "var(--navy)" }}>
                {qi + 1}
              </span>
              <p className="font-semibold">{m.q}</p>
            </div>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {m.opts.map((o, oi) => {
                const chosen = answers[qi] === oi;
                const correct = answers[qi] !== undefined && oi === m.ans;
                const wrong = chosen && oi !== m.ans && answers[qi] !== undefined;
                return (
                  <button
                    key={o}
                    onClick={() => answers[qi] === undefined && setAnswers({ ...answers, [qi]: oi })}
                    className="rounded-lg border px-4 py-2.5 text-left text-sm transition-colors"
                    style={{
                      borderColor: correct ? "#15803d" : wrong ? "#b91c1c" : "var(--line)",
                      background: correct ? "rgba(21,128,61,0.08)" : wrong ? "rgba(185,28,28,0.08)" : "var(--card)",
                      color: "var(--ink)",
                    }}
                  >
                    {String.fromCharCode(65 + oi)}. {o}
                  </button>
                );
              })}
            </div>
            {answers[qi] !== undefined && (
              <p className="mt-3 rounded-lg p-3 text-sm" style={{ background: "rgba(201,162,39,0.1)" }}>
                💡 <b>Explanation:</b> {m.exp}
              </p>
            )}
          </div>
        ))}
      </section>
    </>
  );
}
