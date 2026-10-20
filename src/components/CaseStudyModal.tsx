"use client";

import React, { useEffect } from "react";
import {
  CheckCircle2,
  Cpu,
  ExternalLink,
  GitBranch,
  Sparkles,
  Target,
  X,
} from "lucide-react";
import { ProjectCaseStudy } from "@/data/portfolio";

interface CaseStudyModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export default function CaseStudyModal({
  project,
  onClose,
}: CaseStudyModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#111111]/75 backdrop-blur-[2px] overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#FFFDF7] brutal-border brutal-shadow-lg my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Header Banner */}
        <div
          className={`${project.accentBg} p-6 sm:p-8 border-b-[3px] border-[#111111] flex items-start justify-between gap-4`}
        >
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs font-bold uppercase px-2.5 py-1 bg-[#111111] text-[#FFFDF7]">
                {project.domainLabel}
              </span>
              <span className="font-mono text-xs font-bold uppercase px-2.5 py-1 bg-white brutal-border-sm">
                {project.role} • {project.year}
              </span>
            </div>
            <h3
              id="modal-project-title"
              className="text-2xl sm:text-3xl font-bold uppercase tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {project.title}
            </h3>
            <p className="text-sm sm:text-base font-semibold text-[#111111]/90">
              {project.subtitle}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study modal"
            className="p-2.5 bg-white brutal-btn shrink-0"
          >
            <X className="w-6 h-6 stroke-[2.5]" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Key Impact Metrics Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {project.metrics.map((metric) => (
              <div
                key={metric}
                className="p-3.5 bg-[#FFD100] brutal-border-sm brutal-shadow-sm font-mono text-xs sm:text-sm font-bold uppercase text-center"
              >
                {metric}
              </div>
            ))}
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* The Challenge */}
            <div className="p-5 bg-white brutal-border-sm brutal-shadow-sm space-y-3">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase bg-[#FF6B6B] px-2.5 py-1 border border-[#111111]">
                <Target className="w-4 h-4 stroke-[2.5]" />
                <span>Problem &amp; Business Need</span>
              </div>
              <p className="text-sm sm:text-base text-[#111111]/90 leading-relaxed font-medium">
                {project.challenge}
              </p>
            </div>

            {/* Outcomes */}
            <div className="p-5 bg-white brutal-border-sm brutal-shadow-sm space-y-3">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase bg-[#2EE59D] px-2.5 py-1 border border-[#111111]">
                <Sparkles className="w-4 h-4 stroke-[2.5]" />
                <span>Measurable Outcomes</span>
              </div>
              <ul className="space-y-2">
                {project.outcomes.map((outcome, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm font-medium text-[#111111]/90"
                  >
                    <CheckCircle2 className="w-4 h-4 stroke-[2.5] shrink-0 mt-0.5 text-[#111111]" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Engineering & Operational Implementation */}
          <div className="p-5 bg-white brutal-border-sm brutal-shadow-sm space-y-3">
            <h4
              className="text-lg font-bold uppercase"
              style={{ fontFamily: "var(--font-display)" }}
            >
              What I Built &amp; Executed
            </h4>
            <ul className="space-y-2.5">
              {project.solution.map((step, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm sm:text-base font-medium text-[#111111]/90"
                >
                  <span className="font-mono text-xs font-bold px-2 py-0.5 bg-[#FFD100] border border-[#111111] shrink-0 mt-0.5">
                    0{index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* System Architecture Flow */}
          <div className="p-4 bg-[#111111] text-[#FFFDF7] brutal-border-sm space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-[#2EE59D]">
              <Cpu className="w-4 h-4" />
              <span>Architecture &amp; Workflow Pipeline</span>
            </div>
            <p className="font-mono text-xs sm:text-sm leading-relaxed">
              {project.architectureNotes}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="space-y-2">
            <span className="font-mono text-xs font-bold uppercase">
              Technologies &amp; Tools Used:
            </span>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white brutal-border-sm font-mono text-xs font-bold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-white border-t-[3px] border-[#111111] flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-[#FFD100] font-mono text-xs font-bold uppercase brutal-btn inline-flex items-center gap-2"
              >
                <span>Live Demo / Preview</span>
                <ExternalLink className="w-4 h-4 stroke-[2.5]" />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-[#FFFDF7] font-mono text-xs font-bold uppercase brutal-btn inline-flex items-center gap-2"
              >
                <GitBranch className="w-4 h-4 stroke-[2.5]" />
                <span>Source / Architecture Repo</span>
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 bg-[#111111] text-[#FFFDF7] font-mono text-xs font-bold uppercase brutal-btn hover:bg-[#FF6B6B] hover:text-[#111111]"
          >
            Close Case Study [ESC]
          </button>
        </div>
      </div>
    </div>
  );
}
