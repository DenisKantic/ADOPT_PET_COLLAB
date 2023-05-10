/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xxs': '270px',
      'xs': '410px',
      'sm': '430px',
      'md': '560px',
    }
  },
  plugins: [],
}