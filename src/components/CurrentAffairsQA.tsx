import { FaCheck } from "react-icons/fa";
import { io } from "next/cache";
import { currentAffairsQA } from "@/lib/data";

const SHOW_COUNT = 10;

function shuffle<T>(list: T[]): T[] {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default async function CurrentAffairsQA() {
  // Har request par naya random set — har open par Q&A badlagya.
  await io();
  const items = shuffle(currentAffairsQA).slice(0, SHOW_COUNT);

  return (
    <section className="mx-auto max-w-4xl px-4 pb-14">
      <h2 className="gold-underline inline-flex items-center gap-3 text-2xl font-bold">
        <FaCheck className="text-[var(--gold)]" /> करेंट अफेयर्स प्रश्नोत्तर
      </h2>
      <p className="mt-3 text-sm text-[var(--inksoft)]">हर बार पेज खोलने पर नए प्रश्न दिखते हैं।</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {items.map((item, i) => (
          <div key={item.q} className="card p-5">
            <p className="font-semibold"><span className="text-[var(--gold)]">Q{i + 1}.</span> {item.q}</p>
            <p className="mt-2 text-sm text-[var(--inksoft)]"><b className="text-[var(--gold)]">A.</b> {item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
