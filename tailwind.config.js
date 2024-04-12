
const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*/*.tsx', ],
  theme: {
    extend: {},
    screens: {
      'xs': '400px',
      ...defaultTheme.screens,
    }
  },
  plugins: [],
}

