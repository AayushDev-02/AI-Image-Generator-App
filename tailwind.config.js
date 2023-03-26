/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#101014',
      second: '#1c1b20',
      brand: '#9ee22e',
      primary_text: '#f8f8f8'
    }
  },
  plugins: [],
}
