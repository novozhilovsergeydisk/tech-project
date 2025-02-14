/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#736858',
          dark: '#5a523f',
          light: '#a79e97'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};