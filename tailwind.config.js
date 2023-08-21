/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#a7cdbd",
        secondary: "#292a2f"
      },
      fontSize: {
        clamp: "clamp(3rem, 5vw, 4rem)",
      },
    },
  },
  plugins: [],
}