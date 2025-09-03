/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B0F14",
        text: "#E6EDF3",
        accent: "#64FFDA",
        muted: "#8892B0",
      },
      fontFamily: {
        // tu gardes Roboto si tu veux, sinon:
        // sans: ['Inter','system-ui','sans-serif'],
      },
    },
  },
  plugins: [],
}

