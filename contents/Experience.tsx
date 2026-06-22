"use client";

import Badge from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import { FC } from "react";

const experiences = [
  {
    role: "Senior Data Scientist | Generative AI, LLMs, AI Agents & Automation",
    company: "CIG LTD.",
    date: "October 2018 - Present",
    location: "",
    points: [
      "Deployed end-to-end Generative AI solutions using Python, GPT-4, and Claude 3.5 Sonnet.",
      "Built intelligent AI agents and RAG pipelines via LangChain for business automation and customer support.",
      "Optimized LLM prompt engineering strategies and NLP techniques to reduce hallucinations and improve accuracy.",
      "Engineered scalable backend APIs using Docker and AWS for AI application deployment.",
    ],
  },
  {
    role: "Data Scientist | Data Infrastructure & Systems Optimization",
    company: "OBAF Global Concept Limited",
    date: "February 2012 - December 2013",
    location: "",
    points: [
      "Automated Linux infrastructure and AWS setups using Docker and Kickstart for rapid AI and LLM deployments.",
      "Developed robust Python data pipelines for NLP, analytics, and Generative AI model integration.",
      "Implemented RAG systems and LLM prompt engineering (GPT-4, Claude) to optimize chatbot performance.",
      "Managed and scaled APIs and services (Apache, Tomcat) for AI-driven applications.",
    ],
  },
  {
    role: "IT Support Specialist | Systems, Automation & Data Support",
    company: "Techpreneur Africa",
    date: "January 2008 - January 2009",
    location: "",
    points: [
      "Provided comprehensive technical support, resolving hardware, software, and network issues to ensure minimal downtime.",
      "Automated routine support tasks and system monitoring using Python, boosting ticket handling efficiency.",
      "Maintained data integrity and supported backend systems utilized in data science workflows.",
      "Installed and configured operating systems, networking components, and enterprise applications.",
    ],
  },
];

const Experience: FC = () => {
  return (
    <section
      id="experience"
      className="py-20 px-4 flex flex-col items-center w-full bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Background glow blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#10b981]/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/4" />

      <div className="max-w-4xl w-full mx-auto flex flex-col items-center relative z-10">
        <Badge className="border-[#10b981]/30 text-[#10b981] bg-[#10b981]/10 mb-6 gap-2">
          <Briefcase size={14} />
          Professional Journey
        </Badge>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
          Work <span className="text-[#10b981]">Experience</span>
        </h2>

        {/* Timeline */}
        <div className="w-full relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#10b981]/40 via-[#10b981]/20 to-transparent" />

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div key={idx} className="flex gap-6">
                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#10b981] z-10">
                    <Briefcase size={20} />
                  </div>
                </div>

                <Card className="flex-1 bg-white/5 backdrop-blur-md hover:bg-white/10 border-white/10 group hover:border-[#10b981]/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] transition-all duration-300">
                  <CardContent className="p-5 md:p-6 flex flex-col gap-4">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-[#10b981] transition-colors duration-300">
                          {exp.role}
                        </h3>
                        <p className="text-[#10b981] font-medium mt-1">{exp.company}</p>
                      </div>
                      <div className="text-left md:text-right mt-2 md:mt-0 text-sm text-gray-400 shrink-0">
                        <p>{exp.date}</p>
                        {exp.location && <p>{exp.location}</p>}
                      </div>
                    </div>

                    {exp.points.length > 0 && (
                      <ul className="space-y-2 mt-2">
                        {exp.points.map((point, i) => (
                          <li
                            key={i}
                            className="text-gray-300 text-sm md:text-base flex items-start"
                          >
                            <span className="text-[#10b981] mr-2 mt-1.5 text-xs shrink-0">●</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
