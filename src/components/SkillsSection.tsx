"use client";

import React from "react";
import { Filter, Layers } from "lucide-react";
import {
  DOMAIN_CATEGORIES,
  ITDomainId,
  SKILL_GROUPS,
} from "@/data/portfolio";

interface SkillsSectionProps {
  activeDomain: ITDomainId;
  onSelectDomain: (domain: ITDomainId) => void;
}

export default function SkillsSection({
  activeDomain,
  onSelectDomain,
}: SkillsSectionProps) {
  const visibleGroups =
    activeDomain === "all"
      ? SKILL_GROUPS
      : SKILL_GROUPS.filter((g) => g.domain === activeDomain);

  return (
    <section
      id="skills"
      className="py-16 sm:py-20 border-t-[3px] border-[#111111] bg-white/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header + Global Domain Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFD100] brutal-border-sm font-mono text-xs font-bold uppercase">
              <Layers className="w-4 h-4 stroke-[2.5]" />
              <span>01 // TECHNICAL ARSENAL</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Skills &amp; Operational Stack
            </h2>
            <p className="text-base text-[#111111]/80 max-w-2xl font-medium">
              Organized by core IT pillars so you can inspect my capabilities in{" "}
              <strong>Software Development</strong>,{" "}
              <strong>Cloud &amp; System Administration</strong>, or{" "}
              <strong>Data &amp; Business Systems</strong>.
            </p>
          </div>

          {/* Domain Filter Pills */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="font-mono text-xs font-bold uppercase flex items-center gap-1 mr-1">
              <Filter className="w-3.5 h-3.5 stroke-[2.5]" />
              Filter Track:
            </span>
            {DOMAIN_CATEGORIES.map((category) => {
              const active = activeDomain === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => onSelectDomain(category.id)}
                  className={`px-3.5 py-2 font-mono text-xs font-bold uppercase brutal-btn ${
                    active
                      ? `${category.colorClass} text-[#111111] ring-2 ring-[#111111]`
                      : "bg-white hover:bg-[#FFFDF7]"
                  }`}
                >
                  {category.shortLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Bento Cards */}
        <div
          className={`grid grid-cols-1 ${
            visibleGroups.length === 1
              ? "lg:grid-cols-1"
              : "lg:grid-cols-3"
          } gap-8`}
        >
          {visibleGroups.map((group) => (
            <div
              key={group.id}
              className="brutal-card flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Colored Card Header Banner */}
                <div
                  className={`${group.accentBg} p-5 border-b-[3px] border-[#111111] flex items-center justify-between gap-2`}
                >
                  <h3
                    className="text-xl sm:text-2xl font-bold uppercase tracking-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {group.title}
                  </h3>
                  <span className="font-mono text-xs font-bold uppercase px-2 py-0.5 bg-[#111111] text-[#FFFDF7] shrink-0">
                    {group.skills.length} SKILLS
                  </span>
                </div>

                {/* Group Description */}
                <div className="p-6 space-y-5">
                  <p className="text-sm font-medium text-[#111111]/85 leading-relaxed">
                    {group.description}
                  </p>

                  {/* Skill Badges Grid */}
                  <div className="flex flex-wrap gap-2.5">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`px-3 py-2 brutal-border-sm font-mono text-xs font-bold flex items-center gap-2 ${
                          skill.highlight
                            ? `${group.accentBg}/35 brutal-shadow-sm`
                            : "bg-[#FFFDF7]"
                        }`}
                      >
                        <span>{skill.name}</span>
                        <span
                          className={`text-[10px] uppercase px-1.5 py-0.5 border border-[#111111] ${
                            skill.level === "Core"
                              ? "bg-[#FFD100]"
                              : "bg-white"
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-3 bg-[#FFFDF7] border-t-2 border-[#111111] flex items-center justify-between font-mono text-xs font-bold">
                <span>STATUS: PRODUCTION-TESTED</span>
                <a
                  href="#projects"
                  onClick={() => onSelectDomain(group.domain)}
                  className="underline hover:bg-[#FFD100] px-1"
                >
                  SEE {group.domain.toUpperCase()} PROJECTS →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
