/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
        colors:{
            primary: '#0c19bc',
            secondary: '#52a6da',
        },
        fontFamily: {
            sans: ['Inter var'],
        },
    },
  },
  plugins: [],
}

