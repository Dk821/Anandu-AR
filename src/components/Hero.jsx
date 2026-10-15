import React from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  Compass,
  ShieldCheck,
  Activity,
  Award,
  CheckCircle2,
  Building2,
  BarChart3,
  HeartHandshake,
  FileSpreadsheet,
  GraduationCap,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal } = portfolioData;

  const handleScrollToAbout = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const offsetTop = aboutSection.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-[#F5F8FC] via-white to-white"
    >
      {/* Decorative subtle medical/geometric background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-ice/70 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-brand-accent-pale/40 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-subtle-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Text & Actions (Desktop 7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Small Introduction Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-ice border border-brand-accent-light/50 text-brand-blue text-xs sm:text-sm font-bold tracking-wider uppercase mb-5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
              HEALTHCARE PROFESSIONAL
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy-900 font-heading leading-tight mb-4">
              <span className="text-navy-900">Anandu</span> <span className="text-brand-blue">A R</span>
            </h1>

            {/* Professional Title */}
            <p className="text-lg sm:text-xl font-semibold text-brand-blue/90 mb-5 tracking-wide">
              Hospital Administration <span className="text-content-light px-1">|</span> Healthcare Operations <span className="text-content-light px-1">|</span> Patient Care
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-content-secondary leading-relaxed max-w-2xl mb-8">
              A motivated healthcare professional with a <strong className="text-navy-900 font-semibold">Master of Hospital Administration (MHA)</strong> and a strong foundation in clinical practice and healthcare administration. Passionate about improving hospital operations, healthcare quality, patient safety, and efficient healthcare delivery.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#about"
                onClick={handleScrollToAbout}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-semibold text-base shadow-soft hover:shadow-soft-hover transition-all duration-200 active:scale-[0.98] group"
              >
                <Compass className="w-5 h-5 text-brand-accent transition-transform duration-200 group-hover:rotate-45" />
                <span>Explore My Journey</span>
              </a>

              <a
                href="/Anandu-A-R-Resume.pdf"
                download="Anandu-A-R-Resume.pdf"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-brand-blue hover:bg-brand-blue-hover text-white font-semibold text-base shadow-soft hover:shadow-soft-hover transition-all duration-200 active:scale-[0.98] group"
              >
                <Download className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Professional Highlights Chips */}
            <div className="w-full pt-6 border-t border-surface-border/60">
              <span className="block text-xs font-bold uppercase tracking-wider text-content-muted mb-3">
                Key Focus Areas
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                {personal.highlights.map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-muted border border-surface-border text-navy-900 text-xs sm:text-sm font-semibold hover:border-brand-accent-light transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Executive Healthcare Credentials Showcase (No Person Image) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-end w-full"
          >
            <div className="relative w-full max-w-lg">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-brand-blue via-brand-accent to-navy-900 rounded-3xl opacity-20 blur-xl pointer-events-none" />

              {/* Main Credentials Panel */}
              <div className="relative rounded-3xl bg-white p-6 sm:p-7 shadow-soft border border-surface-border overflow-hidden">
                
                {/* Header of credentials card */}
                <div className="flex items-center justify-between pb-5 border-b border-surface-border-light mb-6">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-brand-ice flex items-center justify-center text-brand-blue">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h2 className="text-xs font-bold text-navy-900 uppercase tracking-wider">
                        Executive Overview
                      </h2>
                      <p className="text-[11px] text-content-muted">
                        Healthcare & Hospital Administration
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Active Practice
                  </span>
                </div>

                {/* 4 Professional Pillar Widgets */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                  
                  {/* Pillar 1 */}
                  <div className="p-3.5 rounded-xl bg-[#F5F8FC] border border-blue-100 hover:border-brand-accent-light transition-all">
                    <div className="w-7 h-7 rounded-lg bg-white text-brand-blue flex items-center justify-center mb-2 shadow-xs">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <p className="text-xs font-bold text-navy-900 leading-tight">
                      MHA Specialization
                    </p>
                    <p className="text-[11px] text-content-muted mt-0.5">
                      Acharya Institute of Health Sciences
                    </p>
                  </div>

                  {/* Pillar 2 */}
                  <div className="p-3.5 rounded-xl bg-[#F5F8FC] border border-blue-100 hover:border-brand-accent-light transition-all">
                    <div className="w-7 h-7 rounded-lg bg-white text-brand-blue flex items-center justify-center mb-2 shadow-xs">
                      <HeartHandshake className="w-4 h-4" />
                    </div>
                    <p className="text-xs font-bold text-navy-900 leading-tight">
                      Clinical Excellence
                    </p>
                    <p className="text-[11px] text-content-muted mt-0.5">
                      JNCASR & Hospital Care
                    </p>
                  </div>

                  {/* Pillar 3 */}
                  <div className="p-3.5 rounded-xl bg-[#F5F8FC] border border-blue-100 hover:border-brand-accent-light transition-all">
                    <div className="w-7 h-7 rounded-lg bg-white text-brand-blue flex items-center justify-center mb-2 shadow-xs">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <p className="text-xs font-bold text-navy-900 leading-tight">
                      Quality & Safety
                    </p>
                    <p className="text-[11px] text-content-muted mt-0.5">
                      Standards & Compliance
                    </p>
                  </div>

                  {/* Pillar 4 */}
                  <div className="p-3.5 rounded-xl bg-[#F5F8FC] border border-blue-100 hover:border-brand-accent-light transition-all">
                    <div className="w-7 h-7 rounded-lg bg-white text-brand-blue flex items-center justify-center mb-2 shadow-xs">
                      <BarChart3 className="w-4 h-4" />
                    </div>
                    <p className="text-xs font-bold text-navy-900 leading-tight">
                      Data & Analytics
                    </p>
                    <p className="text-[11px] text-content-muted mt-0.5">
                      Power BI & MS Excel
                    </p>
                  </div>

                </div>

                {/* Featured Institutional Experience Highlight */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-navy-900 to-navy-800 text-white shadow-sm mb-4">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-bold text-brand-accent uppercase tracking-wider">
                      Current Engagement
                    </span>
                    <span className="text-[11px] text-slate-300">2022 – Present</span>
                  </div>
                  <h4 className="text-sm font-bold font-heading">
                    Jawaharlal Nehru Centre for Advanced Scientific Research
                  </h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Specialized clinical & healthcare support in research-oriented healthcare environment.
                  </p>
                </div>

                {/* Bottom Core Values Chips */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2">
                  <span className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-surface-muted text-content-secondary border border-surface-border">
                    Hospital Operations
                  </span>
                  <span className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-surface-muted text-content-secondary border border-surface-border">
                    Clinical Protocols
                  </span>
                  <span className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-surface-muted text-content-secondary border border-surface-border">
                    Patient Advocacy
                  </span>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
