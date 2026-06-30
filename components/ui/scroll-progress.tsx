"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 z-[200] w-full h-[2px] origin-left bg-gradient-to-r from-[#10b981] to-[#34d399] shadow-[0_0_8px_rgba(16,185,129,0.8)] pointer-events-none"
      style={{ scaleX }}
    />
  );
}
