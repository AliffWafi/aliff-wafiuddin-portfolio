import React from "react";
import { ArrowUp, Terminal } from "lucide-react";
import { PROFILE_DATA } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t-[3px] border-[#111111] bg-[#111111] text-[#FFFDF7] py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 bg-[#FFD100] text-[#111111] border-2 border-[#FFFDF7] flex items-center justify-center">
            <Terminal className="w-5 h-5 stroke-[2.5]" />
          </span>
          <div>
            <p
              className="font-bold text-base uppercase tracking-wide"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {PROFILE_DATA.name} — Multi-Track IT Portfolio
            </p>
            <p className="font-mono text-xs text-[#FFFDF7]/75">
              Built with Next.js, TypeScript &amp; Neo-Brutalist UI • Edit{" "}
              <code className="text-[#FFD100]">src/data/portfolio.ts</code> to
              customize
            </p>
          </div>
        </div>

        <a
          href="#about"
          className="px-4 py-2.5 bg-[#FFD100] text-[#111111] border-2 border-[#FFFDF7] font-mono text-xs font-bold uppercase inline-flex items-center gap-2 hover:bg-[#2EE59D] transition-colors"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-4 h-4 stroke-[2.5]" />
        </a>
      </div>
    </footer>
  );
}
