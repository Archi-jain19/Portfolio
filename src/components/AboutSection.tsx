"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  const aboutText = `I'm Archi Jain — an analytical and creative mind passionate about UI/UX design and solving problems through intuitive digital experiences. Currently pursuing my B.Tech in Computer Science Engineering (Data Science) at Jain University, I bring a unique blend of technical depth and design thinking to every project I touch.`;

  const aboutText2 = `I'm a quick learner skilled in Figma, wireframing, prototyping, and modern design practices. From designing logistics platforms to wireframing video streaming apps, I approach every challenge as a product thinker — mapping user flows, building systems, and crafting interfaces that just make sense.`;

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
        word.includes("UI/UX") ||
        word.includes("design") ||
        word.includes("product") ||
        word.includes("intuitive") ||
        word.includes("creative");

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
            { number: "8.0+", label: "CGPA" },
            { number: "4+", label: "Projects" },
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
