import Link from "next/link";
import type { Metadata } from "next";
import { brand, features } from "@/lib/data";

export const metadata: Metadata = { title: "About Us — हमारे बारे में" };

export default function AboutPage() {
  return (
    <>
      <section className="dark-section py-14 text-white" style={{ background: "linear-gradient(135deg, var(--navy-deep), var(--navy))" }}>
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl font-bold text-white">हमारे बारे में / About Us</h1>
          <p className="mx-auto mt-3 max-w-2xl text-white/75">{brand.taglineHindi} — {brand.taglineEnglish}</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14">
        <h2 className="gold-underline text-2xl font-bold">हमारा दृष्टिकोण / Our Vision</h2>
        <p className="mt-5 leading-relaxed text-[var(--ink)]">
          "RevisioN Hub को एक भरोसेमंद Digital Education Platform बनाना, जहाँ हर विद्यार्थी को प्रतियोगी परीक्षाओं की तैयारी के लिए सही मार्गदर्शन, गुणवत्तापूर्ण Study Material और नियमित Practice की सुविधा मिल सके।"
        </p>

        <h2 className="gold-underline mt-10 text-2xl font-bold">हमारा मिशन / Our Mission</h2>
        <ul className="mt-5 space-y-3 text-[var(--ink)]">
          {[
            "SSC, UPSSSC PET, Railway, Banking, UP Police जैसी परीक्षाओं के लिए एक ही प्लेटफॉर्म पर सम्पूर्ण तैयारी।",
            "हिंदी व English दोनों भाषाओं में गुणवत्तापूर्ण Study Material सभी के लिए उपलब्ध कराना।",
            "नियमित Daily MCQ और Mock Tests से practice की आदत पैदा करना।",
            "हर विद्यार्थी को उनकी performance समझने और सुधारने के लिए Analysis उपलब्ध कराना।",
          ].map((m) => (
            <li key={m} className="card p-4">✅ {m}</li>
          ))}
        </ul>

        <h2 className="gold-underline mt-10 text-2xl font-bold">क्यों RevisioN Hub?</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="card p-5">
              <span className="text-2xl">{f.icon}</span>
              <h3 className="mt-2 font-bold">{f.title}</h3>
              <p className="mt-1 text-sm text-[var(--inksoft)]">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/contact" className="btn-gold">हमारे साथ जुड़ें / Join Now</Link>
        </div>
      </section>
    </>
  );
}
