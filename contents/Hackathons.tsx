"use client";

import Badge from "@/components/ui/badge";
import { Calendar, MapPin, Trophy } from "lucide-react";
import { FC } from "react";

const hackathonsData = [
  {
    title: "TechWiz 3rd Position in Web App Dev",
    location: "APTECH Computer Education",
    date: "April 2021",
    project: "E-commerce Web Application",
    description:
      "I was part of a team called Xclusive Design that developed an e-commerce web application for clothes and accessories. My responsibilities included designing and implementing the front-end user interface using HTML, CSS, and JavaScript. Our team worked collaboratively, and I contributed by providing valuable insights into UX design.",
  },
  {
    title: "Top 10 in Data Science Nigeria Hackathon",
    location: "Data Science Nigeria",
    date: "October 2019",
    project: "Predictive Model for Insurance Claims",
    description:
      "Participated in a hackathon hosted by Data Science Nigeria during the 2019 Bootcamp. The challenge was to build a predictive model that could determine whether a building would have an insurance claim during a given period or not. Proud to be among the top 10 participants.",
  },
];

const Hackathons: FC = () => {
  return (
    <section
      id="hackathons"
      className="py-20 px-4 flex flex-col items-center w-full bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Background glow blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#10b981]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto flex flex-col items-center relative z-10">
        <Badge className="border-[#10b981]/30 text-[#10b981] bg-[#10b981]/10 mb-6 gap-2">
          <Trophy size={14} />
          Hackathons & Competitions
        </Badge>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
          Featured <span className="text-[#10b981]">Hackathons</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
          {hackathonsData.map((hackathon, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6 hover:bg-white/10 hover:border-[#10b981]/40 hover:shadow-[0_0_40px_rgba(16,185,129,0.12)] transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-4 leading-snug group-hover:text-[#10b981] transition-colors">
                {hackathon.title}
              </h3>

              <div className="flex flex-col gap-2 mb-6">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <MapPin size={14} className="text-[#10b981] shrink-0" />
                  <span>{hackathon.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Calendar size={14} className="text-[#10b981] shrink-0" />
                  <span>{hackathon.date}</span>
                </div>
              </div>

              <div className="mb-4">
                <span className="font-bold text-white">Project:</span>{" "}
                <span className="text-[#10b981]">{hackathon.project}</span>
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
