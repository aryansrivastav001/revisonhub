"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { brand, navLinks } from "@/lib/data";
import BrandLogo from "@/components/BrandLogo";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 shadow-md transition-[background,backdrop-filter,box-shadow] duration-300"
      style={{
        background: scrolled
          ? "color-mix(in srgb, var(--navy) 78%, transparent)"
          : "var(--navy)",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        boxShadow: scrolled ? "0 6px 24px rgba(0,0,0,0.25)" : undefined,
      }}
    >
      {/* Top bar */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-1.5 text-[13px]" style={{ color: "rgba(255,255,255,0.8)" }}>
          <p>{brand.taglineHindi} — {brand.taglineEnglish}</p>
          <div className="hidden gap-4 sm:flex">
            <a href={brand.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-[var(--gold)]"><FaWhatsapp size={14} /> WhatsApp</a>
            <a href={brand.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-[var(--gold)]"><FaInstagram size={14} /> Instagram</a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center">
          <BrandLogo size={80} priority />
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-lg px-2.5 py-2 text-sm font-medium transition-colors ${
                pathname === l.href
                  ? "bg-white/10 text-[var(--gold)]"
                  : "text-white/85 hover:bg-white/10 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
          </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="grid h-10 w-10 place-items-center rounded-lg text-white lg:hidden"
          style={{ background: "rgba(255,255,255,0.1)" }}
        >
          <span className="text-xl">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-white/10 px-4 pb-4 lg:hidden" style={{ background: "var(--navy-2)", color: "#ffffff" }}>
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ color: pathname === l.href ? "var(--gold-2)" : "#ffffff", fontWeight: pathname === l.href ? 700 : 400 }}
              className="block border-b border-white/10 py-3 text-sm"
            >
              {l.hindi} <span style={{ color: "rgba(255,255,255,0.55)" }}>· {l.label}</span>
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
