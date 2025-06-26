import React, { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  category: string[];
}

const projects: Project[] = [
  {
    title: "Eventitopia",
    description: "A full-stack event management platform with features for event creation, registration, and ticket management.",
    image: "https://placehold.co/600x400/0F172A/3B82F6?text=Eventitopia",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/",
    demo: "https://demo.com/",
    category: ["Web", "Full Stack"]
  },
  {
    title: "OS Simulator",
    description: "A simulation application demonstrating various operating system concepts like process scheduling and memory management.",
    image: "https://placehold.co/600x400/0F172A/3B82F6?text=OS+Simulator",
    tags: ["Python", "Tkinter", "Algorithms"],
    github: "https://github.com/",
    category: ["Desktop", "Academic"]
  },
  {
    title: "ML Classifier",
    description: "A machine learning model for classifying images using convolutional neural networks.",
    image: "https://placehold.co/600x400/0F172A/3B82F6?text=ML+Classifier",
    tags: ["Python", "TensorFlow", "Keras", "Data Science"],
    github: "https://github.com/",
    demo: "https://demo.com/",
    category: ["AI/ML", "Data Science"]
  },
  {
    title: "Portfolio Website",
    description: "A responsive personal portfolio website showcasing skills, projects, and contact information.",
    image: "https://placehold.co/600x400/0F172A/3B82F6?text=Portfolio",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/",
    demo: "https://demo.com/",
    category: ["Web", "Frontend"]
  }
];

const categories = ["All", "Web", "Full Stack", "Frontend", "AI/ML", "Data Science", "Academic", "Desktop"];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category.includes(activeCategory));

  return (
    <section id="projects" className="bg-navy-light/30">
      <div className="responsive-container">
        <h2 className="section-heading">Projects</h2>
        
        <div className="flex flex-wrap gap-2 mt-8 justify-center md:justify-start">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              size="sm"
              className={`rounded-full px-4 py-1 text-sm font-mono ${
                activeCategory === category 
                  ? "bg-tech-blue/10 border-tech-blue text-tech-blue" 
                  : "border-slate/20 text-slate hover:border-tech-blue hover:text-tech-blue"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="responsive-grid mt-12">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index} 
              className="card overflow-hidden flex flex-col justify-between h-full transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className="overflow-hidden h-48 relative group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-tech-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="pt-6 flex-grow">
                <h3 className="text-primary font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-slate mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} className="bg-navy border border-tech-blue/30 text-tech-blue text-xs font-mono">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-4 pt-2 pb-4">
                {project.github && (
                  <Button asChild variant="ghost" className="text-slate hover:text-tech-blue hover:bg-tech-blue/5 p-2 h-auto">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`GitHub repository for ${project.title}`}>
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                )}
                {project.demo && (
                  <Button asChild variant="ghost" className="text-slate hover:text-tech-blue hover:bg-tech-blue/5 p-2 h-auto">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`Live demo for ${project.title}`}>
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
