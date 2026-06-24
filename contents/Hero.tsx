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
            <Button variant="outline" className="gap-2">
              <Download size={18} />
              Download CV
            </Button>
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
                  <path d="M17.401 9.475c-2.316 0-3.963 1.879-4.254 4.502h-.028c-.808-1.517-1.425-3.178-1.745-4.502H8.384V14.36c0 1.258-1.01 2.277-2.25 2.277-1.24 0-2.247-1.019-2.247-2.277V9.475H.895v4.885c0 2.903 2.339 5.26 5.239 5.26 2.9 0 5.241-2.357 5.241-5.26V13.84c.677 2.148 1.942 4.417 3.513 5.962l-1.892 4.198h3.19l1.455-3.328c1.196.282 2.067.422 2.952.422 2.901 0 5.245-2.356 5.245-5.26 0-2.902-2.344-5.26-5.245-5.26v.001h.008ZM17.4 17.82c-1.397 0-2.58-.69-3.238-1.78l.492-1.077c.484.717 1.488 1.624 2.744 1.624 1.24 0 2.247-1.019 2.247-2.277s-1.008-2.277-2.247-2.277c-1.226 0-2.261.99-2.261 2.277v.008c.03.35.1.728.167 1.09h-.032c-.066-.363-.135-.742-.167-1.092v-.008c0-1.287 1.037-2.277 2.262-2.277 1.24 0 2.246 1.019 2.246 2.277s-1.006 2.277-2.246 2.277Z" />
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
              href="https://www.linkedin.com/in/victor-oloruntoba-8067bb1a5"
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
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                </svg>
              }
              href="#"
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
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              }
              href="#"
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
