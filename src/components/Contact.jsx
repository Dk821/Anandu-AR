import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, ArrowUpRight, Copy, Check, Send, MessageSquare } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

function LinkedInIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 2H3.55C2.69 2 2 2.69 2 3.55v16.9c0 .86.69 1.55 1.55 1.55h16.9c.86 0 1.55-.69 1.55-1.55V3.55c0-.86-.69-1.55-1.55-1.55ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.3 10.85h-2.94V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.53V9.2h2.82v1.31h.04c.39-.74 1.35-1.52 2.78-1.52 2.97 0 3.52 1.95 3.52 4.49v5.27Z" />
    </svg>
  );
}

export default function Contact() {
  const { contact } = portfolioData;
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${contact.email}`;
    }
  };

  const channels = [
    {
      id: 'email',
      label: 'Email Address',
      value: contact.email,
      description: 'The fastest way to reach me for opportunities, collaborations or general enquiries.',
      href: `mailto:${contact.email}`,
      linkLabel: 'Send an email',
      icon: Mail,
    },
    {
      id: 'linkedin',
      label: 'LinkedIn Profile',
      value: 'linkedin.com/in/ananduar',
      description: 'Connect professionally and follow my work in hospital administration and healthcare operations.',
      href: contact.linkedin,
      linkLabel: 'View profile',
      icon: LinkedInIcon,
    },
    {
      id: 'location',
      label: 'Based In',
      value: contact.location,
      description: 'Working across hospital operations, clinical care and patient safety in Bangalore.',
      href: null,
      linkLabel: null,
      icon: MapPin,
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-surface-muted border-t border-surface-border relative overflow-hidden"
    >
      <div className="absolute -top-28 right-0 w-80 h-80 rounded-full bg-brand-accent-pale/50 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-28 left-0 w-80 h-80 rounded-full bg-brand-ice/70 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-brand-accent-light text-brand-blue text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <MessageSquare className="w-3.5 h-3.5" />
            Let&apos;s Connect
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 font-heading tracking-tight mb-4">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg text-content-secondary max-w-2xl mx-auto leading-relaxed">
            Have a question, an opportunity, or an idea worth discussing? I&apos;d be glad to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {channels.map((channel, index) => {
            const Icon = channel.icon;
            return (
              <motion.div
                key={channel.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="group flex flex-col p-6 rounded-2xl bg-white border border-surface-border hover:border-brand-accent transition-all duration-200 hover:shadow-subtle hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-brand-ice text-brand-blue flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors duration-200">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-content-light text-right">
                    {channel.label}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-extrabold text-navy-900 font-heading tracking-tight break-all leading-snug">
                  {channel.value}
                </h3>
                <p className="mt-2 text-sm text-content-secondary leading-relaxed flex-1">
                  {channel.description}
                </p>

                <div className="mt-5 pt-4 border-t border-surface-border-light flex items-center justify-between gap-3">
                  {channel.href ? (
                    <a
                      href={channel.href}
                      target={channel.id === 'linkedin' ? '_blank' : undefined}
                      rel={channel.id === 'linkedin' ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-blue hover:text-navy-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-md"
                    >
                      {channel.linkLabel}
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-blue">
                      Open to relocation
                    </span>
                  )}

                  {channel.id === 'email' && (
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-muted hover:bg-brand-ice border border-surface-border text-xs font-bold text-content-secondary hover:text-brand-blue transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
                      aria-label="Copy email address"
                    >
                      {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      {copied ? 'Copied' : 'Copy'}
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="mt-10 max-w-6xl mx-auto rounded-3xl bg-gradient-to-r from-navy-900 to-navy-800 p-6 sm:p-8 text-white shadow-soft flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-brand-accent mb-2">
              Availability
            </p>
            <p className="text-base sm:text-lg font-semibold max-w-2xl leading-relaxed">
              {contact.availability}
            </p>
          </div>
          <a
            href={`mailto:${contact.email}?subject=Hello%20Anandu`}
            className="shrink-0 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-navy-900 hover:bg-brand-ice font-bold text-sm transition-colors duration-200 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
          >
            <Send className="w-4 h-4 text-brand-blue" />
            Start a conversation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
