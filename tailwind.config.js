/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["Work Sans", "serif"]
      },
      colors: {
        secondary: "#6600FF"
      }
    },
  },
  plugins: [],
}
