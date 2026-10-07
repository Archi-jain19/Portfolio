"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const certifications = [
  "Data Fundamentals — IBM (Issued Mar 2024)",
  "Microsoft Power BI — Infosys (Issued Jun 2025)",
  "Programming Fundamentals Using Python — Infosys (Issued Jun 2025)",
];

const achievements = [
  {
    icon: "🏆",
    title: "Winner – Escape Room Challenge",
    description: "Secured 1st position in a multi-round problem-solving competition",
    year: "2025",
  },
  {
    icon: "🥇",
    title: "Winner – GRINOVA Ideathon 2026",
    description: "Secured 1st position among participating teams at Jain University",
    year: "2026",
  },
];

const extraCurricular = [
  {
    role: "Design Lead",
    org: "ANOVA Club — Jain University",
  },
  {
    role: "Core Member",
    org: "College Technical Council, contributing to 5+ technical events and student initiatives",
  },
  {
    role: "Participant",
    org: "24-hour Hackathon organized by CRCE Cell, Jain University (2025)",
  },
];

export default function AchievementsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="relative py-40 md:py-56 overflow-hidden">
      <div className="section-padding">
        {/* Section label */}
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-4">
            <span className="font-code text-[10px] tracking-[0.4em] uppercase text-accent">
              05
            </span>
            <div className="w-12 h-[1px] bg-accent/50" />
            <span className="font-code text-[10px] tracking-[0.4em] uppercase text-text-muted">
              Achievements & More
            </span>
          </div>
        </div>

        {/* Section title — CENTERED with more bottom margin */}
        <div className="text-center mb-20 md:mb-24">
          <h2 className="text-4xl md:text-6xl font-extralight tracking-tight text-text-primary">
            Recognition &
          </h2>
          <h2 className="text-4xl md:text-6xl font-display italic text-accent mt-2">
            milestones
          </h2>
        </div>

        {/* Achievement Cards — bigger gaps, more padding */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-[6rem]">
          {achievements.map((achievement, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative p-8 md:p-10 rounded-2xl border border-border bg-bg-secondary/30 hover:border-accent/30 hover:bg-bg-elevated/30 transition-all duration-500 text-center"
            >
              {/* Year badge */}
              <span className="absolute top-5 right-5 font-code text-[9px] tracking-[0.2em] text-text-muted">
                {achievement.year}
              </span>

              {/* Icon */}
              <span className="text-4xl mb-5 block group-hover:scale-110 transition-transform duration-300">
                {achievement.icon}
              </span>

              {/* Title */}
              <h3 className="text-lg font-light text-text-primary mb-3">
                {achievement.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-text-secondary font-light leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certifications Marquee — more vertical space */}
        <div className="mb-[6rem]">
          <h3 className="font-code text-[11px] tracking-[0.3em] uppercase text-text-muted text-center mb-[3rem]">
            Certifications
          </h3>
          <div className="relative overflow-hidden py-7 border-y border-border">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg-primary to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg-primary to-transparent z-10" />

            <div className="flex animate-marquee whitespace-nowrap">
              {[...certifications, ...certifications, ...certifications, ...certifications].map(
                (cert, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-4 mx-8 text-sm text-text-secondary font-light"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {cert}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* Extra Curricular — more space */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-code text-[11px] tracking-[0.3em] uppercase text-text-muted text-center mb-[3rem]">
            Leadership & Activities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {extraCurricular.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                className="p-6 md:p-7 rounded-xl border border-border bg-bg-secondary/20 hover:border-accent/20 transition-all duration-300"
              >
                <span className="text-base font-display italic text-accent">{item.role}</span>
                <p className="text-sm text-text-secondary font-light mt-2 leading-relaxed">{item.org}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
