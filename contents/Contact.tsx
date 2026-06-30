"use client";

import Badge from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

const Contact: FC = () => {
  return (
    <>
      <section
        id="contact"
        className="py-20 px-4 flex flex-col items-center w-full bg-[#0a0a0a] relative overflow-hidden"
      >
        {/* Background glow blob */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#10b981]/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#10b981]/3 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 -translate-y-1/3" />

        <div className="max-w-4xl w-full mx-auto flex flex-col items-center relative z-10">
          <Badge className="border-[#10b981]/30 text-[#10b981] bg-[#10b981]/10 mb-6 gap-2">
            <Send size={14} />
            Get In Touch
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s <span className="text-[#10b981]">Connect</span>
          </h2>

          <p className="text-gray-400 text-lg text-center max-w-xl mb-16">
            Interested in collaboration, hackathons, or discussing AI/ML
            projects? <br className="hidden md:block" />
            Let&apos;s talk!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl mb-12">
            {/* Email Card */}
            <Link href="mailto:victor.automations@gmail.com" className="w-full">
              <Card className="h-full bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 text-center flex flex-col items-center hover:border-[#10b981]/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.2)] transition-all duration-300 cursor-pointer relative overflow-hidden group">
                <div className="absolute inset-0 bg-[#10b981]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                <CardContent className="p-6 flex flex-col items-center gap-3 relative z-10">
                  <div className="w-14 h-14 rounded-full bg-[#10b981]/10 border border-[#10b981]/30 flex items-center justify-center text-[#10b981] group-hover:scale-110 transition-transform duration-300">
                    <Mail size={22} />
                  </div>
                  <h3 className="text-base font-bold text-white">Email</h3>
                  <p className="text-gray-400 text-sm break-all">
                    victor.automations@gmail.com
                  </p>
                </CardContent>
              </Card>
            </Link>

            {/* Phone Card */}
            <Link href="tel:+16672624127" className="w-full">
              <Card className="h-full bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 text-center flex flex-col items-center hover:border-[#10b981]/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.2)] transition-all duration-300 cursor-pointer relative overflow-hidden group">
                <div className="absolute inset-0 bg-[#10b981]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                <CardContent className="p-6 flex flex-col items-center gap-3 relative z-10">
                  <div className="w-14 h-14 rounded-full bg-[#10b981]/10 border border-[#10b981]/30 flex items-center justify-center text-[#10b981] group-hover:scale-110 transition-transform duration-300">
                    <Phone size={22} />
                  </div>
                  <h3 className="text-base font-bold text-white">Phone</h3>
                  <p className="text-gray-400 text-sm">+1(667) 262-4127</p>
                </CardContent>
              </Card>
            </Link>

            {/* Location Card */}
            <div className="w-full">
              <Card className="h-full bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 text-center flex flex-col items-center hover:border-[#10b981]/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.2)] transition-all duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[#10b981]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                <CardContent className="p-6 flex flex-col items-center gap-3 relative z-10">
                  <div className="w-14 h-14 rounded-full bg-[#10b981]/10 border border-[#10b981]/30 flex items-center justify-center text-[#10b981] group-hover:scale-110 transition-transform duration-300">
                    <MapPin size={22} />
                  </div>
                  <h3 className="text-base font-bold text-white">Location</h3>
                  <p className="text-gray-400 text-sm">Maryland, USA</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <Link href="mailto:victor.automations@gmail.com">
            <button className="inline-flex items-center justify-center rounded-lg px-10 py-4 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:ring-offset-2 focus:ring-offset-background bg-[#10b981] text-black hover:bg-[#34d399] gap-2 cursor-pointer shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_rgba(16,185,129,0.5)] hover:scale-105">
              <Mail size={18} />
              Send me an email
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#0a0a0a] border-t border-white/5 py-4 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Victor Oloruntoba. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-gray-500 text-sm">
            Built with{" "}
            <span className="text-[#10b981] font-medium mx-1">Next.js</span>
            &amp;
            <span className="text-[#10b981] font-medium mx-1">
              Tailwind CSS
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
