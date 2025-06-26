import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-24 pb-16 relative">
      <div className="responsive-container">
        <div className="flex flex-col gap-6 max-w-3xl animate-fade-in">
          <p className="text-tech-blue font-mono mb-2">Hi, my name is</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary">
            Ajay Kumar Kapruwan.
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-slate">
            Engineering solutions through code.
          </h2>
          <p className="text-slate text-base md:text-lg max-w-xl mt-4">
            I'm an aspiring Software Engineer, Tech Enthusiast & Problem Solver. Currently pursuing BTech in Computer Science Engineering (Batch of 2026), focused on building exceptional digital experiences and engineering solutions.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-6">
            <Button asChild variant="outline" className="btn-primary group">
              <a href="#projects" className="flex items-center gap-2">
                View my work
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button asChild variant="outline" className="btn-outline">
              <a href="/resume.pdf" download="Ajay_Kumar_Kapruwan_Resume.pdf" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>

          <div className="flex gap-10 mt-12 items-center">
            <a 
              href="https://github.com/ajaycode265" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-wrapper"
              aria-label="GitHub Profile"
            >
              <div className="social-icon-container">
                <Github strokeWidth={1.5} className="h-10 w-10 md:h-12 md:w-12" />
              </div>
            </a>

            <a 
              href="https://www.linkedin.com/in/ajaykapruwan/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-wrapper"
              aria-label="LinkedIn Profile"
            >
              <div className="social-icon-container">
                <Linkedin strokeWidth={1.5} className="h-10 w-10 md:h-12 md:w-12" />
              </div>
            </a>

            <a 
              href="mailto:example@email.com" 
              className="social-icon-wrapper"
              aria-label="Email Contact"
            >
              <div className="social-icon-container">
                <Mail strokeWidth={1.5} className="h-10 w-10 md:h-12 md:w-12" />
              </div>
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute -z-10 top-1/2 right-0 transform -translate-y-1/2 w-1/2 h-1/2 bg-tech-blue/5 rounded-l-full blur-3xl opacity-30 hidden lg:block"></div>
    </section>
  );
};

export default HeroSection;
