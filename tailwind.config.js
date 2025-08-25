
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        indra: {
          lime: "#a8ff55",
          lilac: "#a274bc",
          purple: "#2b1b38",  
          blue: "#8fccd9",
          dark: "#131114",
          light: "#f7fbfc",
          mushroom: "#3d343a",
          grey: "#b2afb8",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
