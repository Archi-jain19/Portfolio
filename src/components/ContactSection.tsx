"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/archi-jain-552b20287/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/Archi-jain19",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:archizn19@gmail.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("archizn19@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-40 md:py-56">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full bg-accent/[0.03] blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-light/[0.02] blur-[100px]" />
      </div>

      <div className="section-padding relative z-10">
        {/* Section label */}
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-4">
            <span className="font-code text-[10px] tracking-[0.4em] uppercase text-accent">
              06
            </span>
            <div className="w-12 h-[1px] bg-accent/50" />
            <span className="font-code text-[10px] tracking-[0.4em] uppercase text-text-muted">
              Get in Touch
            </span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          {/* Status badge */}
          <motion.div
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-success/30 bg-success/5 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success" />
            </span>
            <span className="font-code text-[10px] tracking-[0.3em] uppercase text-success">
              Open to Opportunities
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-tight text-text-primary leading-tight">
              Looking for a
            </h2>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display italic text-accent leading-tight mt-2">
              Data Science Engineer?
            </h2>
          </motion.div>

          {/* Let's talk */}
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl md:text-5xl font-extralight tracking-tight text-text-primary">
              Let&apos;s{" "}
              <span className="font-display italic text-accent">talk</span>
            </h3>
          </motion.div>

          {/* Description — more top margin */}
          <motion.p
            className="text-text-secondary text-base md:text-lg font-light leading-[1.8] max-w-lg mx-auto mt-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I&apos;m always excited to connect over data science, machine learning, and software
            development. Whether it&apos;s a project, an opportunity, or a technical conversation
            — I&apos;d love to hear from you.
          </motion.p>

          {/* Email copy button — more top margin */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <button
              onClick={handleCopyEmail}
              className="group relative inline-flex items-center gap-4 px-8 py-4 rounded-full border border-border hover:border-accent bg-bg-secondary/50 hover:bg-accent/10 transition-all duration-500"
              data-cursor="hover"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-text-muted group-hover:text-accent transition-colors"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span className="text-sm md:text-base text-text-primary font-light tracking-wide">
                archizn19@gmail.com
              </span>
              <span className="font-code text-[9px] tracking-[0.2em] uppercase text-text-muted group-hover:text-accent transition-colors ml-2">
                {copied ? "✓ Copied!" : "Click to copy"}
              </span>
            </button>
          </motion.div>

          {/* Phone — more spacing */}
          <motion.p
            className="mt-6 font-code text-[12px] tracking-[0.25em] text-text-muted"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
          >
            +91 9754839167
          </motion.p>

          {/* Social links — more top margin and bigger gaps */}
          <motion.div
            className="flex items-center justify-center gap-5 mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-3.5 rounded-full border border-border hover:border-accent/50 text-text-secondary hover:text-accent transition-all duration-300"
                data-cursor="hover"
              >
                {link.icon}
                <span className="font-code text-[10px] tracking-[0.2em] uppercase">
                  {link.label}
                </span>
              </a>
            ))}
          </motion.div>

          {/* Download CV — more spacing */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            <a
              href="/Archi_Jain_Resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-accent hover:bg-accent-light text-bg-primary font-medium text-sm tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
              data-cursor="hover"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7,10 12,15 17,10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Floating interactive elements — more top margin */}
        <div className="relative mt-28 max-w-3xl mx-auto h-36 hidden md:block">
          {["Python", "SQL", "Pandas", "AI / ML", "Power BI"].map((tool, i) => (
            <motion.div
              key={tool}
              className="absolute px-5 py-2.5 rounded-full border border-border bg-bg-secondary/50 text-text-muted font-code text-[10px] tracking-[0.2em] uppercase cursor-grab active:cursor-grabbing"
              style={{
                left: `${12 + i * 17}%`,
                top: `${15 + Math.sin(i) * 30}%`,
              }}
              drag
              dragConstraints={{
                top: -60,
                left: -120,
                right: 120,
                bottom: 60,
              }}
              dragElastic={0.3}
              whileHover={{ scale: 1.1, borderColor: "var(--accent)" }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.5 + i * 0.1, duration: 0.5 }}
            >
              {tool}
            </motion.div>
          ))}
          <p className="absolute -bottom-2 left-1/2 -translate-x-1/2 font-code text-[9px] tracking-[0.3em] uppercase text-text-muted/50">
            👋 Drag me!
          </p>
        </div>
      </div>

      {/* Footer — more top margin and spacing */}
      <div className="section-padding mt-28 pt-10 border-t border-border">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-light text-text-muted">archi</span>
            <span className="w-1 h-1 rounded-full bg-accent" />
            <span className="text-sm font-light text-text-muted">jain</span>
          </div>
          <p className="font-code text-[9px] tracking-[0.2em] uppercase text-text-muted">
            Designed & Built by Archi Jain · 2026
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-code text-[9px] tracking-[0.2em] uppercase text-text-muted hover:text-accent transition-colors"
            data-cursor="hover"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </section>
  );
}
