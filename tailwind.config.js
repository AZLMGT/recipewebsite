/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        home1: '#faf9fb'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
