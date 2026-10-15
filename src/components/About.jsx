import React from 'react';
import { motion } from 'framer-motion';
import {
  HeartHandshake,
  Building2,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  Quote,
  ArrowRight,
  ShieldCheck,
  Stethoscope,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  HeartHandshake: HeartHandshake,
  Building2: Building2,
  TrendingUp: TrendingUp,
};

const pillarDetails = {
  'healthcare-exp': [
    'Direct patient care & clinical monitoring',
    'Specialized research & hospital care workflows',
    'Accurate medical documentation & care coordination',
  ],
  'hospital-admin': [
    'Hospital operations & workflow management',
    'Interdepartmental coordination & bed flow',
    'Adherence to healthcare standards & safety',
  ],
  'professional-growth': [
    'Analytical modeling with MS Excel & Power BI',
    'Business analysis & healthcare process optimization',
    'Continuous quality improvement principles',
  ],
};

export default function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-t border-surface-border-light relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-ice/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-ice text-brand-blue text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Background & Focus
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 font-heading tracking-tight">
            {about.heading}
          </h2>
          <p className="text-lg sm:text-xl text-brand-blue font-semibold mt-2">
            {about.subtitle}
          </p>
        </div>

        {/* 2-Column Modern Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Narrative, Mission Callout & Highlights (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-between space-y-8"
          >
            {/* Primary Narrative Text */}
            <div className="space-y-5 text-base sm:text-lg text-content-secondary leading-relaxed">
              <p>
                {about.description}
              </p>
            </div>

            {/* Mission Callout Card */}
            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-[#F5F8FC] to-blue-50/50 border-l-4 border-l-brand-blue border border-blue-100 shadow-subtle">
              <Quote className="w-8 h-8 text-brand-accent/40 mb-2 -ml-1" />
              <p className="text-base sm:text-lg font-medium text-navy-900 italic leading-snug">
                "Committed to bridging clinical practice with modern hospital administration to foster quality healthcare and patient safety."
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs font-bold text-brand-blue uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Patient Safety & Operations Mindset</span>
              </div>
            </div>

            {/* Core Capability Chips */}
            <div className="pt-2">
              <h4 className="text-xs font-bold text-content-muted uppercase tracking-wider mb-3">
                Key Strengths & Practice Areas
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Clinical Operations & Coordination',
                  'Inpatient & Ward Management',
                  'Patient Safety Standards',
                  'Healthcare Data Reporting',
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-surface-muted border border-surface-border text-sm font-semibold text-navy-900"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Right Column: 3 Structured Cards (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-5"
          >
            {about.pillars.map((pillar, index) => {
              const IconComponent = iconMap[pillar.icon] || HeartHandshake;
              const details = pillarDetails[pillar.id] || [];

              return (
                <div
                  key={pillar.id}
                  className="group relative p-6 sm:p-7 rounded-2xl bg-[#F5F8FC] border border-blue-100 hover:border-brand-accent transition-all duration-300 hover:shadow-soft hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    {/* Simple Blue Line Icon */}
                    <div className="w-12 h-12 rounded-xl bg-white border border-blue-200/80 flex items-center justify-center text-brand-blue shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300 shadow-sm mt-0.5">
                      <IconComponent className="w-6 h-6 stroke-[1.8]" />
                    </div>

                    <div className="flex-1">
                      {/* Pillar Title */}
                      <div className="flex items-center justify-between mb-1.5">
                        <h3 className="text-xl font-bold text-navy-900 font-heading group-hover:text-brand-blue transition-colors">
                          {pillar.title}
                        </h3>
                        <span className="text-xs font-semibold text-brand-blue/70 bg-white px-2.5 py-0.5 rounded-full border border-blue-100">
                          Pillar 0{index + 1}
                        </span>
                      </div>

                      {/* Pillar Description */}
                      <p className="text-sm sm:text-base text-content-secondary leading-relaxed mb-4">
                        {pillar.description}
                      </p>

                      {/* Detail points */}
                      <ul className="space-y-1.5 pt-3 border-t border-blue-100/70">
                        {details.map((point, pIdx) => (
                          <li
                            key={pIdx}
                            className="flex items-center gap-2 text-xs sm:text-sm text-content-secondary"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
