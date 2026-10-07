"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  const aboutText = `I'm Archi Jain — a Computer Science Engineering (Data Science) student at Jain University with a strong foundation in Python, SQL, and data-driven problem solving. I bring hands-on experience building AI/ML and data-focused projects, with an interest in using technology to develop practical and scalable solutions.`;

  const aboutText2 = `With practical experience across data analytics, preprocessing pipelines, ETL workflows, and software development, I focus on turning complex datasets into reliable, actionable insights. From predicting student dropout risks with machine learning to processing sensor readings for environmental monitoring systems, I approach every engineering challenge with analytical rigor and structured software design.`;

  useEffect(() => {
    if (!textRef.current) return;

    const words = textRef.current.querySelectorAll(".word");

    gsap.fromTo(
      words,
      { opacity: 0.12 },
      {
        opacity: 1,
        stagger: 0.02,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "bottom 40%",
          scrub: 1,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const renderWords = (text: string) => {
    const words = text.split(" ");
    return words.map((word, i) => {
      const isAccent =
        word.includes("Data") ||
        word.includes("Python") ||
        word.includes("SQL") ||
        word.includes("AI/ML") ||
        word.includes("scalable") ||
        word.includes("solutions") ||
        word.includes("problem");

      return (
        <span key={i}>
          <span
            className={`word inline ${
              isAccent ? "text-accent font-display italic" : ""
            }`}
          >
            {word}
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      );
    });
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 md:py-48"
    >
      {/* Section label */}
      <div className="section-padding">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-code text-[10px] tracking-[0.4em] uppercase text-accent">
            01
          </span>
          <div className="w-12 h-[1px] bg-accent/50" />
          <span className="font-code text-[10px] tracking-[0.4em] uppercase text-text-muted">
            About Me
          </span>
        </div>

        <div className="max-w-4xl mx-auto">
          <p
            ref={textRef}
            className="text-2xl md:text-4xl lg:text-[2.75rem] leading-[1.4] font-light text-text-primary word-reveal"
          >
            {renderWords(aboutText)}
          </p>

          <div className="mt-12 max-w-3xl">
            <p className="text-base md:text-lg leading-relaxed font-light text-text-secondary">
              {aboutText2}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto">
          {[
            { number: "8.02", label: "CGPA (8.023)" },
            { number: "10+", label: "Projects" },
            { number: "2", label: "Internships" },
            { number: "3", label: "Certifications" },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center p-6 border border-border rounded-2xl hover:border-accent/30 transition-colors duration-500"
            >
              <span className="text-3xl md:text-4xl font-display text-accent">
                {stat.number}
              </span>
              <span className="block mt-2 font-code text-[9px] tracking-[0.3em] uppercase text-text-muted">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
