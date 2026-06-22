'use client'

import { FC } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import Badge from '@/components/ui/badge'
import Button from '@/components/ui/button'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import Link from 'next/link'

const Contact: FC = () => {
  return (
    <section id="contact" className="py-20 px-4 flex flex-col items-center w-full bg-[#0B0F19]">
      <div className="max-w-4xl w-full mx-auto flex flex-col items-center">
      <Badge className="border-orange-500/30 text-orange-500 bg-orange-500/10 mb-6 gap-2">
        <Send size={14} />
        Get In Touch
      </Badge>
      
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Let's <span className="text-orange-500">Connect</span>
      </h2>
      
      <p className="text-gray-400 text-lg text-center max-w-xl mb-16">
        Interested in collaboration, hackathons, or discussing AI/ML projects? <br className="hidden md:block"/>
        Let's talk!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl mb-12">
        {/* Email Card */}
        <Link href="mailto:victor.automations@gmail.com" className="w-full">
          <Card className="h-full bg-card/50 border-border/50 text-center flex flex-col items-center hover:border-orange-500/50 hover:shadow-[0_0_40px_rgba(0,229,255,0.2)] transition-all duration-300 cursor-pointer">
            <CardContent className="p-4 flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-500 mb-1">
                <Mail size={20} />
              </div>
              <h3 className="text-base font-bold text-white">Email</h3>
              <p className="text-gray-400 text-sm break-all">victor.automations@gmail.com</p>
            </CardContent>
          </Card>
        </Link>

        {/* Phone Card */}
        <Link href="tel:+16076631556" className="w-full">
          <Card className="h-full bg-card/50 border-border/50 text-center flex flex-col items-center hover:border-orange-500/50 hover:shadow-[0_0_40px_rgba(0,229,255,0.2)] transition-all duration-300 cursor-pointer">
            <CardContent className="p-4 flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-500 mb-1">
                <Phone size={20} />
              </div>
              <h3 className="text-base font-bold text-white">Phone</h3>
              <p className="text-gray-400 text-sm">(607) 663-1556</p>
            </CardContent>
          </Card>
        </Link>

        {/* Location Card */}
        <div className="w-full">
          <Card className="h-full bg-card/50 border-border/50 text-center flex flex-col items-center hover:border-orange-500/50 hover:shadow-[0_0_40px_rgba(0,229,255,0.2)] transition-all duration-300">
            <CardContent className="p-4 flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-500 mb-1">
                <MapPin size={20} />
              </div>
              <h3 className="text-base font-bold text-white">Location</h3>
              <p className="text-gray-400 text-sm">Maryland, USA</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Link href="mailto:victor.automations@gmail.com">
        <button className="inline-flex items-center justify-center rounded-md px-8 py-3.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-background bg-orange-500 text-white hover:bg-orange-400 gap-2 cursor-pointer shadow-lg hover:shadow-orange-500/25">
          <Mail size={18} />
          Send me an email
        </button>
      </Link>
      </div>
    </section>
  );
};

export default Contact;
