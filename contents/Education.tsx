"use client";

import Badge from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { FC } from "react";

const education = [
  {
    degree: "Master of Engineering in Biomedical Engineering",
    university: "Cornell University",
    date: "Expected Dec 2025",
    location: "Ithaca, New York",
  },
  {
    degree: "Bachelor of Science in Systems Engineering",
    university: "University of Lagos",
    date: "Graduated Dec 2023",
    location: "Lagos, Nigeria",
  },
];

const Education: FC = () => {
  return (
    <section
      id="education"
      className="py-20 px-4 flex flex-col items-center relative w-full bg-[#090B11]"
    >
      <div className="max-w-4xl w-full mx-auto flex flex-col items-center relative z-10">
        <Badge className="border-cyan-500/30 text-cyan-500 bg-cyan-500/10 mb-6 gap-2 relative z-10">
          <GraduationCap size={14} />
          Academic Background
        </Badge>

        <h2 className="text-4xl md:text-5xl font-bold text-cyan-500 mb-16">
          Education
        </h2>

        <div className="w-full space-y-6 mb-24">
          {education.map((edu, idx) => (
            <Card
              key={idx}
              className="bg-card/50 border-border/50 relative overflow-hidden"
            >
              {/* Inner right glow */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-cyan-500/10 rounded-full blur-[60px] pointer-events-none translate-x-1/3"></div>

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
                      <p className="text-cyan-500 font-medium mt-1">
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
