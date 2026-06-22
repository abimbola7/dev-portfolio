"use client";

import Badge from "@/components/ui/badge";
import { ExternalLink, FolderGit2, GitBranch } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
};

const projectsData: Project[] = [
  {
    title: "Agentic SEO Article Generator",
    description:
      "An intelligent, multi-agent framework designed to automate the research, planning, writing, and optimization of SEO-optimized articles at scale. Orchestrates specialized agents to transform topics into publication-ready content backed by real-world search results.",
    tech: ["Python", "Hugging Face", "Multi-Agent System", "NLP"],
    github: "https://github.com/toba-maxx/seo-agent-orchestrator",
  },
  {
    title: "MoodSense-AI",
    description:
      "A low-latency, real-time facial emotion analysis agent. Processes video frames from a local webcam feed, performs deep-learning inference, and projects the annotated stream onto a responsive web dashboard.",
    tech: ["Python", "Flask", "OpenCV", "DeepFace", "Tailwind CSS"],
    github: "https://github.com/toba-maxx/MoodSense-AI",
  },
  {
    title: "Sentiment Analysis Service",
    description:
      "A production-ready NLP microservice engineered to classify social media content into distinct sentiment categories. Showcases a complete ML lifecycle from raw data preprocessing to Dockerized RESTful API serving.",
    tech: ["FastAPI", "PyTorch", "Transformers", "Scikit-Learn", "Docker"],
    github: "https://github.com/toba-maxx/sentiment-analysis-api",
  },
];

const Projects: FC = () => {
  return (
    <section
      id="projects"
      className="py-20 px-4 flex flex-col items-center w-full bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Background glow blobs */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-[#10b981]/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-[#10b981]/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2" />

      <div className="max-w-6xl w-full mx-auto flex flex-col items-center relative z-10">
        <Badge className="border-[#10b981]/30 text-[#10b981] bg-[#10b981]/10 mb-6 gap-2">
          <FolderGit2 size={14} />
          Featured Work
        </Badge>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
          My <span className="text-[#10b981]">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {projectsData.map((project, idx) => (
            <div
              key={idx}
              className="flex flex-col h-full bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6 hover:bg-white/10 hover:border-[#10b981]/40 hover:shadow-[0_0_40px_rgba(16,185,129,0.12)] transition-all duration-300 group relative"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#10b981]/10 flex items-center justify-center text-[#10b981]">
                  <FolderGit2 size={20} />
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Link
                    href={project.github}
                    target="_blank"
                    className="hover:text-[#10b981] transition-colors hover:scale-110"
                    aria-label="GitHub Repository"
                  >
                    <GitBranch size={20} />
                  </Link>
                  {project.demo && (
                    <Link
                      href={project.demo}
                      target="_blank"
                      className="hover:text-[#10b981] transition-colors hover:scale-110"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </Link>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#10b981] transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium text-[#10b981] bg-[#10b981]/10 px-2 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link href="https://github.com/toba-maxx" target="_blank">
            <button className="px-6 py-3 rounded-md border border-white/20 text-white font-medium hover:bg-white/5 hover:border-[#10b981]/50 hover:text-[#10b981] transition-all duration-300 flex items-center gap-2">
              View More on GitHub <ExternalLink size={16} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
