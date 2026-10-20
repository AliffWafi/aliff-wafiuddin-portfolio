"use client";

import React from "react";
import {
  Award,
  Briefcase,
  CheckSquare,
  GraduationCap,
} from "lucide-react";
import { TIMELINE_ITEMS } from "@/data/portfolio";

export default function ExperienceSection() {
  const workItems = TIMELINE_ITEMS.filter((item) => item.type === "work");
  const eduAndCertItems = TIMELINE_ITEMS.filter(
    (item) => item.type === "education" || item.type === "certification"
  );

  return (
    <section
      id="experience"
      className="py-16 sm:py-20 border-t-[3px] border-[#111111] bg-white/75"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF6B6B] brutal-border-sm font-mono text-xs font-bold uppercase">
            <Briefcase className="w-4 h-4 stroke-[2.5]" />
            <span>03 // TRACK RECORD &amp; CREDENTIALS</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Work Experience &amp; Education
          </h2>
          <p className="text-base text-[#111111]/80 max-w-2xl font-medium">
            A progressive career path spanning hands-on IT support, enterprise
            system administration, data operations, and full-stack software
            engineering.
          </p>
        </div>

        {/* Two-Column Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 7 Columns: Work Experience */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#111111] text-[#FFFDF7] font-mono text-xs sm:text-sm font-bold uppercase brutal-shadow-sm">
              <Briefcase className="w-4 h-4" />
              <span>Professional IT Experience</span>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l-[4px] border-[#111111] space-y-8">
              {workItems.map((item) => (
                <div
                  key={item.id}
                  className="relative brutal-card p-6 bg-white space-y-4"
                >
                  {/* Timeline Square Node */}
                  <span
                    className={`hidden sm:block absolute -left-[46px] top-6 w-5 h-5 ${item.accentBg} brutal-border-sm`}
                  />

                  <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-[#111111] pb-3">
                    <span
                      className={`font-mono text-xs font-bold uppercase px-2.5 py-1 ${item.accentBg} border-2 border-[#111111]`}
                    >
                      {item.period}
                    </span>
                    <span className="font-mono text-xs font-bold uppercase text-[#111111]/75">
                      {item.organization} • {item.location}
                    </span>
                  </div>

                  <div>
                    <h3
                      className="text-xl sm:text-2xl font-bold uppercase"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {item.roleOrDegree}
                    </h3>
                  </div>

                  <ul className="space-y-2.5">
                    {item.highlights.map((bullet, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm sm:text-base font-medium text-[#111111]/90"
                      >
                        <CheckSquare className="w-4 h-4 stroke-[2.5] shrink-0 mt-1" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-[#FFFDF7] border border-[#111111] font-mono text-xs font-bold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right 5 Columns: Education & Certifications */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#111111] text-[#FFFDF7] font-mono text-xs sm:text-sm font-bold uppercase brutal-shadow-sm">
              <GraduationCap className="w-4 h-4" />
              <span>Education &amp; Community Service</span>
            </div>

            <div className="space-y-6">
              {eduAndCertItems.map((item) => (
                <div
                  key={item.id}
                  className="brutal-card overflow-hidden bg-white"
                >
                  <div
                    className={`${item.accentBg} p-4 border-b-[3px] border-[#111111] flex items-center justify-between gap-2`}
                  >
                    <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase">
                      {item.type === "education" ? (
                        <GraduationCap className="w-4 h-4 stroke-[2.5]" />
                      ) : (
                        <Award className="w-4 h-4 stroke-[2.5]" />
                      )}
                      <span>
                        {item.type === "education"
                          ? "EDUCATION"
                          : "COMMUNITY SERVICE"}
                      </span>
                    </div>
                    <span className="font-mono text-xs font-bold uppercase px-2 py-0.5 bg-[#111111] text-[#FFFDF7]">
                      {item.period}
                    </span>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h3
                        className="text-xl font-bold uppercase"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {item.roleOrDegree}
                      </h3>
                      <p className="font-mono text-xs font-bold uppercase text-[#111111]/75 mt-1">
                        {item.organization} — {item.location}
                      </p>
                    </div>

                    <ul className="space-y-2">
                      {item.highlights.map((bullet, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm font-medium text-[#111111]/90"
                        >
                          <span className="w-2 h-2 bg-[#111111] mt-2 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-[#FFD100] border border-[#111111] font-mono text-xs font-bold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* Core Work Ethic / Soft Skills Box */}
              <div className="p-6 bg-[#2EE59D] brutal-border brutal-shadow space-y-3">
                <span className="font-mono text-xs font-bold uppercase bg-[#111111] text-[#FFFDF7] px-2 py-0.5">
                  OPERATIONAL MINDSET
                </span>
                <h3
                  className="text-xl font-bold uppercase"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Why Teams Enjoy Working With Me
                </h3>
                <ul className="space-y-1.5 text-sm font-bold">
                  <li>• Translates complex technical issues into plain business language</li>
                  <li>• Documents every system, SOP, and deployment so nothing is a black box</li>
                  <li>• Calm under pressure during production incidents &amp; tight deadlines</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
