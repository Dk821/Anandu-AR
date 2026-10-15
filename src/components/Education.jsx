import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 lg:py-28 bg-white border-t border-surface-border-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-ice text-brand-blue text-xs font-bold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            Academic Foundations
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 font-heading tracking-tight mb-4">
            Education
          </h2>
          <p className="text-lg text-brand-blue font-semibold max-w-2xl mx-auto">
            Specialized Hospital Administration & Nursing Qualifications
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {education.map((edu, index) => {
            const isPrimary = edu.isPrimary;

            return (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPrimary
                    ? 'bg-gradient-to-b from-[#F5F8FC] to-white border-2 border-brand-blue shadow-soft hover:shadow-soft-hover'
                    : 'bg-white border border-surface-border hover:border-brand-accent-light shadow-subtle hover:shadow-soft'
                }`}
              >
                {/* Primary Academic Achievement Badge */}
                {isPrimary && (
                  <div className="absolute -top-3.5 left-8 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-blue text-white text-xs font-bold shadow-sm tracking-wide">
                    <Award className="w-3.5 h-3.5" />
                    <span>Primary Academic Achievement</span>
                  </div>
                )}

                <div>
                  {/* Top Bar: Icon & Duration */}
                  <div className="flex items-center justify-between gap-3 mb-6 pt-1">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                        isPrimary
                          ? 'bg-brand-blue text-white shadow-sm'
                          : 'bg-brand-ice text-brand-blue border border-blue-100'
                      }`}
                    >
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-brand-blue text-xs font-bold border border-blue-100">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.duration}
                    </span>
                  </div>

                  {/* Degree Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-navy-900 font-heading mb-2 leading-snug">
                    {edu.degree}
                  </h3>

                  {/* Institution */}
                  <p className="text-base font-semibold text-brand-blue mb-4">
                    {edu.institution}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-content-secondary leading-relaxed mb-6">
                    {edu.description}
                  </p>
                </div>

                {/* Footer status / key pillar */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                  <span className="text-content-muted">{edu.badgeText}</span>
                  <div className="flex items-center gap-1 text-brand-blue">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Verified Qualification</span>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
