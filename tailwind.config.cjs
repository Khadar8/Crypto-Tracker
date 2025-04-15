/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#38bdf8', // Your primary cyan color
        secondary: '#0ea5e9', // A darker shade of your primary
        accent: '#facc15',   // Example accent color
        neutral: '#1e293b',  // Your darker background color
        'neutral-light': '#f1f5f9', // Your lighter text color
      },
    },
  },
  plugins: [],
}