/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        Italiana: ["Italiana", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Playfair_Display: ["Playfair Display", "serif"],

      },
    },
    plugins: [],
  },
};
