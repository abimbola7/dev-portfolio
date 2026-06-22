"use client";

import Badge from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { FC } from "react";

const education = [
  {
    degree: "Masters of Science Data Science in View",
    university: "University of Dundee",
    date: "Expected Dec 2026",
    location: "Dundee, Scotland",
  },
  {
    degree: "Bachelor of Science in Systems Engineering",
    university: "Obafemi  Awolowo University",
    date: "Graduated Dec 2023",
    location: "Lagos, Nigeria",
  },
];

const Education: FC = () => {
  return (
    <section
      id="education"
      className="py-20 px-4 flex flex-col items-center relative w-full bg-[#0a0a0a]"
    >
      <div className="max-w-4xl w-full mx-auto flex flex-col items-center relative z-10">
        <Badge className="border-[#10b981]/30 text-[#10b981] bg-[#10b981]/10 mb-6 gap-2 relative z-10">
          <GraduationCap size={14} />
          Academic Background
        </Badge>

        <h2 className="text-4xl md:text-5xl font-bold text-[#10b981] mb-16">
          Education
        </h2>

        <div className="w-full space-y-6 mb-24">
          {education.map((edu, idx) => (
            <Card
              key={idx}
              className="bg-card/50 border-border/50 relative overflow-hidden"
            >
              {/* Inner right glow */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-[#10b981]/10 rounded-full blur-[60px] pointer-events-none translate-x-1/3"></div>

              <CardContent className="p-5 md:p-6 flex flex-col md:flex-row gap-6 items-center md:items-start relative z-10">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-gray-400">
                    <GraduationCap size={20} />
                  </div>
                </div>

                <div className="flex-grow flex flex-col w-full">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-[#10b981] font-medium mt-1">
                        {edu.university}
                      </p>
                    </div>
                    <div className="text-left md:text-right mt-3 md:mt-0 text-sm text-gray-400">
                      <p>{edu.date}</p>
                      <p>{edu.location}</p>
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
