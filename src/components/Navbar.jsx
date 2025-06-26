import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

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
  const isMobile = useIsMobile();

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
        "fixed top-0 w-full z-50 transition-all duration-300 py-4 px-4 sm:px-6 md:px-12 lg:px-24",
        isScrolled ? "bg-navy/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      )}
    >
      <div className="flex justify-center items-center w-full">
        {/* <a href="#home" className="text-accent font-mono text-xl font-semibold">
          &lt;AK /&gt;
        </a> */}
        {/* Logo removed as per request */}
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 lg:gap-16">
          <ul className="flex items-center gap-8 lg:gap-12">
            {navItems.map((item, index) => (
              <li key={item.name}>
                <a 
                  href={item.href} 
                  className="nav-link font-mono text-sm"
                >
                  <span className="text-accent mr-1">{index + 1}.</span> {item.name}
                </a>
              </li>
            ))}
          </ul>
          <Button asChild variant="outline" size="sm" className="border-accent text-accent hover:bg-accent/10">
            <a href="https://drive.google.com/file/d/1-0JLTdJoVw9HiwQQVRTUFHP5TdKPD0VQ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              <span>Resume</span>
            </a>
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-light focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? 
            <X className="h-6 w-6" /> : 
            <Menu className="h-6 w-6" />
          }
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-navy-dark fixed right-0 top-[76px] w-full max-w-[300px] h-screen py-8 px-6 shadow-xl animate-slide-in-right">
          <ul className="flex flex-col gap-6">
            {navItems.map((item, index) => (
              <li key={item.name}>
                <a 
                  href={item.href} 
                  className="text-lg font-mono flex items-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-accent">{index + 1}.</span> {item.name}
                </a>
              </li>
            ))}
            <li className="mt-4">
              <Button asChild variant="outline" size="sm" className="w-full border-accent text-accent hover:bg-accent/10">
                <a href="https://drive.google.com/file/d/1-0JLTdJoVw9HiwQQVRTUFHP5TdKPD0VQ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <Download className="h-4 w-4" />
                  <span>Resume</span>
                </a>
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
