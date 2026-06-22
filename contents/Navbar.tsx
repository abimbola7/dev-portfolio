"use client";

import Button from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { FC, useState } from "react";

const Navbar: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b border-border/40">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-6xl">
          <div className="text-2xl font-bold text-cyan-500 tracking-wider">
            <Link href="/">VO</Link>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
            <Link
              href="/#hackathons"
              className="hover:text-cyan-500 transition-colors"
            >
              Hackathons
            </Link>
            <Link
              href="/#experience"
              className="hover:text-cyan-500 transition-colors"
            >
              Experience
            </Link>
            <Link
              href="/#education"
              className="hover:text-cyan-500 transition-colors"
            >
              Education
            </Link>
            <Link
              href="/#skills"
              className="hover:text-cyan-500 transition-colors"
            >
              Skills
            </Link>
            <Link
              href="/#contact"
              className="hover:text-cyan-500 transition-colors"
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
              onClick={() => setIsMobileMenuOpen(true)}
              className="bg-[#00FFFF] p-1.5 rounded-md text-black focus:outline-none cursor-pointer"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#0b0f19] flex flex-col">
          <div className="w-full h-16 px-4 flex items-center justify-between border-b border-border/40">
            <div className="text-2xl font-bold text-cyan-500 tracking-wider">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                VO
              </Link>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-300 hover:text-cyan-500 focus:outline-none transition-colors cursor-pointer"
            >
              <X size={28} />
            </button>
          </div>

          <div className="flex flex-col w-full px-6 space-y-6 mt-8 text-lg font-medium text-gray-300">
            <Link
              href="/#hackathons"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-cyan-500 transition-colors w-full block"
            >
              Hackathons
            </Link>
            <Link
              href="/#experience"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-cyan-500 transition-colors w-full block"
            >
              Experience
            </Link>
            <Link
              href="/#education"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-cyan-500 transition-colors w-full block"
            >
              Education
            </Link>
            <Link
              href="/#skills"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-cyan-500 transition-colors w-full block"
            >
              Skills
            </Link>
            <Link
              href="/#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-cyan-500 transition-colors w-full block"
            >
              Contact
            </Link>

            <div className="w-full pt-4">
              <Link
                href="/#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full block"
              >
                <Button variant="primary" className="w-full rounded-md">
                  Hire Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
