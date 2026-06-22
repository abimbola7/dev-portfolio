"use client";

import Button from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { FC, useState } from "react";

const Navbar: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#0a0a0a] border-border/40">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-6xl">
          <div className="text-2xl font-bold text-[#10b981] tracking-wider">
            <Link href="/">VO</Link>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
            <Link
              href="/#hackathons"
              className="hover:text-[#10b981] transition-colors"
            >
              Hackathons
            </Link>
            <Link
              href="/#experience"
              className="hover:text-[#10b981] transition-colors"
            >
              Experience
            </Link>
            <Link
              href="/#education"
              className="hover:text-[#10b981] transition-colors"
            >
              Education
            </Link>
            <Link
              href="/#skills"
              className="hover:text-[#10b981] transition-colors"
            >
              Skills
            </Link>
            <Link
              href="/#contact"
              className="hover:text-[#10b981] transition-colors"
            >
              Contact
            </Link>

            <Link href="/#contact">
              <Button variant="primary">Hire Me</Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => {
                setIsMobileMenuOpen(true);
              }}
              className="p-3 -mr-3 rounded-md text-gray-300 hover:text-white focus:outline-none transition-colors"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-[90] bg-black/50 backdrop-blur-sm transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 z-[100] h-full w-[85%] max-w-sm bg-[#0a0a0a] border-l border-border/40 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen
            ? "translate-x-0"
            : "translate-x-full invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          <div className="w-full h-16 px-6 flex items-center justify-between border-b border-border/40 shrink-0">
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

          <div className="flex flex-col w-full px-6 space-y-6 mt-8 pb-12 text-lg font-medium text-gray-300 overflow-y-auto">
            <Link
              href="/#hackathons"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#10b981] transition-colors w-full block"
            >
              Hackathons
            </Link>
            <Link
              href="/#experience"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#10b981] transition-colors w-full block"
            >
              Experience
            </Link>
            <Link
              href="/#education"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#10b981] transition-colors w-full block"
            >
              Education
            </Link>
            <Link
              href="/#skills"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#10b981] transition-colors w-full block"
            >
              Skills
            </Link>
            <Link
              href="/#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#10b981] transition-colors w-full block"
            >
              Contact
            </Link>

            <div className="w-full pt-4">
              <Link
                href="/#contact"
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
