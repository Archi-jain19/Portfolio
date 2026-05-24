"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [isLoading, setIsLoading] = useState(true);
  const name = "ARCHI JAIN";
  const subtitle = "UI/UX Designer";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(onComplete, 800);
    }, 2800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="preloader"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="relative">
            <div className="flex overflow-hidden">
              {name.split("").map((char, i) => (
                <motion.span
                  key={i}
                  className="text-5xl md:text-7xl font-light tracking-[0.2em] font-display"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ color: "var(--text-primary)" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>

            <motion.div
              className="flex justify-center mt-4 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <motion.span
                className="font-code text-xs tracking-[0.4em] uppercase"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 0.5 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                style={{ color: "var(--text-secondary)" }}
              >
                {subtitle}
              </motion.span>
            </motion.div>

            <motion.div
              className="mt-8 mx-auto h-[1px] bg-accent"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
