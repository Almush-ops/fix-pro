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
        // Dark charcoal/black palette (Electrician style)
        brand: {
          50: '#F8F8F8',
          100: '#F0F0F0',
          200: '#E0E0E0',
          300: '#C0C0C0',
          400: '#808080',
          500: '#404040',
          600: '#2A2A2A',
          700: '#1A1A1A',
          800: '#111111',
          900: '#0A0A0A',
          950: '#050505',
        },
        // Orange accent (Electrician signature color)
        accent: {
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
          950: '#431407',
        },
        // Semantic colors
        dark: '#1A1A1A',
        surface: '#F5F5F5',
        border: '#E5E5E5',
        muted: '#6B7280',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
