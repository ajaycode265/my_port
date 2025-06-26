
import React from 'react';
import { Calendar, BookOpen } from 'lucide-react';

const timelineItems = [
  {
    year: '2026',
    title: 'BTech Computer Science Engineering',
    description: 'Expected graduation',
    icon: BookOpen,
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
    <section id="about" className="bg-navy-light/30 py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid md:grid-cols-5 gap-6 md:gap-8 mt-8 md:mt-12">
          <div className="md:col-span-3">
            <p className="text-base md:text-lg mb-4">
              Hello! I'm Ajay, a passionate Computer Science Engineering student with a keen interest in software development, problem-solving, and creating elegant solutions.
            </p>
            <p className="mb-4">
              My journey in tech began with a curiosity about how things work behind the scenes. That curiosity evolved into a passion for building software that makes a difference. I'm particularly interested in web development, data structures, and algorithms.
            </p>
            <p>
              As a student in the 2026 batch, I'm constantly learning and expanding my skillset. I enjoy tackling complex problems and turning them into simple, efficient solutions. When I'm not coding, I'm exploring new technologies, contributing to open-source projects, or enhancing my problem-solving skills.
            </p>
          </div>
          
          <div className="md:col-span-2 mt-6 md:mt-0">
            <div className="relative ml-4">
              <div className="absolute top-0 left-0 h-full w-0.5 bg-accent/30"></div>
              
              {timelineItems.map((item, index) => (
                <div key={index} className="mb-6 md:mb-8 relative animate-on-scroll">
                  <div className="absolute -left-4 mt-1.5 w-7 h-7 rounded-full border-2 border-accent bg-navy flex items-center justify-center">
                    <item.icon className="h-3.5 w-3.5 text-accent" />
                  </div>
                  
                  <div className="ml-6 md:ml-8">
                    <span className="text-accent font-mono text-sm">{item.year}</span>
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
