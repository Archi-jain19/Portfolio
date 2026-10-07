"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { curatedProjects, RepoProject } from "@/app/api/github/route";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [projectsList, setProjectsList] = useState<RepoProject[]>(curatedProjects);
  const [filter, setFilter] = useState<"all" | "featured" | "ai-data" | "software-web">("all");
  const [isLiveSynced, setIsLiveSynced] = useState(false);

  // Responsive check
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Fetch public repositories dynamically from GitHub (via cached Next.js API route)
  useEffect(() => {
    let isMounted = true;
    async function loadGitHubProjects() {
      try {
        const res = await fetch("/api/github");
        if (res.ok) {
          const data = await res.json();
          if (isMounted && Array.isArray(data.projects) && data.projects.length > 0) {
            setProjectsList(data.projects);
            if (data.source === "github_live") {
              setIsLiveSynced(true);
            }
          }
        }
      } catch {
        // Silently preserve curated projects fallback
      }
    }
    loadGitHubProjects();
    return () => {
      isMounted = false;
    };
  }, []);

  // Filter projects based on active filter tab
  const filteredProjects = projectsList.filter((project) => {
    if (filter === "featured") return project.featured;
    if (filter === "ai-data") return project.category === "ai-data";
    if (filter === "software-web") return project.category === "software-web";
    return true;
  });

  // GSAP Horizontal scroll for desktop
  useEffect(() => {
    if (isMobile || !trackRef.current || !sectionRef.current) return;

    // Small delay to ensure DOM dimensions have settled
    const timeout = setTimeout(() => {
      if (!trackRef.current || !sectionRef.current) return;
      const totalWidth = trackRef.current.scrollWidth - window.innerWidth;

      const tween = gsap.to(trackRef.current, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${totalWidth}`,
          invalidateOnRefresh: true,
        },
      });

      ScrollTrigger.refresh();

      return () => {
        tween.kill();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    }, 50);

    return () => {
      clearTimeout(timeout);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [isMobile, filter, projectsList]);

  const featuredCount = projectsList.filter((p) => p.featured).length;

  return (
    <section id="projects" ref={sectionRef} className="relative py-32 md:py-0 md:overflow-hidden">
      {/* Section label - visible on mobile, hidden on desktop (it'll be inside the pinned section) */}
      <div className="section-padding md:hidden">
        <div className="flex items-center gap-4 mb-6">
          <span className="font-code text-[10px] tracking-[0.4em] uppercase text-accent">02</span>
          <div className="w-12 h-[1px] bg-accent/50" />
          <span className="font-code text-[10px] tracking-[0.4em] uppercase text-text-muted">
            Featured Work
          </span>
        </div>

        <h2 className="text-4xl font-extralight tracking-tight text-text-primary mb-1">
          Selected
        </h2>
        <h2 className="text-4xl font-display italic text-accent mb-6">projects</h2>

        <p className="text-text-secondary text-sm font-light leading-relaxed mb-6">
          Explore my public repositories and machine learning projects — spanning AI decision
          support, predictive modeling, sensor data analytics, and cloud engineering.
        </p>

        {/* Mobile filter pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setFilter("all")}
            className={`font-code text-[9px] tracking-[0.15em] uppercase px-3.5 py-1.5 rounded-full border transition-colors ${
              filter === "all"
                ? "border-accent bg-accent/10 text-accent font-medium"
                : "border-border text-text-muted hover:border-accent/40"
            }`}
          >
            All ({projectsList.length})
          </button>
          <button
            onClick={() => setFilter("featured")}
            className={`font-code text-[9px] tracking-[0.15em] uppercase px-3.5 py-1.5 rounded-full border transition-colors ${
              filter === "featured"
                ? "border-accent bg-accent/10 text-accent font-medium"
                : "border-border text-text-muted hover:border-accent/40"
            }`}
          >
            Featured ({featuredCount})
          </button>
          <button
            onClick={() => setFilter("ai-data")}
            className={`font-code text-[9px] tracking-[0.15em] uppercase px-3.5 py-1.5 rounded-full border transition-colors ${
              filter === "ai-data"
                ? "border-accent bg-accent/10 text-accent font-medium"
                : "border-border text-text-muted hover:border-accent/40"
            }`}
          >
            AI & Data
          </button>
          <button
            onClick={() => setFilter("software-web")}
            className={`font-code text-[9px] tracking-[0.15em] uppercase px-3.5 py-1.5 rounded-full border transition-colors ${
              filter === "software-web"
                ? "border-accent bg-accent/10 text-accent font-medium"
                : "border-border text-text-muted hover:border-accent/40"
            }`}
          >
            Software
          </button>
        </div>
      </div>

      {/* Desktop: Horizontal scroll track */}
      <div ref={trackRef} className="md:flex md:items-center md:min-h-screen hidden">
        {/* Intro panel */}
        <div className="shrink-0 w-screen flex items-center section-padding">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="font-code text-[10px] tracking-[0.4em] uppercase text-accent">
                02
              </span>
              <div className="w-12 h-[1px] bg-accent/50" />
              <span className="font-code text-[10px] tracking-[0.4em] uppercase text-text-muted">
                Featured Work
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-extralight tracking-tight text-text-primary mb-2">
              Selected
            </h2>
            <h2 className="text-5xl md:text-7xl font-display italic text-accent">projects</h2>
            <p className="mt-8 text-text-secondary text-lg font-light leading-relaxed max-w-lg">
              Explore my public repositories and machine learning projects — spanning AI decision
              support, predictive modeling, sensor data analytics, and cloud engineering. Synced live
              with GitHub.
            </p>

            {/* Filter pills */}
            <div className="flex flex-wrap items-center gap-3 mt-10">
              <button
                onClick={() => setFilter("all")}
                className={`font-code text-[10px] tracking-[0.2em] uppercase px-4 py-2 rounded-full border transition-all duration-300 ${
                  filter === "all"
                    ? "border-accent bg-accent/10 text-accent font-medium"
                    : "border-border text-text-muted hover:border-accent/40 hover:text-text-primary"
                }`}
                data-cursor="hover"
              >
                All Projects ({projectsList.length})
              </button>
              <button
                onClick={() => setFilter("featured")}
                className={`font-code text-[10px] tracking-[0.2em] uppercase px-4 py-2 rounded-full border transition-all duration-300 ${
                  filter === "featured"
                    ? "border-accent bg-accent/10 text-accent font-medium"
                    : "border-border text-text-muted hover:border-accent/40 hover:text-text-primary"
                }`}
                data-cursor="hover"
              >
                ⭐ Featured ({featuredCount})
              </button>
              <button
                onClick={() => setFilter("ai-data")}
                className={`font-code text-[10px] tracking-[0.2em] uppercase px-4 py-2 rounded-full border transition-all duration-300 ${
                  filter === "ai-data"
                    ? "border-accent bg-accent/10 text-accent font-medium"
                    : "border-border text-text-muted hover:border-accent/40 hover:text-text-primary"
                }`}
                data-cursor="hover"
              >
                AI & Data
              </button>
              <button
                onClick={() => setFilter("software-web")}
                className={`font-code text-[10px] tracking-[0.2em] uppercase px-4 py-2 rounded-full border transition-all duration-300 ${
                  filter === "software-web"
                    ? "border-accent bg-accent/10 text-accent font-medium"
                    : "border-border text-text-muted hover:border-accent/40 hover:text-text-primary"
                }`}
                data-cursor="hover"
              >
                Software & Cloud
              </button>
            </div>

            {/* GitHub live badge */}
            <div className="flex items-center gap-3 mt-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <a
                href="https://github.com/Archi-jain19"
                target="_blank"
                rel="noopener noreferrer"
                className="font-code text-[10px] tracking-[0.25em] text-text-muted hover:text-accent uppercase transition-colors"
                data-cursor="hover"
              >
                github.com/Archi-jain19 ↗
              </a>
              {isLiveSynced && (
                <span className="font-code text-[9px] tracking-[0.2em] uppercase px-2.5 py-0.5 rounded-full border border-success/30 text-success bg-success/5">
                  Live Synced
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Project panels */}
        {filteredProjects.map((project, i) => (
          <ProjectPanel key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* Mobile: Vertical stack */}
      <div className="md:hidden space-y-16 section-padding">
        {filteredProjects.map((project, i) => (
          <MobileProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

function ProjectPanel({
  project,
  index,
}: {
  project: RepoProject;
  index: number;
}) {
  return (
    <div className="shrink-0 w-screen flex items-center section-padding">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-2 gap-16 items-center">
        {/* Image / Card Visual */}
        <div className="relative group">
          <div
            className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-bg-secondary"
            style={{ boxShadow: `0 30px 60px ${project.color}15` }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-full h-full relative"
                style={{
                  background: `linear-gradient(135deg, ${project.color}18, ${project.color}08)`,
                }}
              >
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    sizes="50vw"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                )}
                {/* Overlay UI hint with glowing badge */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div
                      className="w-20 h-20 rounded-full border-2 flex items-center justify-center mx-auto mb-3 backdrop-blur-sm bg-bg-primary/40 transition-transform duration-500 group-hover:scale-110"
                      style={{ borderColor: project.color }}
                    >
                      <span className="text-2xl font-light" style={{ color: project.color }}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    {project.featured && (
                      <span
                        className="inline-block font-code text-[9px] tracking-[0.25em] uppercase px-3 py-1 rounded-full border bg-bg-primary/80 backdrop-blur-sm"
                        style={{ borderColor: `${project.color}60`, color: project.color }}
                      >
                        Featured
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Year & Star badges */}
          <div className="absolute -bottom-4 -right-4 flex items-center gap-2">
            {project.stars !== undefined && project.stars > 0 && (
              <span className="font-code text-[10px] tracking-[0.2em] px-3 py-1 rounded-full border border-border bg-bg-primary text-accent">
                ★ {project.stars}
              </span>
            )}
            <span className="font-code text-[10px] tracking-[0.3em] px-3 py-1 rounded-full border border-border bg-bg-primary text-text-muted">
              {project.year}
            </span>
          </div>
        </div>

        {/* Content */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-code text-[10px] tracking-[0.3em] uppercase text-accent block">
              Project {String(index + 1).padStart(2, "0")}
            </span>
            {project.featured && (
              <span className="font-code text-[9px] tracking-[0.2em] uppercase px-2.5 py-0.5 rounded-full border border-accent/40 text-accent bg-accent/10">
                Featured
              </span>
            )}
          </div>

          <h3 className="text-3xl md:text-4xl font-light text-text-primary leading-tight mb-2">
            {project.title}
          </h3>
          <p className="text-sm font-display italic text-text-secondary mb-6">
            {project.subtitle}
          </p>
          <p className="text-text-secondary text-base leading-relaxed font-light mb-8">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-code text-[9px] tracking-[0.15em] uppercase px-3 py-1.5 rounded-full border text-text-muted hover:border-accent/30 transition-colors"
                style={{ borderColor: `${project.color}35` }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Links: GitHub & Live Demo */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-code text-[10px] tracking-[0.2em] uppercase px-5 py-2.5 rounded-full border border-border hover:border-accent text-text-secondary hover:text-accent transition-all duration-300"
              data-cursor="hover"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              View Code ↗
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-code text-[10px] tracking-[0.2em] uppercase px-5 py-2.5 rounded-full bg-accent hover:bg-accent-light text-bg-primary font-medium transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
                data-cursor="hover"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Live Demo ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileProjectCard({
  project,
  index,
}: {
  project: RepoProject;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      {/* Image / Visual */}
      <div
        className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-border bg-bg-secondary mb-6"
        style={{ boxShadow: `0 20px 40px ${project.color}10` }}
      >
        <div
          className="w-full h-full relative"
          style={{
            background: `linear-gradient(135deg, ${project.color}18, ${project.color}08)`,
          }}
        >
          {project.image && (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="100vw"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          )}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div
                className="w-14 h-14 rounded-full border-2 flex items-center justify-center mx-auto mb-2 opacity-80 backdrop-blur-sm bg-bg-primary/40"
                style={{ borderColor: project.color }}
              >
                <span className="text-lg font-light" style={{ color: project.color }}>
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              {project.featured && (
                <span
                  className="font-code text-[8px] tracking-[0.2em] uppercase px-2.5 py-0.5 rounded-full border bg-bg-primary/80"
                  style={{ borderColor: `${project.color}50`, color: project.color }}
                >
                  Featured
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <span className="font-code text-[10px] tracking-[0.3em] uppercase text-accent">
          Project {String(index + 1).padStart(2, "0")}
        </span>
        <span className="font-code text-[9px] tracking-[0.2em] text-text-muted">
          {project.year}
        </span>
      </div>

      <h3 className="text-2xl font-light text-text-primary leading-tight mb-1">
        {project.title}
      </h3>
      <p className="text-sm font-display italic text-text-secondary mb-4">
        {project.subtitle}
      </p>
      <p className="text-text-secondary text-sm leading-relaxed font-light mb-5">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-code text-[9px] tracking-[0.15em] uppercase px-3 py-1.5 rounded-full border border-border text-text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Action Links */}
      <div className="flex flex-wrap items-center gap-3">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-code text-[9px] tracking-[0.2em] uppercase px-4 py-2 rounded-full border border-border hover:border-accent text-text-secondary hover:text-accent transition-all duration-300"
        >
          View Code ↗
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-code text-[9px] tracking-[0.2em] uppercase px-4 py-2 rounded-full bg-accent text-bg-primary font-medium"
          >
            Live Demo ↗
          </a>
        )}
      </div>
    </motion.div>
  );
}
