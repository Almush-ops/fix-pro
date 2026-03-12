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
        // Navy Blue palette (Plumber style - primary color)
        brand: {
          50: '#EEF2F6',
          100: '#D5DDE6',
          200: '#ABBCC9',
          300: '#7A98AE',
          400: '#4E7491',
          500: '#2D5476',
          600: '#1E3A5F',
          700: '#162D4A',
          800: '#0F2038',
          900: '#0A1628',
        },
        // Coral/Salmon accent (for CTAs and highlights)
        accent: {
          300: '#F9A8A3',
          400: '#F47C75',
          500: '#E85A4F',
          600: '#D94840',
          700: '#C13A33',
        },
        // Semantic colors
        dark: '#1E3A5F',
        surface: '#F5F7FA',
        border: '#E2E8F0',
        muted: '#64748B',
      },
    },
  },
  plugins: [],
};
