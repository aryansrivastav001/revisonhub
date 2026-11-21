import type { Metadata } from "next";
import { vocabulary, idioms, oneWord } from "@/lib/data";

export const metadata: Metadata = { title: "English Vocabulary — Synonyms, Antonyms, Idioms" };

export default function VocabularyPage() {
  return (
    <>
      <section className="dark-section py-14 text-white" style={{ background: "linear-gradient(135deg, var(--navy-deep), var(--navy))" }}>
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl font-bold text-white">English Vocabulary / अंग्रेज़ी शब्दावली</h1>
          <p className="mx-auto mt-3 max-w-2xl text-white/75">Vocabulary · Synonyms & Antonyms · Idioms & Phrases · One Word Substitution</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-10">
        <h2 className="gold-underline text-2xl font-bold">📖 Word of the Day List</h2>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b-2" style={{ borderColor: "var(--navy)", color: "var(--navy)" }}>
                <th className="py-3">Word</th>
                <th className="py-3">हिंदी अर्थ</th>
                <th className="py-3">Synonym</th>
                <th className="py-3">Antonym</th>
              </tr>
            </thead>
            <tbody>
              {vocabulary.map((v) => (
                <tr key={v.word} className="border-b border-[var(--line)]">
                  <td className="py-3 font-bold">{v.word}</td>
                  <td className="py-3">{v.hindi}</td>
                  <td className="py-3" style={{ color: "#15803d" }}>{v.syn}</td>
                  <td className="py-3" style={{ color: "#b91c1c" }}>{v.ant}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="gold-underline text-2xl font-bold">💬 Idioms & Phrases</h2>
            <div className="mt-5 space-y-3">
              {idioms.map((i) => (
                <div key={i.idiom} className="card p-4">
                  <p className="font-semibold">{i.idiom}</p>
                  <p className="text-sm text-[var(--inksoft)]">= {i.hindi}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="gold-underline text-2xl font-bold">🔤 One Word Substitution</h2>
            <div className="mt-5 space-y-3">
              {oneWord.map((o) => (
                <div key={o.word} className="card p-4">
                  <p className="text-sm text-[var(--inksoft)]">{o.word}</p>
                  <p className="font-bold text-[var(--gold)]">→ {o.ans}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
