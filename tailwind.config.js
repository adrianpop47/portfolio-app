/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      workSans: ["Work Sans", "sans-serif"],
      oswald: ["Oswald", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    backgroundImage: {
      header: "url(./assets/images/background.jpg)",
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
