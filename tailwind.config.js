/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: "20px",
      center: true,
    },
    extend: {
      colors: {
        ghost_white: "#F9F7FF",
        middle_green: "#A2C950",
        dark_purple: "#2B0838",
        light_pink: "#E95BC0",
        royal_orange: "#EF9C4B",
        sea_serpent: "#5CC7C8",
        classic_rose: "#F5D3ED",
        maize: "#F5CC46",
        aquamarine: "#90FACD",
        cerise: "#E83368",
        han_purple: "#5F36F3",
      },
    },
  },
  plugins: [],
};
