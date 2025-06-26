
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Terminal, Globe } from 'lucide-react';

const SkillCategory = ({ title, skills, icon: Icon }) => {
  return (
    <Card className="card">
      <CardContent className="p-4 md:p-6">
        <div className="flex items-center gap-3 mb-4">
          <Icon className="text-accent h-5 w-5" />
          <h3 className="font-semibold text-primary text-lg md:text-xl">{title}</h3>
        </div>
        
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="animate-on-scroll flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-slate-light text-sm md:text-base">{skill}</span>
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
      skills: ["C++", "Python", "JavaScript"],
    },
    {
      title: "Frameworks",
      icon: Globe,
      skills: ["React.js", "Node.js", "Express.js"],
    },
    {
      title: "Tools & Technologies",
      icon: Terminal,
      skills: ["Git", "Linux", "VS Code"],
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "MongoDB", "Firebase"],
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading">My Skills</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-12">
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
