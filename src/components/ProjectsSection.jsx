
import React, { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: "Eventitopia",
    description: "A full-stack event management platform with features for event creation, registration, and ticket management.",
    image: "https://placehold.co/600x400/0a192f/64ffda?text=Eventitopia",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/",
    demo: "https://demo.com/",
    category: ["Web", "Full Stack"]
  },
  {
    title: "OS Simulator",
    description: "A simulation application demonstrating various operating system concepts like process scheduling and memory management.",
    image: "https://placehold.co/600x400/0a192f/64ffda?text=OS+Simulator",
    tags: ["Python", "Tkinter", "Algorithms"],
    github: "https://github.com/",
    category: ["Desktop", "Academic"]
  },
  {
    title: "ML Classifier",
    description: "A machine learning model for classifying images using convolutional neural networks.",
    image: "https://placehold.co/600x400/0a192f/64ffda?text=ML+Classifier",
    tags: ["Python", "TensorFlow", "Keras", "Data Science"],
    github: "https://github.com/",
    demo: "https://demo.com/",
    category: ["AI/ML", "Data Science"]
  },
  {
    title: "Portfolio Website",
    description: "A responsive personal portfolio website showcasing skills, projects, and contact information.",
    image: "https://placehold.co/600x400/0a192f/64ffda?text=Portfolio",
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
    <section id="projects" className="bg-navy-light/30 py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading">Projects</h2>
        
        <div className="flex flex-wrap gap-2 mt-6 md:mt-8 justify-center md:justify-start overflow-x-auto pb-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              size="sm"
              className={`rounded-full px-3 py-1 text-xs sm:text-sm font-mono whitespace-nowrap ${
                activeCategory === category 
                  ? "bg-accent/10 border-accent text-accent" 
                  : "border-slate/20 text-slate hover:border-accent hover:text-accent"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="card overflow-hidden flex flex-col justify-between h-full">
              <div className="overflow-hidden h-40 sm:h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="pt-4 md:pt-6 flex-grow">
                <h3 className="text-primary font-bold text-lg md:text-xl mb-2">{project.title}</h3>
                <p className="text-slate text-sm md:text-base mb-3 md:mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 md:gap-2 mt-2 md:mt-3">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} className="bg-navy border border-accent/20 text-accent text-xs font-mono py-0.5">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2 md:gap-4 pt-1 md:pt-2 pb-3 md:pb-4">
                {project.github && (
                  <Button asChild variant="ghost" className="text-slate hover:text-accent hover:bg-accent/5 p-2 h-auto">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`GitHub repository for ${project.title}`}>
                      <Github className="h-4 w-4 md:h-5 md:w-5" />
                    </a>
                  </Button>
                )}
                {project.demo && (
                  <Button asChild variant="ghost" className="text-slate hover:text-accent hover:bg-accent/5 p-2 h-auto">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`Live demo for ${project.title}`}>
                      <ExternalLink className="h-4 w-4 md:h-5 md:w-5" />
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
