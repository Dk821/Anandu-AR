import React from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  MapPin,
  CheckCircle2,
  Clock,
  Building2,
  Briefcase,
  ChevronRight,
  Shield,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const experienceTags = {
  jncasr: ['Academic Research Support', 'Patient Monitoring', 'Emergency Clinical Care', 'Multidisciplinary Collaboration'],
  rayuwa: ['Home Healthcare', 'Caregiver Education', 'Treatment Adherence', 'Clinical Documentation'],
  'rama-rao': ['Inpatient Ward Care', 'Hospital Administration Support', 'Physician Coordination', 'Patient Satisfaction'],
};

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 lg:py-28 bg-[#F5F8FC] border-t border-surface-border-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/70 text-brand-blue text-xs font-bold uppercase tracking-wider mb-3">
            <Clock className="w-3.5 h-3.5" />
            Career Path
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 font-heading tracking-tight mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-brand-blue font-semibold max-w-2xl mx-auto">
            My Journey in Healthcare
          </p>
        </div>

        {/* Modern Left-Anchored Timeline Layout */}
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-6 sm:pl-10 space-y-10 border-l-2 border-blue-200">
            
            {experience.map((item, index) => {
              const tags = experienceTags[item.id] || [];

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Node on Left Rail */}
                  <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-5 h-5 rounded-full bg-white border-4 border-brand-blue shadow-sm group-hover:scale-125 group-hover:border-navy-900 transition-all duration-200 z-10" />

                  {/* Experience Card */}
                  <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-surface-border hover:border-brand-accent-light shadow-subtle hover:shadow-soft transition-all duration-300">
                    
                    {/* Header Row: Role, Organization & Badges */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pb-5 border-b border-surface-border-light">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-brand-ice px-2.5 py-0.5 rounded-md">
                            Clinical Practice
                          </span>
                          {item.isCurrent && (
                            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                              Current Position
                            </span>
                          )}
                        </div>
                        <h3 className="text-2xl font-bold text-navy-900 font-heading group-hover:text-brand-blue transition-colors">
                          {item.role}
                        </h3>
                        <p className="text-base font-semibold text-content-secondary mt-0.5">
                          {item.organization}
                        </p>
                      </div>

                      {/* Right Meta: Date & Location Pills */}
                      <div className="flex flex-wrap md:flex-col md:items-end gap-2 shrink-0">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 text-brand-blue text-xs font-bold border border-blue-100">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.period}
                        </span>
                        {item.location && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-surface-muted text-content-muted text-xs font-medium">
                            <MapPin className="w-3 h-3 text-brand-blue" />
                            {item.location}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Responsibilities List */}
                    <div className="py-5">
                      <h4 className="text-xs font-bold text-content-muted uppercase tracking-wider mb-3">
                        Key Responsibilities & Scope
                      </h4>
                      <ul className="space-y-3">
                        {item.responsibilities.map((resp, rIdx) => (
                          <li
                            key={rIdx}
                            className="flex items-start gap-3 text-sm sm:text-base text-content-secondary leading-relaxed"
                          >
                            <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5 stroke-[2]" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom Scope Tags */}
                    {tags.length > 0 && (
                      <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
                        {tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-xs font-medium px-2.5 py-1 rounded-md bg-surface-muted text-content-secondary border border-surface-border hover:border-brand-accent-light transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}
