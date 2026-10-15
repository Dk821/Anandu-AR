import React, { useState, useEffect } from 'react';
import { Menu, X, Download, ShieldPlus, ChevronRight } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle elevated shadow on scroll
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-nav shadow-sm border-b border-surface-border/60 py-3.5'
          : 'bg-white/95 backdrop-blur-md py-4 sm:py-5 border-b border-surface-border/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-lg"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-navy-900 to-brand-blue flex items-center justify-center text-white shadow-sm transition-transform duration-200 group-hover:scale-105">
              <ShieldPlus className="w-5 h-5 text-brand-accent-light" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight text-navy-900 text-lg sm:text-xl font-heading leading-tight group-hover:text-brand-blue transition-colors">
                ANANDU A R
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-wider text-content-muted">
                Hospital Administration
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'text-brand-blue bg-brand-ice font-bold'
                      : 'text-content-secondary hover:text-navy-900 hover:bg-surface-muted'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-3.5 right-3.5 h-0.5 bg-brand-blue rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Download Resume Button */}
          <div className="hidden md:flex items-center">
            <a
              href="/Anandu-A-R-Resume.pdf"
              download="Anandu-A-R-Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-blue hover:bg-brand-blue-hover text-white text-sm font-semibold shadow-sm hover:shadow transition-all duration-200 active:scale-[0.98] group"
              aria-label="Download Anandu A R Resume PDF"
            >
              <Download className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-navy-900 hover:text-brand-blue hover:bg-surface-muted transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-b border-surface-border animate-in slide-in-from-top-2 duration-200 px-4 pt-3 pb-5 space-y-2 mt-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                  isActive
                    ? 'text-brand-blue bg-brand-ice font-bold'
                    : 'text-content-secondary hover:text-navy-900 hover:bg-surface-muted'
                }`}
              >
                <span>{item.name}</span>
                <ChevronRight className="w-4 h-4 text-brand-accent" />
              </a>
            );
          })}
          <div className="pt-2">
            <a
              href="/Anandu-A-R-Resume.pdf"
              download="Anandu-A-R-Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-brand-blue hover:bg-brand-blue-hover text-white text-base font-semibold shadow-sm transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
