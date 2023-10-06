/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
      extend: {
          colors: {
              'text-primary': '#FFFFFF',
              primary: '#21201E',
              secondary: '#d3d3d3',
          },
          animation: {
              'spin-slow': 'spin 3s linear infinite',
          },
      },
  },
  plugins: [],
};