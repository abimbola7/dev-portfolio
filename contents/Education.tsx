"use client";

import Badge from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { FC } from "react";

const education = [
  {
    degree: "Masters of Science in Data Science",
    university: "University of Dundee",
    date: "Expected Dec 2026",
    location: "Dundee, Scotland",
    status: "In Progress",
  },
  {
    degree: "Bachelor of Science in Systems Engineering",
    university: "Obafemi Awolowo University",
    date: "Graduated Dec 2023",
    location: "Osun, Nigeria",
    status: "Completed",
  },
];

const Education: FC = () => {
  return (
    <section
      id="education"
      className="py-20 px-4 flex flex-col items-center relative w-full bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background glow blob */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#10b981]/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/3 translate-y-1/4" />

      <div className="max-w-4xl w-full mx-auto flex flex-col items-center relative z-10">
        <Badge className="border-[#10b981]/30 text-[#10b981] bg-[#10b981]/10 mb-6 gap-2">
          <GraduationCap size={14} />
          Academic Background
        </Badge>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
          My <span className="text-[#10b981]">Education</span>
        </h2>

        <div className="w-full space-y-6 mb-16">
          {education.map((edu, idx) => (
            <Card
              key={idx}
              className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 hover:border-[#10b981]/40 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] transition-all duration-300 relative overflow-hidden group"
            >
              {/* Inner glow */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-[#10b981]/8 rounded-full blur-[60px] pointer-events-none translate-x-1/3" />

              <CardContent className="p-5 md:p-6 flex flex-col md:flex-row gap-6 items-center md:items-start relative z-10">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#10b981]">
                    <GraduationCap size={20} />
                  </div>
                </div>

                <div className="flex-grow flex flex-col w-full">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#10b981] transition-colors duration-300">
                        {edu.degree}
                      </h3>
                      <p className="text-[#10b981] font-medium mt-1">
                        {edu.university}
                      </p>
                    </div>
                    <div className="text-left md:text-right mt-3 md:mt-0 flex flex-col gap-1">
                      <span
                        className={`self-start md:self-end text-xs font-semibold px-2 py-0.5 rounded-full ${edu.status === "In Progress" ? "bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/30" : "bg-white/5 text-gray-400 border border-white/10"}`}
                      >
                        {edu.status}
                      </span>
                      <p className="text-sm text-gray-400">{edu.date}</p>
                      <p className="text-sm text-gray-400">{edu.location}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
