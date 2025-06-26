import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row justify-center items-center pt-24 pb-16 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="flex flex-col gap-4 md:gap-6 max-w-3xl animate-fade-in md:mr-12">
        <p className="text-accent font-mono mb-0 md:mb-2">Hi, my name is</p>
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-primary">
          Ajay Kumar Kapruwan.
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-slate">
          I build things for the web.
        </h2>
        <p className="text-slate text-base md:text-lg max-w-xl mt-2 md:mt-4">
          I'm an aspiring Software Engineer, Tech Enthusiast & Problem Solver. Currently pursuing BTech in Computer Science Engineering (Batch of 2026), focused on building exceptional digital experiences.
        </p>
        
        <div className="flex flex-wrap gap-3 md:gap-4 mt-4 md:mt-6">
          <Button asChild variant="outline" className="btn-primary text-sm md:text-base">
            <a href="#projects" className="flex items-center gap-2">
              View my work
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="outline" className="btn-outline text-sm md:text-base">
            <a href="https://drive.google.com/file/d/1-0JLTdJoVw9HiwQQVRTUFHP5TdKPD0VQ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              <span className="hidden xs:inline">Download</span> Resume
            </a>
          </Button>
        </div>

        <div className="flex gap-4 md:gap-6 mt-6 md:mt-8">
          <a href="https://github.com/ajaycode265" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-accent transition-colors">
            <Github className="h-5 w-5 md:h-6 md:w-6" />
          </a>
          <a href="https://www.linkedin.com/in/ajaykapruwan/" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-accent transition-colors">
            <Linkedin className="h-5 w-5 md:h-6 md:w-6" />
          </a>
          <a href="mailto:ajaykapruwan265@gmail.com" className="text-slate hover:text-accent transition-colors">
            <Mail className="h-5 w-5 md:h-6 md:w-6" />
          </a>
        </div>
      </div>
      
      {/* Profile image removed as per request */}
    </section>
  );
};

export default HeroSection;
