"use client";

import React, { useState } from "react";
import {
  Check,
  Copy,
  Download,
  ExternalLink,
  Mail,
  MessageSquare,
  Send,
} from "lucide-react";
import { PROFILE_DATA } from "@/data/portfolio";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    roleTrack: "Software / Web Engineering Role",
    message: "",
  });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE_DATA.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = `mailto:${PROFILE_DATA.email}`;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 border-t-[3px] border-[#111111]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2EE59D] brutal-border-sm font-mono text-xs font-bold uppercase">
            <MessageSquare className="w-4 h-4 stroke-[2.5]" />
            <span>04 // INITIATE CONNECTION</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Let&apos;s Build or Maintain Something Great
          </h2>
          <p className="text-base text-[#111111]/80 max-w-2xl font-medium">
            Hiring for a <strong>Software Engineer</strong>,{" "}
            <strong>Systems / Cloud Administrator</strong>,{" "}
            <strong>Data / BI Analyst</strong>, or{" "}
            <strong>IT Specialist</strong>? Send a message or grab my resume
            below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 7 Columns: Neo-Brutalist Contact Form */}
          <div className="lg:col-span-7 brutal-card p-6 sm:p-8 bg-white">
            {submitted ? (
              <div className="p-6 sm:p-8 bg-[#2EE59D] brutal-border space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111111] text-[#FFFDF7] font-mono text-xs font-bold uppercase">
                  MESSAGE READY // DISPATCH CONFIRMED
                </div>
                <h3
                  className="text-2xl sm:text-3xl font-bold uppercase"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Thanks, {formState.name || "there"}!
                </h3>
                <p className="text-sm sm:text-base font-medium">
                  Your inquiry regarding{" "}
                  <strong>{formState.roleTrack}</strong> has been formatted.
                  Click below to open it directly in your mail client or send another
                  note.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={`mailto:${PROFILE_DATA.email}?subject=${encodeURIComponent(
                      `[Portfolio Inquiry] ${formState.roleTrack} — from ${formState.name}`
                    )}&body=${encodeURIComponent(
                      `Name: ${formState.name}\nEmail: ${formState.email}\nTrack: ${formState.roleTrack}\n\n${formState.message}`
                    )}`}
                    className="px-5 py-3 bg-[#FFD100] font-mono text-xs font-bold uppercase brutal-btn inline-flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4 stroke-[2.5]" />
                    <span>Open in Email Client</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-3 bg-white font-mono text-xs font-bold uppercase brutal-btn"
                  >
                    Edit Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-name"
                      className="block font-mono text-xs font-bold uppercase"
                    >
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      placeholder="Jane Recruiter / Hiring Lead"
                      className="w-full px-4 py-3 bg-[#FFFDF7] brutal-border-sm font-medium text-sm focus:outline-none focus:bg-[#FFD100]/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="contact-email"
                      className="block font-mono text-xs font-bold uppercase"
                    >
                      Your Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 bg-[#FFFDF7] brutal-border-sm font-medium text-sm focus:outline-none focus:bg-[#FFD100]/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-track"
                    className="block font-mono text-xs font-bold uppercase"
                  >
                    Which IT Role / Opportunity is this regarding?
                  </label>
                  <select
                    id="contact-track"
                    value={formState.roleTrack}
                    onChange={(e) =>
                      setFormState({ ...formState, roleTrack: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-[#FFFDF7] brutal-border-sm font-mono text-xs sm:text-sm font-bold focus:outline-none focus:bg-[#FFD100]/20"
                  >
                    <option value="Software / Web Engineering Role">
                      Software / Full-Stack Web Engineering Role
                    </option>
                    <option value="Cloud / SysAdmin / DevOps Role">
                      Cloud / Systems Admin / DevOps Role
                    </option>
                    <option value="Data / BI / Systems Analyst Role">
                      Data / BI / Business Systems Analyst Role
                    </option>
                    <option value="General IT / Multi-Disciplinary Role">
                      General IT / Technical Support / Operations Role
                    </option>
                    <option value="Freelance / Consulting Project">
                      Freelance / Consulting Project
                    </option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-message"
                    className="block font-mono text-xs font-bold uppercase"
                  >
                    Message / Job Details *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    placeholder="Tell me about the team, role, or technical challenge you're looking to solve..."
                    className="w-full px-4 py-3 bg-[#FFFDF7] brutal-border-sm font-medium text-sm focus:outline-none focus:bg-[#FFD100]/20"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 bg-[#FFD100] font-mono text-sm font-bold uppercase brutal-btn inline-flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 stroke-[2.5]" />
                  <span>Send Inquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Right 5 Columns: Quick Copy Email + Social & Resume Cards */}
          <div className="lg:col-span-5 space-y-5">
            {/* One-Click Copy Email Box */}
            <div className="p-6 bg-[#FFD100] brutal-border brutal-shadow space-y-4">
              <span className="font-mono text-xs font-bold uppercase bg-[#111111] text-[#FFFDF7] px-2 py-0.5">
                FASTEST RESPONSE
              </span>
              <h3
                className="text-xl sm:text-2xl font-bold uppercase break-all"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {PROFILE_DATA.email}
              </h3>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-4 py-2.5 bg-white font-mono text-xs font-bold uppercase brutal-btn inline-flex items-center gap-2"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 stroke-[2.5] text-emerald-700" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 stroke-[2.5]" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${PROFILE_DATA.email}`}
                  className="px-4 py-2.5 bg-[#111111] text-[#FFFDF7] font-mono text-xs font-bold uppercase brutal-btn inline-flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Me</span>
                </a>

                <a
                  href={`tel:${PROFILE_DATA.phone.replace(/[^0-9+]/g, "")}`}
                  className="px-4 py-2.5 bg-white font-mono text-xs font-bold uppercase brutal-btn inline-flex items-center gap-2"
                >
                  <span>Call: {PROFILE_DATA.phone}</span>
                </a>
              </div>
            </div>

            {/* Download Resume Card */}
            <div className="p-6 bg-white brutal-card space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold uppercase bg-[#60A5FA] px-2 py-0.5 border border-[#111111]">
                  CURRICULUM VITAE
                </span>
                <span className="font-mono text-xs font-bold">UPDATED 2026</span>
              </div>
              <h3
                className="text-xl font-bold uppercase"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Need a Printable Copy for Your ATS or Hiring Panel?
              </h3>
              <p className="text-sm font-medium text-[#111111]/80">
                Includes full work history, certifications, technical skills
                matrix, and project metrics.
              </p>
              <a
                href={PROFILE_DATA.resumeUrl}
                download="Aliff_Wafiuddin_Resume.pdf"
                className="w-full px-5 py-3 bg-[#2EE59D] font-mono text-xs sm:text-sm font-bold uppercase brutal-btn inline-flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 stroke-[2.5]" />
                <span>Download Official Resume (PDF)</span>
              </a>
            </div>

            {/* Social Links Grid */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={PROFILE_DATA.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white brutal-btn flex items-center justify-between font-mono text-xs sm:text-sm font-bold uppercase hover:bg-[#60A5FA]"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-4 h-4 stroke-[2.5]" />
              </a>
              <a
                href={PROFILE_DATA.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white brutal-btn flex items-center justify-between font-mono text-xs sm:text-sm font-bold uppercase hover:bg-[#FF6B6B]"
              >
                <span>GitHub</span>
                <ExternalLink className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
