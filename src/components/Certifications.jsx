import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, BookOpen, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-20 lg:py-28 bg-white border-t border-surface-border-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-ice text-brand-blue text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            Continuous Learning
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 font-heading tracking-tight mb-4">
            Certifications & Professional Development
          </h2>
          <p className="text-lg text-brand-blue font-semibold max-w-2xl mx-auto">
            Analytical, Productivity, and Management Specializations
          </p>
        </div>

        {/* Certifications Badges / Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 max-w-6xl mx-auto">
          {certifications.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="group p-5 rounded-2xl bg-[#F5F8FC] border border-blue-100 hover:border-brand-accent transition-all duration-200 hover:shadow-subtle hover:-translate-y-0.5 flex items-start gap-3.5"
            >
              <div className="w-9 h-9 rounded-xl bg-white border border-blue-200/80 flex items-center justify-center text-brand-blue shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-200 shadow-xs">
                <CheckCircle className="w-4 h-4 stroke-[2.2]" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm sm:text-base font-bold text-navy-900 font-heading group-hover:text-brand-blue transition-colors leading-snug">
                  {item}
                </h3>
                <span className="inline-block mt-2 text-[11px] font-semibold text-content-muted uppercase tracking-wider">
                  Professional Development
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional highlight note */}
        <div className="mt-12 text-center">
          <p className="inline-flex items-center gap-2 text-xs sm:text-sm text-content-muted bg-surface-muted px-4 py-2 rounded-full border border-surface-border">
            <Layers className="w-4 h-4 text-brand-blue" />
            <span>Dedicated to applying modern data tools & analytical methodologies to healthcare management.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
