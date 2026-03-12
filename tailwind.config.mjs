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
        // Orange/Flame palette (Electrician style - primary color)
        brand: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
        },
        // Accent (Blue - for secondary elements)
        accent: {
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
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
