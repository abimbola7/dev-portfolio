"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-[200] w-full h-[2px] bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-[#10b981] to-[#34d399] shadow-[0_0_8px_rgba(16,185,129,0.8)] transition-none"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
