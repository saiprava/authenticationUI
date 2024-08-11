/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/Pages/Auth/*.{js,ts,jsx,tsx}",
    "./src/Pages/Posts/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-20deg)" },
          "50%": { transform: "rotate(20deg)" },
        },
      },
      colors: {
        gray: {
          900: "#6B6C70",
          800: "#27292D",
          700: "#C5C7CA",
          600: "#35373B",
          500: "#7F8084",
          400: "#969696",
        },
      },
      width: {
        30: "30%",
        40: "40%",
        90: "90%",
        75: "75%",
        98: "98%",
        90: "90%",
      },
      animation: {
        wiggle: "wiggle 3s ease-in-out infinite",
        bounce: "bounce 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
