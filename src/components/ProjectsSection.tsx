"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Logistics & Cargo Management",
    subtitle: "UI/UX Design — Web Platform",
    description:
      "Designed UI/UX for a logistics and cargo management web platform using Figma, focusing on dashboards, inventory, finance, and client management workflows. Built comprehensive systems to streamline complex operational processes.",
    tags: ["Figma", "Dashboard Design", "User Flows", "Workflow Systems"],
    color: "#C4622D",
    image: "/images/project-logistics.webp",
    year: "2025",
  },
  {
    id: 2,
    title: "Video Streaming App",
    subtitle: "UI/UX Wireframing — Mobile Application",
    description:
      "Designed wireframes for a video streaming mobile application using Figma, focusing on intuitive navigation, video playback, search, subscriptions, and user experience. Created end-to-end user flow for seamless content discovery.",
    tags: ["Wireframing", "Mobile Design", "Figma", "User Experience"],
    color: "#7CB68E",
    image: "/images/project-streaming.webp",
    year: "2025",
  },
  {
    id: 3,
    title: "Navkar Hostels Website",
    subtitle: "Responsive Web Design",
    description:
      "Built a responsive hostel management website focused on user-friendly navigation and modern UI design. Worked on user-focused interfaces for accommodation details, inquiries, and contact management.",
    tags: ["Responsive Design", "Web Design", "HTML/CSS", "UI Design"],
    color: "#E8A87C",
    image: "/images/project-hostel.webp",
    year: "2024",
  },
  {
    id: 4,
    title: "Water Quality Monitor",
    subtitle: "System Design — Environmental Tech",
    description:
      "Developed components for a Water Quality Monitoring System using data processing and analytics techniques. Worked on data handling, preprocessing, and system design for real-world environmental monitoring.",
    tags: ["System Design", "Data Processing", "Analytics", "Python"],
    color: "#A39E98",
    image: "/images/project-water.webp",
    year: "2025",
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile || !trackRef.current || !sectionRef.current) return;

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

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [isMobile]);

  return (
    <section id="projects" ref={sectionRef} className="relative py-32 md:py-0 md:overflow-hidden">
      {/* Section label - visible on mobile, hidden on desktop (it'll be inside the pinned section) */}
      <div className="section-padding md:hidden">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-code text-[10px] tracking-[0.4em] uppercase text-accent">02</span>
          <div className="w-12 h-[1px] bg-accent/50" />
          <span className="font-code text-[10px] tracking-[0.4em] uppercase text-text-muted">
            Featured Work
          </span>
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
              Each project represents a unique challenge — from logistics dashboards to
              streaming apps. I approach design as a system of interconnected decisions,
              not just pixels.
            </p>
          </div>
        </div>

        {/* Project panels */}
        {projects.map((project, i) => (
          <ProjectPanel key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* Mobile: Vertical stack */}
      <div className="md:hidden space-y-16 section-padding">
        {projects.map((project, i) => (
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
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <div className="shrink-0 w-screen flex items-center section-padding">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="relative group">
          <div
            className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-bg-secondary"
            style={{ boxShadow: `0 30px 60px ${project.color}15` }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Project mockup placeholder with generated gradient */}
              <div
                className="w-full h-full relative"
                style={{
                  background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)`,
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  sizes="50vw"
                  onError={(e) => {
                    // Hide broken image, gradient background is fallback
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                {/* Overlay UI hint */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div
                      className="w-16 h-16 rounded-full border-2 flex items-center justify-center mx-auto mb-3 opacity-60"
                      style={{ borderColor: project.color }}
                    >
                      <span className="text-2xl" style={{ color: project.color }}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Year label */}
          <span
            className="absolute -bottom-4 -right-4 font-code text-[10px] tracking-[0.3em] px-3 py-1 rounded-full border border-border bg-bg-primary text-text-muted"
          >
            {project.year}
          </span>
        </div>

        {/* Content */}
        <div>
          <span className="font-code text-[10px] tracking-[0.3em] uppercase text-accent mb-4 block">
            Project {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-3xl md:text-4xl font-light text-text-primary leading-tight mb-2">
            {project.title}
          </h3>
          <p className="text-sm font-display italic text-text-secondary mb-6">
            {project.subtitle}
          </p>
          <p className="text-text-secondary text-base leading-relaxed font-light mb-8">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-code text-[9px] tracking-[0.15em] uppercase px-3 py-1.5 rounded-full border text-text-muted"
                style={{ borderColor: `${project.color}30` }}
              >
                {tag}
              </span>
            ))}
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
  project: (typeof projects)[0];
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
      {/* Image */}
      <div
        className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-border bg-bg-secondary mb-6"
        style={{ boxShadow: `0 20px 40px ${project.color}10` }}
      >
        <div
          className="w-full h-full"
          style={{
            background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)`,
          }}
        >
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
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-12 h-12 rounded-full border-2 flex items-center justify-center opacity-60"
              style={{ borderColor: project.color }}
            >
              <span className="text-lg" style={{ color: project.color }}>
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <span className="font-code text-[10px] tracking-[0.3em] uppercase text-accent mb-3 block">
        Project {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="text-2xl font-light text-text-primary leading-tight mb-1">
        {project.title}
      </h3>
      <p className="text-sm font-display italic text-text-secondary mb-4">
        {project.subtitle}
      </p>
      <p className="text-text-secondary text-sm leading-relaxed font-light mb-5">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-code text-[9px] tracking-[0.15em] uppercase px-3 py-1.5 rounded-full border border-border text-text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
