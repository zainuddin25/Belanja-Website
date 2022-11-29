/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'black' : '#121212',
        'blue' : '#0000ff'
      }
    },
  },
  plugins: [],
}
