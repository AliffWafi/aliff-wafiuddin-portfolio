"use client";

import React, { useState } from "react";
import { ITDomainId } from "@/data/portfolio";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function PortfolioHomePage() {
  const [activeDomain, setActiveDomain] = useState<ITDomainId>("all");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero
          activeDomain={activeDomain}
          onSelectDomain={setActiveDomain}
        />
        <SkillsSection
          activeDomain={activeDomain}
          onSelectDomain={setActiveDomain}
        />
        <ProjectsSection
          activeDomain={activeDomain}
          onSelectDomain={setActiveDomain}
        />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
