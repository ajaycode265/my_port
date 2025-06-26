
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Terminal, Globe, GitBranch, Server } from 'lucide-react';

interface SkillCategoryProps {
  title: string;
  skills: {
    name: string;
    level: number;
  }[];
  icon: React.ElementType;
}

const SkillCategory = ({ title, skills, icon: Icon }: SkillCategoryProps) => {
  return (
    <Card className="card">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <Icon className="text-accent h-5 w-5" />
          <h3 className="font-semibold text-primary text-xl">{title}</h3>
        </div>
        
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index} className="animate-on-scroll">
              <div className="flex justify-between mb-1">
                <span className="text-slate-light">{skill.name}</span>
                <span className="text-accent font-mono text-sm">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "C++", level: 90 },
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 80 },
      ],
    },
    {
      title: "Frameworks",
      icon: Globe,
      skills: [
        { name: "React.js", level: 85 },
        { name: "Node.js", level: 75 },
        { name: "Express.js", level: 70 },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: Terminal,
      skills: [
        { name: "Git", level: 90 },
        { name: "Linux", level: 80 },
        { name: "VS Code", level: 95 },
      ],
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        { name: "MySQL", level: 75 },
        { name: "MongoDB", level: 80 },
        { name: "Firebase", level: 65 },
      ],
    },
  ];

  return (
    <section id="skills">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
