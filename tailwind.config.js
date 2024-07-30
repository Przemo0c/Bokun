/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(57 178 108)',
        secondary : 'rgb(27, 34, 48)',
        green: {
          1: 'rgba(57, 178, 108, 0.12)'
        }
      },
      animation: {
        'ping': 'ping 1s cubic-bezier(0.4, 0, 0.6, 1) 1 reverse',
        'bounce': 'vote 1s ease-in-out once'
      }
    },
  },
  plugins: [],
}