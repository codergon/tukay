/** @type {import('tailwindcss').Config} */
export default {
  plugins: [],
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Aeonik"],
    },
    extend: {
      colors: {
        primary: "#66b0ff",
        zinc: {
          850: "#222222",
          ...import("tailwindcss/colors").zinc,
        },
        neutral: {
          750: "#2d2d2d",
          850: "#191918",
          ...import("tailwindcss/colors").neutral,
        },
      },
    },
  },
};
