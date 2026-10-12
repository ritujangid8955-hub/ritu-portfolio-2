/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ivory: { DEFAULT: '#F6F1E7', deep: '#EDE6D6' },
        navy: { DEFAULT: '#14213D', soft: '#2A3A5E', ink: '#0E1730' },
        lavender: { DEFAULT: '#B7B1D6', light: '#DAD6EC' },
        dusty: { DEFAULT: '#7F97B8', light: '#C3D0E2' },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"Hanken Grotesk"', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: { soft: '0 24px 60px -28px rgba(20,33,61,0.35)' },
    },
  },
  plugins: [],
}
