'use client'

import { FC } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import Badge from '@/components/ui/badge'
import { BrainCircuit, Code2, Database, Wrench } from 'lucide-react'

const skillCategories = [
  {
    title: "Machine Learning & AI",
    icon: <BrainCircuit size={20} />,
    skills: ["Deep Learning", "Natural Language Processing", "Computer Vision", "Predictive Modeling", "Statistical Analysis", "A/B Testing"]
  },
  {
    title: "Programming",
    icon: <Code2 size={20} />,
    skills: ["Python", "PySpark", "SQL", "C#", "MATLAB", "R"]
  },
  {
    title: "Data & Analytics",
    icon: <Database size={20} />,
    skills: ["Databricks", "Data Pipelines", "Feature Engineering", "Survival Models", "Time Series Analysis", "Risk Analytics"]
  },
  {
    title: "Tools & Frameworks",
    icon: <Wrench size={20} />,
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost", "Git", "ROS"]
  }
];

const Skills: FC = () => {
  return (
    <section id="skills" className="py-20 px-4 flex flex-col items-center w-full bg-[#0a0a0a]">
      <div className="max-w-6xl w-full mx-auto flex flex-col items-center">
      <Badge className="border-[#10b981]/30 text-[#10b981] bg-[#10b981]/10 mb-6 gap-2">
        <Code2 size={14} />
        Technical Expertise
      </Badge>
      
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
        Skills & <span className="text-[#10b981]">Technologies</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {skillCategories.map((category, idx) => (
          <Card key={idx} className="bg-[#171717] hover:bg-[#262626] border-border/50 group hover:border-[#10b981]/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] transition-all duration-300">
            <CardContent className="p-5 md:p-6 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#10b981]/10 border border-[#10b981]/30 flex items-center justify-center text-[#10b981]">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <div 
                    key={i} 
                    className="px-4 py-2 rounded-full text-sm font-medium text-gray-300 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Skills;
