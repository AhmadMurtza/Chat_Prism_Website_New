/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        scaleUpDown: 'scaleUpDown 2s infinite', // Custom animation
      },
      keyframes: {
        scaleUpDown: {
          '0%, 100%': { transform: 'scale(1)' }, // Original size
          '50%': { transform: 'scale(1.05)' },   // Scaled-up size
        },
      },
         colors: {
       
        webcolor: {
          primary: '#3543DE', // Light shade of your color
          achromatic: '#333333', // Default/main shade
          green: '#32D583', // Dark shade of your color
          lightgray: '#F8F9FA',
           lightblack:'#1E1E1E',
        },
      },
    },
  },
  plugins: [],
};
