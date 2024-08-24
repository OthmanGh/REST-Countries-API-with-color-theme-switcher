/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        neutral: {
          'dark-blue-elements': 'hsl(209, 23%, 22%)', // Dark Mode Elements
          'very-dark-blue-bg': 'hsl(207, 26%, 17%)', // Dark Mode Background
          'very-dark-blue-text': 'hsl(200, 15%, 8%)', // Light Mode Text
          'dark-gray-input': 'hsl(0, 0%, 52%)', // Light Mode Input
          'very-light-gray-bg': 'hsl(0, 0%, 98%)', // Light Mode Background
          'white-text-elements': 'hsl(0, 0%, 100%)', // Dark Mode Text & L
        },
      },

      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
      },

      fontWeight: {
        light: 300,
        semibold: 600,
        bold: 800,
      },
    },
  },
  plugins: [],
};
