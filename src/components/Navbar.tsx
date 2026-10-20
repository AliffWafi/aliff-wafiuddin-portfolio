"use client";

import React, { useState } from "react";
import { Download, Menu, Terminal, X } from "lucide-react";
import { PROFILE_DATA } from "@/data/portfolio";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "IT Tracks", href: "#tracks" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FFFDF7] border-b-[3px] border-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Identity */}
        <a
          href="#about"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <span className="w-11 h-11 bg-[#FFD100] brutal-border brutal-shadow-sm flex items-center justify-center font-mono font-bold text-lg group-hover:bg-[#2EE59D] transition-colors">
            <Terminal className="w-5 h-5 stroke-[2.5]" />
          </span>
          <div className="flex flex-col">
            <span
              className="font-bold text-lg sm:text-xl tracking-tight leading-none uppercase"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {PROFILE_DATA.name}
            </span>
            <span className="font-mono text-xs font-bold text-[#111111]/80 bg-[#2EE59D] px-1.5 py-0.5 mt-1 border border-[#111111] w-fit">
              IT // MULTI-TRACK
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 font-mono text-sm font-bold uppercase tracking-wide border-2 border-transparent hover:border-[#111111] hover:bg-[#FFD100] transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Resume CTA + Mobile Menu Trigger */}
        <div className="flex items-center gap-3">
          <a
            href={PROFILE_DATA.resumeUrl}
            download="Aliff_Wafiuddin_Resume.pdf"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 bg-[#FFD100] font-mono text-xs sm:text-sm font-bold uppercase brutal-btn"
          >
            <Download className="w-4 h-4 stroke-[2.5]" />
            <span>Resume / CV</span>
            <span className="bg-[#111111] text-[#FFFDF7] px-1.5 py-0.5 text-[10px]">
              PDF
            </span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2.5 bg-white brutal-btn"
          >
            {mobileOpen ? (
              <X className="w-6 h-6 stroke-[2.5]" />
            ) : (
              <Menu className="w-6 h-6 stroke-[2.5]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t-[3px] border-[#111111] bg-[#FFFDF7] px-4 pt-4 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 bg-white brutal-border-sm brutal-shadow-sm font-mono text-xs font-bold uppercase text-center hover:bg-[#FFD100]"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href={PROFILE_DATA.resumeUrl}
            download="Aliff_Wafiuddin_Resume.pdf"
            onClick={() => setMobileOpen(false)}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#FFD100] font-mono text-sm font-bold uppercase brutal-btn"
          >
            <Download className="w-4 h-4 stroke-[2.5]" />
            <span>Download Resume / CV (PDF)</span>
          </a>
        </div>
      )}
    </header>
  );
}
