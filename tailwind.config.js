/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor :{
        'primary' : 'rgb(169, 99, 235)',
        'secondary' : 'rgb(69, 55, 83)',
        
      }
    },
    fontFamily : {
      'hero-font' : 'Caprasimo'
    }
  },
  plugins: [],
}

