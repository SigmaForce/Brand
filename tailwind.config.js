/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts,tsx}", "./*.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#112c19",
          "dark-hover": "#0d2314",
          "dark-active": "#0a1b0f",
          light: "#E8FF1A",
        },
      },
    },
  },
  plugins: [],
};
