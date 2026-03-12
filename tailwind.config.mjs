/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Assistant', 'Arial', 'sans-serif'],
        heading: ['Heebo', 'Arial', 'sans-serif'],
      },
      colors: {
        // Professional Blue palette (from DESIGN-BRIEF.md)
        brand: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        // Accent (Orange - for CTAs and urgency)
        accent: {
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
        },
        // Semantic colors
        dark: '#1C2024',
        surface: '#F4F4F5',
        border: '#E4E4E7',
        muted: '#71717A',
      },
    },
  },
  plugins: [],
};
