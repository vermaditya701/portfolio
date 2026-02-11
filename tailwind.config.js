/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Modern Light Theme - Clean and Professional
        'light-bg': '#fafafa',
        'light-surface': '#ffffff',
        'light-card': '#ffffff',
        'light-text': '#18181b',
        'light-text-secondary': '#52525b',
        'light-text-tertiary': '#71717a',
        'light-border': '#e4e4e7',
        'light-border-hover': '#d4d4d8',
        'light-icon': '#52525b',

        // Modern Dark Theme - Deep and Elegant
        'dark-bg': '#09090b',
        'dark-surface': '#18181b',
        'dark-card': '#1c1c22',
        'dark-text': '#fafafa',
        'dark-text-secondary': '#a1a1aa',
        'dark-text-tertiary': '#71717a',
        'dark-border': '#27272a',
        'dark-border-hover': '#3f3f46',
        'dark-icon': '#a1a1aa',

        // Accent Colors - Violet Based
        'accent': {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },

        // Legacy support
        primary: '#7c3aed',
        secondary: '#8b5cf6',
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 8px -2px rgba(0, 0, 0, 0.08)',
        'medium': '0 4px 16px -4px rgba(0, 0, 0, 0.12)',
        'large': '0 8px 32px -8px rgba(0, 0, 0, 0.16)',
        'glow': '0 0 20px -5px rgba(124, 58, 237, 0.4)',
        'glow-lg': '0 0 40px -10px rgba(124, 58, 237, 0.5)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(16px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
