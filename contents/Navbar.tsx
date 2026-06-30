"use client";

import Button from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

const navLinks = [
  { label: "Hackathons", href: "#hackathons", id: "hackathons" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Education", href: "#education", id: "education" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const Navbar: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.id);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3, rootMargin: "-64px 0px 0px 0px" },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <nav className="fixed top-0 z-[100] w-full backdrop-blur-md bg-[#0a0a0a]/80 border-b border-white/5">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-6xl">
          <div className="text-2xl font-bold text-[#10b981] tracking-wider">
            <Link href="/">VT</Link>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className={`relative transition-colors hover:text-[#10b981] ${
                  activeSection === link.id ? "text-[#10b981]" : ""
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#10b981] rounded-full shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
                )}
              </Link>
            ))}

            <Link href="#contact">
              <Button variant="primary">Hire Me</Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-3 -mr-3 rounded-md text-gray-300 hover:text-white focus:outline-none transition-colors"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-[90] bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 z-[100] h-full w-[85%] max-w-sm bg-[#0a0a0a] border-l border-white/10 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen
            ? "translate-x-0"
            : "translate-x-full invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          <div className="w-full h-16 px-6 flex items-center justify-between border-b border-white/10 shrink-0">
            <div className="text-2xl font-bold text-[#10b981] tracking-wider">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                VO
              </Link>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-300 hover:text-[#10b981] focus:outline-none transition-colors cursor-pointer p-2 -mr-2 rounded-md"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col w-full px-6 space-y-6 mt-8 pb-12 text-lg font-medium text-gray-300">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`w-full block transition-colors hover:text-[#10b981] ${
                  activeSection === link.id ? "text-[#10b981]" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="w-full pt-4">
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full block"
              >
                <Button variant="primary" className="w-full rounded-md py-6">
                  Hire Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
