/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Lato: ["Lato", "san serif"],
      },
      colors: {
        primary: "#598083",
        primaryHover: "#78a8ac",
        secodary: "#9B9C53",
        secondaryHover: "#9B9C53",
      },
    },
  },
  plugins: [],
};

