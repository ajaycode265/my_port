import React from 'react';
import { Calendar, BookOpen, Code, Award } from 'lucide-react';

const timelineItems = [
  {
    year: '2026',
    title: 'BTech Computer Science Engineering',
    description: 'Expected graduation',
    icon: BookOpen,
  },
  {
    year: '2023',
    title: 'Engineering Projects',
    description: 'Started building professional portfolio',
    icon: Code,
  },
  {
    year: '2022',
    title: 'Started BTech CSE Program',
    description: 'Began my journey in computer science',
    icon: Calendar,
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="bg-navy-light/30">
      <div className="responsive-container">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid md:grid-cols-5 gap-8 mt-12">
          <div className="md:col-span-3">
            <p className="text-lg mb-6">
              Hello! I'm Ajay, a <span className="text-tech-blue font-semibold">Computer Science Engineering</span> student with a passion for software development, engineering solutions, and creating robust, scalable systems.
            </p>
            <p className="mb-6">
              My engineering journey began with fascination for how complex systems work together. That curiosity evolved into a passion for building technical solutions that solve real-world problems. I'm particularly focused on <span className="text-tech-blue">software architecture</span>, <span className="text-tech-blue">algorithms</span>, and <span className="text-tech-blue">system design</span>.
            </p>
            <p>
              As an engineering student in the 2026 batch, I apply engineering principles to create efficient, maintainable code. I approach problems methodically, breaking them down into components and building systematic solutions. When not coding, I'm exploring emerging technologies, contributing to technical projects, or enhancing my engineering knowledge.
            </p>
          </div>
          
          <div className="md:col-span-2">
            <div className="relative ml-4">
              <div className="absolute top-0 left-0 h-full w-0.5 bg-tech-blue/30"></div>
              
              {timelineItems.map((item, index) => (
                <div key={index} className="mb-8 relative animate-on-scroll">
                  <div className="absolute -left-4 mt-1.5 w-7 h-7 rounded-full border-2 border-tech-blue bg-navy-dark flex items-center justify-center">
                    <item.icon className="h-3.5 w-3.5 text-tech-blue" />
                  </div>
                  
                  <div className="ml-8">
                    <span className="text-tech-blue font-mono text-sm">{item.year}</span>
                    <h3 className="text-primary font-semibold text-lg">{item.title}</h3>
                    <p className="text-slate">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
