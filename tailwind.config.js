/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    fontFamily: {
      'coolvetica': ['Coolvetica', 'sans-serif'],
    },
    colors: {
      'primary': '#121212',
      'secondary': '#1e1e1e',
      'ptext': '#ffffff',
    },
  },
  plugins: [],
};
