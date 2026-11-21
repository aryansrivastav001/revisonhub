import type { Metadata } from "next";

export const metadata: Metadata = { title: "Admin Panel" };

const adminSections = [
  { icon: "📄", title: "Upload PDF Notes", desc: "Subject-wise नई PDF अपलोड करें, edit/delete करें।" },
  { icon: "❓", title: "Manage MCQs", desc: "Daily MCQ add / edit / delete करें।" },
  { icon: "🧪", title: "Create Online Tests", desc: "Mock, topic-wise व subject-wise tests बनाएँ।" },
  { icon: "📰", title: "Upload Current Affairs", desc: "दैनिक सम-सामयिकी publish करें।" },
  { icon: "👥", title: "Manage Students", desc: "Students की सूची, enrollment व activity देखें।" },
  { icon: "💳", title: "Manage Payments", desc: "Payment history और confirmations देखें।" },
  { icon: "📢", title: "Announcements", desc: "Exam updates व notices publish करें।" },
  { icon: "⚙️", title: "Website Content", desc: "Pages, banners और content edit करें।" },
];

export default function AdminPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div
        className="dark-section rounded-3xl p-10 text-white"
        style={{ background: "linear-gradient(135deg, var(--navy-deep), var(--navy))" }}
      >
        <h1 className="text-3xl font-bold text-white">⚙️ Admin Panel</h1>
        <p className="mt-2 text-white/75">RevisioN Hub का सम्पूर्ण Management Dashboard — सब कुछ आसानी से manage करें।</p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {adminSections.map((s) => (
          <div key={s.title} className="card p-6">
            <span className="text-3xl">{s.icon}</span>
            <h2 className="mt-3 font-bold">{s.title}</h2>
            <p className="mt-1.5 text-sm text-[var(--inksoft)]">{s.desc}</p>
            <button className="btn-outline mt-4 !py-1.5 !text-sm">Open →</button>
          </div>
        ))}
      </div>

      <div className="card mt-10 p-6">
        <h2 className="text-lg font-bold">🔐 Admin Access (Setup Note)</h2>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-[var(--inksoft)]">
          <li>Admin login के लिए database (auth) connect होना बाकी है — फिलहाल यह UI scaffold है।</li>
          <li>पूरा Source Code और Admin access आपके स्वामित्व में रहेगा।</li>
          <li>Domain, Hosting व सभी credentials आपके अपने खातों में बनेंगे।</li>
        </ul>
      </div>
    </section>
  );
}
