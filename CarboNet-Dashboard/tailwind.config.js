/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: "#121e16",
        moss: "#2f5d3c",
        sage: "#a3c29b",
        olive: "#88a05b",
        lightText: "#f0f0f0",
      },
    },
  },
  plugins: [],
}

