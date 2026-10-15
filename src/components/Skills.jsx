import React from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  Activity,
  HeartPulse,
  BarChart3,
  FileSpreadsheet,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Building2: Building2,
  Activity: Activity,
  HeartPulse: HeartPulse,
  BarChart3: BarChart3,
  FileSpreadsheet: FileSpreadsheet,
  ShieldCheck: ShieldCheck,
};

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 lg:py-28 bg-[#F5F8FC] border-t border-surface-border-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/70 text-brand-blue text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5" />
            Expertise & Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 font-heading tracking-tight mb-4">
            Core Competencies
          </h2>
          <p className="text-lg text-brand-blue font-semibold max-w-2xl mx-auto">
            Operational, Clinical, and Analytical Competencies in Healthcare
          </p>
        </div>

        {/* Responsive Skills Grid (3 cols on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Activity;

            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative p-7 rounded-2xl bg-white border border-surface-border hover:border-brand-accent transition-all duration-300 hover:shadow-soft hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Header */}
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-brand-blue mb-5 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300 shadow-sm">
                    <IconComponent className="w-6 h-6 stroke-[1.8]" />
                  </div>

                  {/* Skill Title */}
                  <h3 className="text-xl font-bold text-navy-900 font-heading mb-2.5 group-hover:text-brand-blue transition-colors">
                    {skill.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-content-secondary leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Subtle bottom indicator */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-content-muted">
                  <span className="group-hover:text-brand-blue transition-colors">Healthcare Domain</span>
                  <div className="w-2 h-2 rounded-full bg-blue-200 group-hover:bg-brand-blue transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
