"use client";

import { useState, useCallback } from "react";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  const handlePreloaderComplete = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <Preloader onComplete={handlePreloaderComplete} />
      <CustomCursor />

      {isLoaded && (
        <SmoothScroll>
          <Navbar />
          <main>
            <HeroSection />

            {/* Divider */}
            <div className="section-padding">
              <div className="h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>

            <AboutSection />

            <div className="section-padding">
              <div className="h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>

            <ProjectsSection />

            <div className="section-padding">
              <div className="h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>

            <ExperienceSection />

            <div className="section-padding">
              <div className="h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>

            <SkillsSection />

            <div className="section-padding">
              <div className="h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>

            <AchievementsSection />

            <div className="section-padding">
              <div className="h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>

            <ContactSection />
          </main>
        </SmoothScroll>
      )}
    </>
  );
}
