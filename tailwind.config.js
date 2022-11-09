/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,css,js}"],
  theme: {
    container:{
      center: true,
      padding:{
        DEFAULT:'1rem',
        sm:'2rem',
        md:'3rem',
        lg:'4rem',
      }
    },
    extend: {
      fontFamily:{
        'serif-look': [ 'Libre Baskerville' ],
       ' sans-look': ['Montserrat'],
        'same': ['Poppins'],
      },
      colors:{
        primary: {
          DEFAULT:'#00adb5',
          black:'#222831',
          gray:'#393e46',
          white:'#eeeeee'
        }
        
      }

    },
  },
  plugins: [],
}
