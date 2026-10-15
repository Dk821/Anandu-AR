import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-surface-bg text-content-primary flex flex-col selection:bg-brand-accent-pale selection:text-brand-blue">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Page Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Certifications />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}
