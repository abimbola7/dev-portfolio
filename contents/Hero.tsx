"use client";

import profilePic from "@/assets/images/toba-profile.png";
import Button from "@/components/ui/button";
import Typewriter from "@/components/ui/typewriter";
import { Download, Mail, Mouse } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <section className="min-h-[calc(100vh-5rem)] flex items-center pt-10 pb-20 relative max-w-6xl mx-auto px-4 w-full bg-[#0a0a0a]">
      {/* Background Glows */}
      {/* Mobile Cyan Glows */}
      <div className="absolute top-20 -left-10 w-[300px] h-[300px] bg-[#10b981]/20 rounded-full blur-[100px] md:hidden"></div>
      <div className="absolute -bottom-20 -right-10 w-[300px] h-[300px] bg-[#10b981]/20 rounded-full blur-[100px] md:hidden"></div>
      {/* Desktop Orange Glow */}
      <div className="hidden md:block absolute top-1/3 -left-20 w-[400px] h-[400px] bg-[#2dd4bf]/10 rounded-full blur-[100px]"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full relative z-10">
        {/* Text Content */}
        <div className="flex flex-col space-y-6">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
              Victor <br />
              <span className="text-[#10b981]">Toba</span>
            </h1>
            <div className="text-xl md:text-2xl text-gray-300 font-medium h-8">
              <Typewriter
                words={[
                  "AI Engineer",
                  "Data Scientist",
                  "Hackathon Winner",
                  "Systems Engineer",
                ]}
              />
            </div>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
            AI Engineer specializing in machine learning, predictive modeling,
            and data science. Multiple-time hackathon winner with a passion for
            building AI solutions that solve real-world problems.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="mailto:victor.automations@gmail.com">
              <Button variant="primary" className="gap-2">
                <Mail size={18} />
                Contact Me
              </Button>
            </Link>
            <Link href="/Victor_Oloruntoba_CV.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2">
                <Download size={18} />
                Download CV
              </Button>
            </Link>
          </div>

          <div className="flex items-center gap-4 pt-6">
            <SocialIcon
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17a5.2 5.2 0 0 0-1.4-3.6 5.3 5.3 0 0 0-.1-3.5s-1.1-.3-3.5 1.3a12.1 12.1 0 0 0-6 0c-2.4-1.6-3.5-1.3-3.5-1.3a5.3 5.3 0 0 0-.1 3.5 5.2 5.2 0 0 0-1.4 3.6c0 5.7 3.3 6.8 6.5 7.17a4.8 4.8 0 0 0-1 3.03v4" />
                  <path d="M9 20c-5 1.5-5-2.5-7-3" />
                </svg>
              }
              href="https://github.com/toba-maxx"
            />
            <SocialIcon
              icon={
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                >
                  <title>Upwork</title>
                  <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
                </svg>
              }
              href="https://www.upwork.com/freelancers/tobavictor"
            />
            <SocialIcon
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              }
              href="https://www.linkedin.com/in/victor-oloruntoba-8067bb1a5/"
            />
          </div>
        </div>

        {/* Image / Visual */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[400px] aspect-[3/4] rounded-2xl overflow-hidden border border-[#10b981]/30 bg-card shadow-[0_0_100px_rgba(16,185,129,0.15)]">
            <Image
              src={profilePic}
              alt="Victor Oloruntoba"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover"
              placeholder="blur"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#10b981]/10 to-transparent mix-blend-overlay"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center text-[#10b981] animate-bounce">
        <Mouse size={40} />
      </div>
    </section>
  );
};

const SocialIcon = ({
  icon,
  href,
}: {
  icon: React.ReactNode;
  href: string;
}) => (
  <Link
    target="_blank,"
    href={href}
    className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-gray-400 bg-white/5 hover:text-[#10b981] hover:border-[#10b981]/50 hover:bg-white/10 hover:scale-110 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-300"
  >
    {icon}
  </Link>
);

export default Hero;
