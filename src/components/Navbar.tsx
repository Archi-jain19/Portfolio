"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
          isScrolled
            ? "py-3 bg-bg-primary/80 backdrop-blur-xl border-b border-border"
            : "py-6 bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 3, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="section-padding flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-1 group"
            data-cursor="hover"
          >
            <span className="text-lg font-light tracking-wider text-text-primary">
              archi
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-150 transition-transform duration-300" />
            <span className="text-lg font-light tracking-wider text-text-primary">
              jain
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-sm tracking-wider text-text-secondary hover:text-text-primary transition-colors duration-300 uppercase font-light"
                data-cursor="hover"
              >
                {link.label}
              </button>
            ))}
            <a
              href="/Archi_Jain_Resume.pdf"
              target="_blank"
              className="text-sm tracking-wider text-text-primary border border-border hover:border-accent hover:text-accent px-5 py-2 rounded-full transition-all duration-300 uppercase font-light"
              data-cursor="hover"
            >
              Resume
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 w-7 z-[1001]"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            data-cursor="hover"
            aria-label="Toggle menu"
          >
            <motion.span
              className="w-full h-[1px] bg-text-primary origin-left"
              animate={isMobileOpen ? { rotate: 45, y: -2 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-full h-[1px] bg-text-primary"
              animate={isMobileOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-full h-[1px] bg-text-primary origin-left"
              animate={isMobileOpen ? { rotate: -45, y: 2 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 z-[999] bg-bg-primary flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-3xl font-light tracking-wider text-text-primary hover:text-accent transition-colors"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                data-cursor="hover"
              >
                {link.label}
              </motion.button>
            ))}
            <motion.a
              href="/Archi_Jain_Resume.pdf"
              target="_blank"
              className="text-lg tracking-wider text-accent border border-accent px-8 py-3 rounded-full mt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              Download Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
