"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

export default function HeroSection() {
  const geometryRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!geometryRef.current) return;

    const shapes = geometryRef.current.querySelectorAll(".geo-shape");
    shapes.forEach((shape, i) => {
      gsap.to(shape, {
        y: `${Math.sin(i) * 20}px`,
        x: `${Math.cos(i) * 10}px`,
        rotation: i % 2 === 0 ? 15 : -15,
        duration: 3 + i * 0.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    // Parallax on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 30;
      const y = (clientY / window.innerHeight - 0.5) * 30;

      shapes.forEach((shape, i) => {
        gsap.to(shape, {
          x: x * (i + 1) * 0.3,
          y: y * (i + 1) * 0.3,
          duration: 1,
          ease: "power2.out",
          overwrite: "auto",
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const titleVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 3.2,
      },
    },
  };

  const wordVariants = {
    hidden: { y: 120, opacity: 0, rotateX: -60 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-accent/[0.03] blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-accent-light/[0.02] blur-[100px]" />
      </div>

      {/* Geometric shapes */}
      <div ref={geometryRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Rotating ring */}
        <div className="geo-shape absolute top-[15%] right-[15%] w-24 h-24 md:w-32 md:h-32 border border-accent/20 rounded-full animate-spin-slow" />
        {/* Triangle outline */}
        <div className="geo-shape absolute bottom-[20%] right-[25%] w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[52px] border-b-accent/15" />
        {/* Small dot cluster */}
        <div className="geo-shape absolute top-[40%] right-[10%] flex flex-col gap-3">
          <div className="flex gap-3">
            <div className="w-2 h-2 rounded-full bg-accent/30" />
            <div className="w-2 h-2 rounded-full bg-accent/20" />
          </div>
          <div className="flex gap-3">
            <div className="w-2 h-2 rounded-full bg-accent/20" />
            <div className="w-2 h-2 rounded-full bg-accent/10" />
          </div>
        </div>
        {/* Cross */}
        <div className="geo-shape absolute top-[60%] left-[8%]">
          <div className="w-[1px] h-8 bg-accent/20 absolute left-1/2 -translate-x-1/2" />
          <div className="w-8 h-[1px] bg-accent/20 absolute top-1/2 -translate-y-1/2" />
        </div>
        {/* Dashed circle */}
        <div className="geo-shape absolute bottom-[30%] left-[15%] w-16 h-16 rounded-full border border-dashed border-text-muted/20" />
      </div>

      {/* Content */}
      <div className="section-padding relative z-10 w-full pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Status badge */}
          <motion.div
            className="flex items-center gap-2 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 0.6 }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success" />
            </span>
            <span className="font-code text-[10px] tracking-[0.3em] uppercase text-success">
              Open to Work
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.div
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="mb-8"
          >
            <div className="overflow-hidden mb-2">
              <motion.h1
                variants={wordVariants}
                className="text-[clamp(3rem,8vw,7rem)] font-extralight leading-[0.9] tracking-tight text-text-primary"
              >
                BUILDING
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-2 pl-4 md:pl-12">
              <motion.h1
                variants={wordVariants}
                className="text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-tight font-display italic text-accent"
              >
                data-driven
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                variants={wordVariants}
                className="text-[clamp(3rem,8vw,7rem)] font-extralight leading-[0.9] tracking-tight text-text-primary"
              >
                SOLUTIONS
              </motion.h1>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            className="max-w-xl mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.8, duration: 0.8 }}
          >
            <p className="text-text-secondary text-base md:text-lg leading-relaxed font-light">
              Hi! I&apos;m{" "}
              <span className="text-text-primary font-normal">Archi Jain</span>, a
              Computer Science Engineering (Data Science) student at Jain University,
              building data-driven solutions with Python, SQL, AI/ML, and modern technologies.
            </p>
          </motion.div>

          {/* Tags */}
          <motion.div
            className="flex flex-wrap items-center gap-3 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.2, duration: 0.8 }}
          >
            {["CSE (Data Science)", "Python & SQL", "AI / ML & Analytics", "B.Tech — Jain University"].map(
              (tag) => (
                <span
                  key={tag}
                  className="font-code text-[10px] tracking-[0.2em] uppercase px-4 py-2 border border-border rounded-full text-text-muted"
                >
                  {tag}
                </span>
              )
            )}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.5, duration: 0.8 }}
          >
            <span className="font-code text-[9px] tracking-[0.3em] uppercase text-text-muted">
              Scroll to explore
            </span>
            <motion.div
              className="w-[1px] h-12 bg-accent/50"
              animate={{ scaleY: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "top" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
