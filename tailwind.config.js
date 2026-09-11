/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#030712',
          surface: '#0B132B',
          card: '#111827',
          accent: '#10B981',
          gold: '#F59E0B',
          cyan: '#06B6D4',
        }
      }
    },
  },
  plugins: [],
}
