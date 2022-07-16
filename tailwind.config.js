/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      garamond: ["EB Garamond", "serif"],
      jost: ["Jost", "sans-serif"],
    },
    extend: {
      colors: {
        "celo-green": "#35D07F",
        "celo-yellow": "#FBCC5C",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
