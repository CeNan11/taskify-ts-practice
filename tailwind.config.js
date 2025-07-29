/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        anton: ["Anton", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        neucha: ["Neucha", "cursive"],
      },
    },
  },
  plugins: [],
}
