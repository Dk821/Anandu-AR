import React from 'react';
import { ShieldPlus, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-navy-950 text-white py-12 border-t border-navy-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Brand & Identity */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center text-white shadow-sm">
              <ShieldPlus className="w-5 h-5 text-brand-accent-light" />
            </div>
            <div>
              <p className="font-extrabold text-white text-lg tracking-tight font-heading leading-tight">
                Anandu A R
              </p>
              <p className="text-xs sm:text-sm text-slate-400 font-medium">
                Healthcare Professional | Hospital Administration
              </p>
            </div>
          </div>

          {/* Copyright & Scroll To Top */}
          <div className="flex items-center gap-6">
            <p className="text-xs sm:text-sm text-slate-400">
              © {currentYear}{' '}
              <a
                href="https://madgen.space"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-accent hover:text-white font-semibold underline underline-offset-4 transition-colors"
              >
                madgen.space
              </a>
            </p>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-navy-900 hover:bg-brand-blue text-slate-300 hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
