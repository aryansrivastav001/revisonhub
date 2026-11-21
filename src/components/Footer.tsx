import Link from "next/link";
import { brand, examCategories, navLinks } from "@/lib/data";
import BrandLogo from "@/components/BrandLogo";
import { FaWhatsapp, FaInstagram, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-16 text-white/80" style={{ background: "var(--navy-deep)" }}>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <BrandLogo size={80} />
          <p className="mt-3 text-sm leading-relaxed">
            {brand.taglineHindi} — SSC, UPSSSC PET, Railway, Banking व अन्य प्रतियोगी परीक्षाओं की तैयारी का भरोसेमंद प्लेटफॉर्म।
          </p>
          <div className="mt-4 flex gap-3">
            <a href={brand.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1.5 text-sm hover:text-[var(--gold)]"><FaWhatsapp size={14} /> WhatsApp</a>
            <a href={brand.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1.5 text-sm hover:text-[var(--gold)]"><FaInstagram size={14} /> Instagram</a>
          </div>
        </div>

        <div>
          <h4 className="mb-3 text-base font-semibold text-[var(--gold)]">पेज / Pages</h4>
          <ul className="space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-base font-semibold text-[var(--gold)]">परीक्षाएँ / Exams</h4>
          <ul className="space-y-2 text-sm">
            {examCategories.map((e) => (
              <li key={e.name}>{e.name}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-base font-semibold text-[var(--gold)]">संपर्क / Contact</h4>
          <ul className="space-y-2.5 text-sm">
            <li className="flex items-center gap-2.5"><FaEnvelope className="shrink-0 text-[var(--gold)]" size={14} /> {brand.email}</li>
            <li className="flex items-center gap-2.5"><FaPhoneAlt className="shrink-0 text-[var(--gold)]" size={14} /> {brand.phone}</li>
            <li className="flex items-center gap-2.5"><FaMapMarkerAlt className="shrink-0 text-[var(--gold)]" size={14} /> {brand.address}</li>
          </ul>
          <Link href="/admin" className="mt-4 inline-block text-xs text-white/50 hover:text-[var(--gold)]">Admin Panel</Link>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center">
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-white/50">
          <a
            href="https://www.instagram.com/srivyon_technologies?hvrq=OXpwNHMxMjZtNzl5"
            target="_blank"
            rel="noreferrer"
            aria-label="SRIVYON TECHNOLOGIES on Instagram"
            className="text-white/50 transition-colors hover:text-[var(--gold)]"
          >
            <FaInstagram size={14} />
          </a>
          <span>© 2026 All Rights Reserved | Design &amp; Develop By SRIVYON.TECHNOLOGIES</span>
        </div>
        <div className="mt-1 text-[10px] tracking-wide text-white/35">ARYAN SRIVASTAV</div>
      </div>
    </footer>
  );
}
