/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'wedding-pink': '#F8BBD0',
        'wedding-rose': '#F48FB1',
        'wedding-gold': '#FFD700',
        'wedding-cream': '#FFF8E1',
        'wedding-gray': '#F5F5F5',
      },
      fontFamily: {
        'elegant': ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
