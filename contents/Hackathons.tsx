"use client";

import { MapPin, Calendar, Trophy } from "lucide-react";
import { FC } from "react";
import Badge from "@/components/ui/badge";

const hackathonsData = [
  {
    title: "Cornell Claude Hackathon",
    location: "New York, Ithaca",
    date: "November 15, 2025",
    project: "Lease Fairy",
    description: "An AI-powered companion that helps renters understand their housing leases with clarity and confidence. It reads the entire agreement, breaks down every clause in simple language, highlights hidden fees and red flags, and identifies important deadlines that protect a renter's rights."
  },
  {
    title: "Cornell Food Hackathon",
    location: "New York, Ithaca",
    date: "November 7-9, 2025",
    project: "Protein-Enhanced Soda",
    description: "Worked on a revolutionary soda drink packaged with Protein and L-carnitine, combining refreshment with nutritional benefits."
  },
  {
    title: "Lovable Hackathon",
    location: "New York, Ithaca",
    date: "October 23, 2025",
    project: "Crime Logs",
    description: "An interactive, AI-powered platform that transforms static crime data into real-time insights. Features include dynamic map visualization, crime type filtering, heat maps showing recurring crime activity, helping students make safer decisions and authorities allocate patrols effectively."
  },
  {
    title: "Hilton Hospitality Hackathon",
    location: "New York, Ithaca",
    date: "October 17-19, 2025",
    project: "HiltonRecoveryAI",
    description: "A tool built to empower front-desk teams to manage guest recovery effectively, leveraging data-driven insights to improve overall satisfaction and operations."
  },
  {
    title: "AI in Medicine",
    location: "Qatar",
    date: "October 10-11, 2025",
    project: "EveryBeat",
    description: "Built EveryBeat: 24/7 AI-powered ECG monitoring platform designed to catch cardiovascular anomalies early and notify healthcare providers in real-time."
  },
  {
    title: "Digital Agriculture Hackathon",
    location: "Cornell University",
    date: "March 2025",
    project: "Smart Irrigation System",
    description: "Developed a system that tackles the challenges of modern farming by analyzing real-time soil moisture and weather data to optimize agricultural water usage."
  },
  {
    title: "TechWiz 3rd Position in Web App Dev",
    location: "APTECH Computer Education",
    date: "April 2021",
    project: "E-commerce Web Application",
    description: "I was part of a team called Xclusive Design that developed an e-commerce web application for clothes and accessories. My responsibilities included designing and implementing the front-end user interface using HTML, CSS, and JavaScript. Our team worked collaboratively, and I contributed by providing valuable insights into UX design."
  },
  {
    title: "Top 10 in Data Science Nigeria Hackathon",
    location: "Data Science Nigeria",
    date: "October 2019",
    project: "Predictive Model for Insurance Claims",
    description: "Participated in a hackathon hosted by Data Science Nigeria during the 2019 Bootcamp. The challenge was to build a predictive model that could determine whether a building would have an insurance claim during a given period or not. Proud to be among the top 10 participants."
  }
];

const Hackathons: FC = () => {
  return (
    <section
      id="hackathons"
      className="py-20 px-4 flex flex-col items-center w-full bg-[#0a0a0a]"
    >
      <div className="max-w-6xl w-full mx-auto flex flex-col items-center">
        <Badge className="border-[#10b981]/30 text-[#10b981] bg-[#10b981]/10 mb-6 gap-2">
          <Trophy size={14} />
          Hackathons & Competitions
        </Badge>
        
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
          Featured <span className="text-[#10b981]">Hackathons</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {hackathonsData.map((hackathon, idx) => (
            <div 
              key={idx} 
              className="flex flex-col bg-[#171717] rounded-xl border border-neutral-800 p-6 hover:border-neutral-700 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-4 leading-snug">
                {hackathon.title}
              </h3>
              
              <div className="flex flex-col gap-2 mb-6">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <MapPin size={16} />
                  <span>{hackathon.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Calendar size={16} />
                  <span>{hackathon.date}</span>
                </div>
              </div>
              
              <div className="mb-4">
                <span className="font-bold text-white">Project:</span>{" "}
                <span className="text-gray-300">{hackathon.project}</span>
              </div>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                {hackathon.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
