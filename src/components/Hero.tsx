"use client";

import React from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Database,
  Download,
  MapPin,
  Server,
  Sparkles,
} from "lucide-react";
import { ITDomainId, PROFILE_DATA } from "@/data/portfolio";

interface HeroProps {
  activeDomain: ITDomainId;
  onSelectDomain: (domain: ITDomainId) => void;
}

export default function Hero({ activeDomain, onSelectDomain }: HeroProps) {
  const getDomainIcon = (domain: "software" | "cloud-ops" | "data-systems") => {
    switch (domain) {
      case "software":
        return <Code2 className="w-5 h-5 stroke-[2.5]" />;
      case "cloud-ops":
        return <Server className="w-5 h-5 stroke-[2.5]" />;
      case "data-systems":
        return <Database className="w-5 h-5 stroke-[2.5]" />;
    }
  };

  return (
    <section id="about" className="pt-8 pb-16 sm:pt-12 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Top Status Marquee / Pill */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-[#2EE59D] brutal-border brutal-shadow-sm">
            <span className="w-3 h-3 rounded-full bg-[#111111] animate-pulse" />
            <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider">
              {PROFILE_DATA.statusBadge}
            </span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-2 bg-white brutal-border-sm brutal-shadow-sm font-mono text-xs font-bold">
            <MapPin className="w-4 h-4 stroke-[2.5] text-[#FF6B6B]" />
            <span>{PROFILE_DATA.location}</span>
          </div>
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 brutal-card p-6 sm:p-10 flex flex-col justify-between bg-white relative overflow-hidden">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFD100] border-2 border-[#111111] font-mono text-xs font-bold uppercase">
                <Sparkles className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>{PROFILE_DATA.tagline}</span>
              </div>

              <h1
                className="text-3xl sm:text-5xl lg:text-[50px] font-bold uppercase leading-[1.06] tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                BRIDGING{" "}
                <span className="bg-[#60A5FA] px-2 border-2 border-[#111111] inline-block my-1">
                  SOFTWARE DEV
                </span>
                ,{" "}
                <span className="bg-[#FF6B6B] px-2 border-2 border-[#111111] inline-block my-1">
                  BUSINESS ANALYSIS
                </span>{" "}
                &amp;{" "}
                <span className="bg-[#2EE59D] px-2 border-2 border-[#111111] inline-block my-1">
                  AUTOMATION
                </span>
              </h1>

              <div className="space-y-3 text-base sm:text-lg text-[#111111]/90 leading-relaxed font-medium">
                {PROFILE_DATA.bioParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Primary CTAs */}
            <div className="pt-8 mt-8 border-t-[3px] border-[#111111] flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3.5 bg-[#FFD100] font-mono text-sm font-bold uppercase brutal-btn inline-flex items-center gap-2"
              >
                <span>Explore Case Studies</span>
                <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
              </a>

              <a
                href={PROFILE_DATA.resumeUrl}
                download="Aliff_Wafiuddin_Resume.pdf"
                className="px-6 py-3.5 bg-white font-mono text-sm font-bold uppercase brutal-btn inline-flex items-center gap-2 hover:bg-[#2EE59D]"
              >
                <Download className="w-4 h-4 stroke-[2.5]" />
                <span>Download Resume PDF</span>
              </a>

              <a
                href="#contact"
                className="px-5 py-3.5 bg-[#111111] text-[#FFFDF7] font-mono text-sm font-bold uppercase brutal-btn inline-flex items-center gap-2 hover:bg-[#60A5FA] hover:text-[#111111]"
              >
                <span>Hire / Contact</span>
              </a>
            </div>
          </div>

          {/* Right Column: Quick Metrics + Interactive Role Pitch Switcher */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            {/* 2x2 Quick Stats Bento */}
            <div className="grid grid-cols-2 gap-4">
              {PROFILE_DATA.quickStats.map((stat) => (
                <div
                  key={stat.label}
                  className={`${stat.bg} brutal-border brutal-shadow p-4 sm:p-5 flex flex-col justify-between`}
                >
                  <span
                    className="text-2xl sm:text-3xl font-bold tracking-tight uppercase"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {stat.value}
                  </span>
                  <span className="font-mono text-xs font-bold uppercase mt-2 leading-snug">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Recruiter Track Quick-Selector Card */}
            <div
              id="tracks"
              className="brutal-card p-6 bg-[#FFFDF7] flex-1 flex flex-col justify-between space-y-4"
            >
              <div className="flex items-center justify-between border-b-2 border-[#111111] pb-3">
                <div>
                  <span className="font-mono text-xs font-bold uppercase bg-[#111111] text-[#FFFDF7] px-2 py-0.5">
                    RECRUITER SHORTCUT
                  </span>
                  <h2
                    className="text-xl font-bold uppercase mt-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Hiring for a Specific IT Track?
                  </h2>
                </div>
              </div>

              <p className="text-xs sm:text-sm font-medium text-[#111111]/80">
                Click any pillar below to filter the entire portfolio&apos;s{" "}
                <strong>Skills</strong> and <strong>Case Studies</strong> to match
                your open role:
              </p>

              <div className="space-y-3">
                {PROFILE_DATA.rolePitches.map((pitch) => {
                  const isSelected = activeDomain === pitch.domain;
                  return (
                    <button
                      key={pitch.domain}
                      type="button"
                      onClick={() => {
                        onSelectDomain(
                          isSelected ? "all" : pitch.domain
                        );
                        const el = document.getElementById("skills");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className={`w-full text-left p-3.5 brutal-border-sm transition-all ${
                        isSelected
                          ? `${pitch.bg} brutal-shadow-sm translate-x-[-2px] translate-y-[-2px]`
                          : "bg-white hover:bg-[#FFD100]/40 brutal-shadow-sm"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <span
                            className={`p-1.5 border-2 border-[#111111] ${pitch.bg}`}
                          >
                            {getDomainIcon(pitch.domain)}
                          </span>
                          <span
                            className="font-bold text-sm sm:text-base uppercase"
                            style={{ fontFamily: "var(--font-display)" }}
                          >
                            {pitch.title}
                          </span>
                        </div>
                        <span className="font-mono text-[10px] font-bold uppercase px-2 py-0.5 bg-[#111111] text-white">
                          {isSelected ? "ACTIVE FILTER" : pitch.badge}
                        </span>
                      </div>

                      <ul className="mt-2.5 space-y-1">
                        {pitch.points.map((pt, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-1.5 text-xs font-medium text-[#111111]/90"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5] shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
