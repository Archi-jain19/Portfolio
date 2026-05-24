"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: "SE Intern",
    company: "Infosys Springboard Virtual Internship 6.0",
    period: "Dec 2025 — Feb 2026",
    type: "Virtual Internship",
    description: [
      "Developed components for a Water Quality Monitoring System using data processing and analytics techniques",
      "Worked on data handling, preprocessing, and system design for real-world environmental monitoring",
    ],
    tags: ["Data Processing", "Analytics", "System Design", "Environmental Tech"],
  },
  {
    role: "Frontend Developer Intern",
    company: "Uptoskills",
    period: "Jan 2025 — Apr 2025",
    type: "Remote",
    description: [
      "Developed a responsive, user-friendly HR offer letter system integrating frontend forms with backend logic",
      "Implemented intuitive UI components with clean data flow architecture",
    ],
    tags: ["React", "Frontend", "UI Development", "HR Tech"],
  },
];

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lineRef.current || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 50%",
            end: "bottom 50%",
            scrub: 1,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="relative py-40 md:py-56">
      <div className="section-padding">
        {/* Section label */}
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-4">
            <span className="font-code text-[10px] tracking-[0.4em] uppercase text-accent">
              03
            </span>
            <div className="w-12 h-[1px] bg-accent/50" />
            <span className="font-code text-[10px] tracking-[0.4em] uppercase text-text-muted">
              Experience
            </span>
          </div>
        </div>

        {/* Section title */}
        <div className="text-center mb-24 md:mb-32">
          <h2 className="text-4xl md:text-6xl font-extralight tracking-tight text-text-primary">
            Work
          </h2>
          <h2 className="text-4xl md:text-6xl font-display italic text-accent mt-1">
            experience
          </h2>
        </div>

        {/* Timeline container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Desktop center line */}
          <div
            ref={lineRef}
            className="absolute hidden md:block origin-top"
            style={{
              left: "50%",
              marginLeft: "-0.5px",
              top: 0,
              bottom: 0,
              width: "1px",
              background:
                "linear-gradient(to bottom, transparent 0%, var(--accent) 10%, var(--accent) 90%, transparent 100%)",
              opacity: 0.35,
            }}
          />

          {/* Mobile left line */}
          <div
            className="absolute md:hidden"
            style={{
              left: "18px",
              top: 0,
              bottom: 0,
              width: "1px",
              background:
                "linear-gradient(to bottom, transparent 0%, var(--accent) 10%, var(--accent) 90%, transparent 100%)",
              opacity: 0.25,
            }}
          />

          {/* Experience entries */}
          <div className="flex flex-col gap-16 md:gap-24">
            {experiences.map((exp, i) => (
              <ExperienceCard key={i} experience={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  experience,
  index,
}: {
  experience: (typeof experiences)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative">
      {/* ===== DESKTOP LAYOUT ===== */}
      <div className="hidden md:block">
        <div className="grid grid-cols-[1fr_60px_1fr] items-start">
          {/* Left column */}
          <div className="flex justify-end">
            {isLeft ? (
              <div className="w-full max-w-[480px]">
                <CardContent
                  experience={experience}
                  isInView={isInView}
                  slideFrom="left"
                />
              </div>
            ) : (
              <div /> /* empty spacer */
            )}
          </div>

          {/* Center column — timeline dot */}
          <div className="flex justify-center pt-8">
            <motion.div
              className="relative"
              initial={{ scale: 0, opacity: 0 }}
              animate={
                isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
              }
              transition={{
                duration: 0.5,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
            >
              {/* Pulse ring */}
              <div className="absolute -inset-1 rounded-full bg-accent/20 animate-ping" />
              {/* Solid dot */}
              <div className="relative w-4 h-4 rounded-full bg-accent border-[3px] border-bg-primary shadow-[0_0_15px_rgba(196,98,45,0.5)]" />
            </motion.div>
          </div>

          {/* Right column */}
          <div className="flex justify-start">
            {!isLeft ? (
              <div className="w-full max-w-[480px]">
                <CardContent
                  experience={experience}
                  isInView={isInView}
                  slideFrom="right"
                />
              </div>
            ) : (
              <div /> /* empty spacer */
            )}
          </div>
        </div>
      </div>

      {/* ===== MOBILE LAYOUT ===== */}
      <div className="md:hidden relative pl-12">
        {/* Mobile dot */}
        <motion.div
          className="absolute left-[14px] top-8"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="w-3 h-3 rounded-full bg-accent border-2 border-bg-primary shadow-[0_0_10px_rgba(196,98,45,0.4)]" />
        </motion.div>

        <CardContent
          experience={experience}
          isInView={isInView}
          slideFrom="left"
        />
      </div>
    </div>
  );
}

function CardContent({
  experience,
  isInView,
  slideFrom,
}: {
  experience: (typeof experiences)[0];
  isInView: boolean;
  slideFrom: "left" | "right";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: slideFrom === "left" ? -50 : 50, y: 10 }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, x: slideFrom === "left" ? -50 : 50, y: 10 }
      }
      transition={{
        duration: 0.7,
        delay: 0.25,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      }}
    >
      <div
        className="group relative rounded-2xl border border-border/70 overflow-hidden
                    transition-all duration-500
                    hover:border-accent/40
                    hover:shadow-[0_12px_50px_rgba(196,98,45,0.1)]
                    hover:-translate-y-1.5"
        style={{
          background:
            "linear-gradient(145deg, rgba(36,36,36,0.8) 0%, rgba(26,26,26,0.95) 100%)",
        }}
      >
        {/* Top accent line */}
        <div className="h-[2px] bg-gradient-to-r from-accent/60 via-accent/20 to-transparent" />

        <div className="p-8 md:p-10">
          {/* Period & Type row */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="font-code text-[10px] tracking-[0.25em] text-accent uppercase font-medium">
              {experience.period}
            </span>
            <span className="w-1 h-1 rounded-full bg-text-muted/40" />
            <span className="font-code text-[10px] tracking-[0.2em] text-text-muted uppercase">
              {experience.type}
            </span>
          </div>

          {/* Role title */}
          <h3 className="text-2xl md:text-[1.75rem] font-light text-text-primary mb-2 tracking-tight leading-snug">
            {experience.role}
          </h3>

          {/* Company name */}
          <p className="text-sm md:text-base font-display italic text-text-secondary/80 mb-7">
            {experience.company}
          </p>

          {/* Divider */}
          <div className="w-10 h-[1px] bg-accent/30 mb-7" />

          {/* Description bullets */}
          <ul className="space-y-4 mb-8">
            {experience.description.map((desc, j) => (
              <li key={j} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-[7px] shrink-0" />
                <span className="text-sm md:text-[15px] text-text-secondary leading-relaxed font-light">
                  {desc}
                </span>
              </li>
            ))}
          </ul>

          {/* Tags */}
          <div className="flex flex-wrap gap-2.5 pt-2">
            {experience.tags.map((tag) => (
              <span
                key={tag}
                className="font-code text-[9px] tracking-[0.18em] uppercase px-4 py-2 rounded-full
                           border border-border/50 text-text-muted/70
                           group-hover:border-accent/25 group-hover:text-text-secondary/80
                           transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
