import Contact from "@/contents/Contact";
import Education from "@/contents/Education";
import Experience from "@/contents/Experience";
import Hackathons from "@/contents/Hackathons";
import Hero from "@/contents/Hero";
import Navbar from "@/contents/Navbar";
import Skills from "@/contents/Skills";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oloruntoba Victor - AI Engineer",
  description:
    "Portfolio of Oloruntoba Victor, AI Engineer specializing in machine learning, predictive modeling, and data science.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-foreground selection:bg-[#10b981]/30">
      <Navbar />
      <main className="flex flex-col pb-10">
        <Hero />
        <Hackathons />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
