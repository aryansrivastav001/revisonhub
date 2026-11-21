import type { Metadata } from "next";
import { brand } from "@/lib/data";
import ContactForm from "@/components/ContactForm";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaInstagram } from "react-icons/fa";

export const metadata: Metadata = { title: "Contact Us — संपर्क करें" };

export default function ContactPage() {
  return (
    <>
      <section className="dark-section py-14 text-white" style={{ background: "linear-gradient(135deg, var(--navy-deep), var(--navy))" }}>
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl font-bold text-white">Contact Us / संपर्क करें</h1>
          <p className="mx-auto mt-3 max-w-2xl text-white/75">किसी भी प्रश्न या सुझाव के लिए हमसे संपर्क करें — हम आपकी मदद के लिए तत्पर हैं।</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-10 px-4 py-12 lg:grid-cols-2">
        <div className="space-y-5">
          {[
            { icon: <FaPhoneAlt className="text-[var(--gold)]" size={20} />, title: "Phone", value: brand.phone },
            { icon: <FaEnvelope className="text-[var(--gold)]" size={20} />, title: "Email", value: brand.email },
            { icon: <FaMapMarkerAlt className="text-[var(--gold)]" size={20} />, title: "Address", value: brand.address },
          ].map((c) => (
            <div key={c.title} className="card flex items-center gap-4 p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl" style={{ background: "rgba(201,162,39,0.15)" }}>{c.icon}</span>
              <div>
                <p className="font-bold">{c.title}</p>
                <p className="text-sm text-[var(--inksoft)]">{c.value}</p>
              </div>
            </div>
          ))}
          <div className="flex gap-3">
            <a href={brand.whatsapp} target="_blank" rel="noreferrer" className="btn-gold inline-flex items-center gap-2"><FaWhatsapp size={16} /> WhatsApp चैट करें</a>
            <a href={brand.instagram} target="_blank" rel="noreferrer" className="btn-outline inline-flex items-center gap-2"><FaInstagram size={16} /> Instagram</a>
          </div>
        </div>

        <ContactForm />
      </section>
    </>
  );
}
