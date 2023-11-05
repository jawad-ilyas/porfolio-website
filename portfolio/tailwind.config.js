/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors: {
        'customHeroBg': '#f5fcff',
        'darkBg' : '#9B9AF3'
      },
    },
  },
  plugins: [],
}