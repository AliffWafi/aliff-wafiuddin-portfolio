"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  FolderGit2,
  GitBranch,
  Layers,
} from "lucide-react";
import {
  DOMAIN_CATEGORIES,
  ITDomainId,
  PROFILE_DATA,
  PROJECTS,
  ProjectCaseStudy,
} from "@/data/portfolio";
import CaseStudyModal from "./CaseStudyModal";

interface ProjectsSectionProps {
  activeDomain: ITDomainId;
  onSelectDomain: (domain: ITDomainId) => void;
}

export default function ProjectsSection({
  activeDomain,
  onSelectDomain,
}: ProjectsSectionProps) {
  const [selectedProject, setSelectedProject] =
    useState<ProjectCaseStudy | null>(null);

  const filteredProjects =
    activeDomain === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.domain === activeDomain);

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 border-t-[3px] border-[#111111]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Heading + Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#60A5FA] brutal-border-sm font-mono text-xs font-bold uppercase">
              <FolderGit2 className="w-4 h-4 stroke-[2.5]" />
              <span>02 // PROVEN DELIVERABLES</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Featured Projects &amp; Case Studies
            </h2>
            <p className="text-base text-[#111111]/80 max-w-2xl font-medium">
              Click any project card to open its full{" "}
              <strong>Neo-Brutalist Case Study Modal</strong>—including business
              context, architecture pipeline, and measurable impact.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2.5">
            {DOMAIN_CATEGORIES.map((category) => {
              const active = activeDomain === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => onSelectDomain(category.id)}
                  className={`px-3.5 py-2 font-mono text-xs font-bold uppercase brutal-btn ${
                    active
                      ? `${category.colorClass} text-[#111111]`
                      : "bg-white hover:bg-[#FFFDF7]"
                  }`}
                >
                  {category.shortLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <article
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="brutal-card brutal-card-hover flex flex-col justify-between cursor-pointer group overflow-hidden"
            >
              <div>
                {/* Top Colored Banner */}
                <div
                  className={`${project.accentBg} p-5 border-b-[3px] border-[#111111] space-y-3`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs font-bold uppercase px-2.5 py-0.5 bg-[#111111] text-[#FFFDF7]">
                      {project.domainLabel}
                    </span>
                    <span className="font-mono text-xs font-bold uppercase px-2 py-0.5 bg-white border-2 border-[#111111]">
                      CASE // 0{idx + 1}
                    </span>
                  </div>

                  <h3
                    className="text-xl sm:text-2xl font-bold uppercase leading-snug tracking-tight group-hover:underline"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {project.title}
                  </h3>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-5">
                  <p className="text-sm font-medium text-[#111111]/85 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Key Metrics Highlight Box */}
                  <div className="p-3.5 bg-[#FFFDF7] brutal-border-sm space-y-1.5">
                    <span className="font-mono text-[11px] font-bold uppercase text-[#111111]/70 block">
                      Key Impact Metrics:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.metrics.map((metric) => (
                        <span
                          key={metric}
                          className="font-mono text-xs font-bold bg-[#FFD100] px-2 py-0.5 border border-[#111111]"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-white border border-[#111111] font-mono text-[11px] font-bold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="px-6 py-4 bg-[#FFFDF7] border-t-[3px] border-[#111111] flex items-center justify-between gap-2">
                <span className="font-mono text-xs font-bold uppercase text-[#111111]/80 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 stroke-[2.5]" />
                  {project.role}
                </span>

                <span className="px-3 py-1.5 bg-[#FFD100] brutal-border-sm font-mono text-xs font-bold uppercase inline-flex items-center gap-1 group-hover:bg-[#2EE59D] transition-colors">
                  <span>Read Case Study</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Callout Strip */}
        <div className="p-6 bg-[#FFD100] brutal-border brutal-shadow flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3
              className="text-lg sm:text-xl font-bold uppercase"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Want to see source code, scripts, or architecture diagrams?
            </h3>
            <p className="text-sm font-medium">
              Every project above includes a full breakdown of the problem,
              execution steps, and system architecture inside its modal.
            </p>
          </div>
          <a
            href={PROFILE_DATA.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-white font-mono text-xs font-bold uppercase brutal-btn inline-flex items-center gap-2 shrink-0"
          >
            <GitBranch className="w-4 h-4 stroke-[2.5]" />
            <span>Visit GitHub (@AliffWafi)</span>
          </a>
        </div>
      </div>

      {/* Case Study Deep-Dive Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
