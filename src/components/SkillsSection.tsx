"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    icon: "💻",
    skills: ["Python", "SQL"],
  },
  {
    title: "Data & Analytics",
    icon: "📊",
    skills: ["Pandas", "NumPy", "Data Preprocessing", "Data Analysis", "Data Visualization"],
  },
  {
    title: "AI & Generative AI",
    icon: "🧠",
    skills: ["LLMs", "RAG", "Embeddings", "LangChain", "Prompt Engineering", "Generative AI"],
  },
  {
    title: "Data Engineering",
    icon: "⚙️",
    skills: ["ETL", "Data Processing", "Data Modeling"],
  },
  {
    title: "Databases",
    icon: "🗄",
    skills: ["MySQL", "MongoDB"],
  },
  {
    title: "Development & Tools",
    icon: "🛠",
    skills: ["Flask", "REST APIs", "Git", "GitHub", "Power BI", "Excel"],
  },
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={sectionRef} className="relative py-40 md:py-56">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-accent/[0.02] blur-[100px]" />
      </div>

      <div className="section-padding relative z-10">
        {/* Section label */}
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-4">
            <span className="font-code text-[10px] tracking-[0.4em] uppercase text-accent">
              04
            </span>
            <div className="w-12 h-[1px] bg-accent/50" />
            <span className="font-code text-[10px] tracking-[0.4em] uppercase text-text-muted">
              Skills & Technologies
            </span>
          </div>
        </div>

        {/* Section title — CENTERED */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-6xl font-extralight tracking-tight text-text-primary mb-4 leading-tight">
            Technical &
          </h2>
          <h2 className="text-4xl md:text-6xl font-display italic text-accent leading-tight">
            competencies
          </h2>
        </div>

        {/* Subtitle — CENTERED */}
        <p className="text-center text-text-secondary text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto mb-20">
          A curated technical toolkit centered on data science, machine learning, and software
          development — from data preprocessing pipelines to intelligent, data-driven systems.
        </p>

        {/* Skills Cards — CENTERED and balanced using flex wrap */}
        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: catIndex * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group p-7 md:p-8 rounded-2xl border border-border bg-bg-secondary/30 hover:border-accent/30 hover:bg-bg-elevated/50 transition-all duration-500 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)]"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="font-code text-[11px] tracking-[0.2em] uppercase text-text-secondary group-hover:text-accent transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              {/* Skills — bigger gaps between pills */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: catIndex * 0.1 + skillIndex * 0.05 + 0.3,
                    }}
                    className="px-5 py-2.5 rounded-xl bg-bg-primary border border-border text-sm text-text-primary font-light
                               hover:border-accent hover:text-accent hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5
                               transition-all duration-300 cursor-default"
                    data-cursor="hover"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
