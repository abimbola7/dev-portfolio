"use client";

import Badge from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

const Contact: FC = () => {
  return (
    <section
      id="contact"
      className="py-20 px-4 flex flex-col items-center w-full bg-[#0a0a0a]"
    >
      <div className="max-w-4xl w-full mx-auto flex flex-col items-center">
        <Badge className="border-[#10b981]/30 text-[#10b981] bg-[#10b981]/10 mb-6 gap-2">
          <Send size={14} />
          Get In Touch
        </Badge>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Let&apos;s <span className="text-[#10b981]">Connect</span>
        </h2>

        <p className="text-gray-400 text-lg text-center max-w-xl mb-16">
          Interested in collaboration, hackathons, or discussing AI/ML projects?{" "}
          <br className="hidden md:block" />
          Let&apos;s talk!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl mb-12">
          {/* Email Card */}
          <Link href="mailto:victor.automations@gmail.com" className="w-full">
            <Card className="h-full bg-card/50 border-border/50 text-center flex flex-col items-center hover:border-[#10b981]/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.2)] transition-all duration-300 cursor-pointer relative overflow-hidden">
              {/* Inner right glow */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[120px] h-[120px] bg-[#10b981]/5 rounded-full blur-[30px] pointer-events-none translate-x-1/3"></div>

              <CardContent className="p-5 flex flex-col items-center gap-3 relative z-10">
                <div className="w-12 h-12 rounded-full bg-[#10b981]/10 border border-[#10b981]/30 flex items-center justify-center text-[#10b981] mb-1">
                  <Mail size={20} />
                </div>
                <h3 className="text-base font-bold text-white">Email</h3>
                <p className="text-gray-400 text-sm break-all">
                  victor.automations@gmail.com
                </p>
              </CardContent>
            </Card>
          </Link>

          {/* Phone Card */}
          <Link href="tel:+16076631556" className="w-full">
            <Card className="h-full bg-card/50 border-border/50 text-center flex flex-col items-center hover:border-[#10b981]/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.2)] transition-all duration-300 cursor-pointer relative overflow-hidden">
              {/* Inner right glow */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[120px] h-[120px] bg-[#10b981]/5 rounded-full blur-[30px] pointer-events-none translate-x-1/3"></div>

              <CardContent className="p-5 flex flex-col items-center gap-3 relative z-10">
                <div className="w-12 h-12 rounded-full bg-[#10b981]/10 border border-[#10b981]/30 flex items-center justify-center text-[#10b981] mb-1">
                  <Phone size={20} />
                </div>
                <h3 className="text-base font-bold text-white">Phone</h3>
                <p className="text-gray-400 text-sm">(607) 663-1556</p>
              </CardContent>
            </Card>
          </Link>

          {/* Location Card */}
          <div className="w-full">
            <Card className="h-full bg-card/50 border-border/50 text-center flex flex-col items-center hover:border-[#10b981]/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.2)] transition-all duration-300 relative overflow-hidden">
              {/* Inner right glow */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[120px] h-[120px] bg-[#10b981]/5 rounded-full blur-[30px] pointer-events-none translate-x-1/3"></div>

              <CardContent className="p-5 flex flex-col items-center gap-3 relative z-10">
                <div className="w-12 h-12 rounded-full bg-[#10b981]/10 border border-[#10b981]/30 flex items-center justify-center text-[#10b981] mb-1">
                  <MapPin size={20} />
                </div>
                <h3 className="text-base font-bold text-white">Location</h3>
                <p className="text-gray-400 text-sm">Maryland, USA</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Link href="mailto:victor.automations@gmail.com">
          <button className="inline-flex items-center justify-center rounded-md px-8 py-3.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:ring-offset-2 focus:ring-offset-background bg-[#10b981] text-black hover:bg-[#34d399] gap-2 cursor-pointer shadow-lg hover:shadow-[#10b981]/25">
            <Mail size={18} />
            Send me an email
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Contact;
