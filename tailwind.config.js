/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0A1B2F',
          900: '#12345A', // Primary Navy
          800: '#1B4472',
          700: '#235791',
        },
        primary: {
          DEFAULT: '#12345A',
          hover: '#0E2847',
          light: '#1B4472',
        },
        brand: {
          blue: '#2563EB', // Secondary Professional Blue
          'blue-hover': '#1D4ED8',
          accent: '#60A5FA', // Accent Light Blue
          'accent-light': '#93C5FD',
          'accent-pale': '#DBEAFE',
          ice: '#EFF6FF',
        },
        surface: {
          bg: '#FFFFFF',
          muted: '#F5F8FC', // Light blue-gray background
          card: '#FFFFFF',
          border: '#E2E8F0',
          'border-light': '#EDF2F7',
        },
        content: {
          primary: '#12345A',
          secondary: '#475569',
          muted: '#64748B',
          light: '#94A3B8',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(18, 52, 90, 0.04)',
        'soft': '0 10px 30px -5px rgba(18, 52, 90, 0.08), 0 4px 6px -2px rgba(18, 52, 90, 0.03)',
        'soft-hover': '0 20px 35px -5px rgba(37, 99, 235, 0.12), 0 8px 10px -4px rgba(18, 52, 90, 0.04)',
        'glow': '0 0 25px rgba(96, 165, 250, 0.25)',
      },
      borderRadius: {
        'xl': '0.875rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      }
    },
  },
  plugins: [],
}
