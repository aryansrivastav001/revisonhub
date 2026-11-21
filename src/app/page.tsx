
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { brand, examCategories, features } from "@/lib/data";
import HeroVideo from "@/components/HeroVideo";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="dark-section relative overflow-hidden text-white"
        style={{ background: "linear-gradient(135deg, var(--navy-deep) 0%, var(--navy) 55%, var(--navy-2) 100%)" }}
      >
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:py-24 lg:grid-cols-[1fr_1fr]">
          <div className="max-w-3xl">
            <span
              className="mb-5 inline-block rounded-full px-4 py-1.5 text-sm font-semibold"
              style={{ background: "rgba(201,162,39,0.15)", color: "var(--gold)" }}
            >
              🎯 {brand.taglineHindi}
            </span>
            <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl">
              प्रतियोगी परीक्षाओं की तैयारी का <span className="text-[var(--gold)]">सबसे भरोसेमंद</span> प्लेटफॉर्म
            </h1>
            <p className="mt-5 text-lg text-white/75">
              SSC CHSL · SSC CGL · UPSSSC PET · Railway · UP Police · Banking — Free Study Material, Daily MCQ और Current Affairs — सब एक जगह।
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/study-materials" className="btn-gold">🚀 अभी शुरू करें / Start Learning</Link>
              <Link href="/current-affairs" className="btn-outline">📰 Current Affairs देखें</Link>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 text-center">
              {[
                { n: "50,000+", l: "विद्यार्थी" },
                { n: "10,000+", l: "MCQ Questions" },
                { n: "500+", l: "PDF Notes" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xl font-bold text-[var(--gold)]">{s.n}</p>
                  <p className="text-xs text-white/60">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          <HeroVideo />
        </div>
      </section>

      {/* Exam categories */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="text-center">
          <h2 className="gold-underline text-3xl font-bold inline-block">परीक्षा श्रेणियाँ / Exam Categories</h2>
          <p className="mt-3 text-[var(--inksoft)]">अपनी लक्ष्य परीक्षा चुनें और तैयारी शुरू करें</p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {examCategories.map((e) => (
            <Link
              key={e.name}
              href="/study-materials"
              className="card group p-6 transition-transform hover:-translate-y-1"
              style={{ borderLeft: "4px solid rgba(11, 31, 75, 0.55)" }}
            >
              <span className="text-3xl">{e.icon}</span>
              <h3 className="mt-3 text-lg font-bold">{e.name}</h3>
              <p className="mt-1.5 text-sm text-[var(--inksoft)]">{e.desc}</p>
              <span className="mt-3 inline-block text-sm font-semibold text-[var(--gold)] group-hover:underline">Explore →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="dark-section py-14 text-white" style={{ background: "var(--navy)" }}>
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white inline-block gold-underline">हमारी विशेषताएँ / Why RevisioN Hub?</h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <span className="text-3xl">{f.icon}</span>
                <h3 className="mt-3 font-bold text-[var(--gold)]">{f.title}</h3>
                <p className="mt-1.5 text-sm text-white/70">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="gold-underline text-3xl font-bold inline-block">
              <span className="inline-flex items-center gap-3"><FaCheck className="text-[var(--gold)]" /> Daily MCQ Challenge</span>
            </h2>
            <p className="mt-3 text-[var(--inksoft)]">रोज़ practice करें, रैंक बढ़ाएँ।</p>
            <Link href="/daily-mcq" className="btn-gold mt-6">सभी प्रश्न देखें →</Link>
          </div>

          <div>
            <h2 className="gold-underline text-3xl font-bold inline-block">
              <span className="inline-flex items-center gap-3"><FaCheck className="text-[var(--gold)]" /> Latest Current Affairs</span>
            </h2>
            <p className="mt-3 text-[var(--inksoft)]">दैनिक सम-सामयिकी अपडेट।</p>
            <Link href="/current-affairs" className="btn-outline mt-6">सभी देखें →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-4">
        <div
          className="dark-section rounded-3xl px-6 py-12 text-center text-white sm:px-12"
          style={{ background: "linear-gradient(135deg, var(--navy), var(--navy-2))" }}
        >
          <h2 className="text-3xl font-bold text-white">तैयारी का सफ़र आज ही शुरू करें</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/75">
            Free Study Material, Daily MCQ और Current Affairs के साथ अपनी तैयारी को नई ऊँचाई दें। {brand.taglineEnglish}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href="/study-materials" className="btn-gold">Free Study Material देखें</Link>
            <Link href="/about" className="btn-outline">About Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
