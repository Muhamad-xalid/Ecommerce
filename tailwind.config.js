/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(-4deg)' },
          '25%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(4.0deg)' },
          '75%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-4.0deg)' },
        },
      },
    },
  },
  plugins: [],
}
