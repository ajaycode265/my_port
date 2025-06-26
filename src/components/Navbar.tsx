import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-12 lg:px-24",
        isScrolled ? "bg-navy/95 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* <a href="#home" className="text-tech-blue font-mono text-xl font-semibold">
          &lt;AK /&gt;
        </a> */}
        {/* Logo removed as per request */}
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <ul className="flex items-center gap-4 lg:gap-6">
            {navItems.map((item, index) => (
              <li key={item.name}>
                <a 
                  href={item.href} 
                  className="nav-link font-mono text-sm"
                >
                  <span className="text-tech-blue mr-1">{index + 1}.</span> {item.name}
                </a>
              </li>
            ))}
          </ul>
          <Button asChild variant="outline" size="sm" className="border-tech-blue text-tech-blue hover:bg-tech-blue/10">
            <a href="/resume.pdf" download="Ajay_Kumar_Kapruwan_Resume.pdf" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              <span>Resume</span>
            </a>
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-light focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? 
            <X className="h-6 w-6" /> : 
            <Menu className="h-6 w-6" />
          }
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/50 z-40" onClick={() => setMobileMenuOpen(false)}>
          <nav 
            className="bg-navy-light fixed right-0 top-[76px] w-4/5 max-w-sm h-screen py-8 px-6 shadow-xl transform transition-transform duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="flex flex-col gap-6">
              {navItems.map((item, index) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-lg font-mono flex items-center gap-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="text-tech-blue">{index + 1}.</span> {item.name}
                  </a>
                </li>
              ))}
              <li className="mt-6">
                <Button asChild variant="outline" size="sm" className="w-full border-tech-blue text-tech-blue hover:bg-tech-blue/10">
                  <a href="/resume.pdf" download="Ajay_Kumar_Kapruwan_Resume.pdf" className="flex items-center justify-center gap-2">
                    <Download className="h-4 w-4" />
                    <span>Resume</span>
                  </a>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
