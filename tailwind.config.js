/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        lightRed: '#ff5757',
        orangeyYellow: '#ffb01f',
        greenTeal: '#00bd91',
        cobaltBlue: '#1125d4',
        slateBlue: '#7857ff',
        royalBlue: '#2e2be9',
        violetBlue: '#4E21CA',
        persianBlue: '#2421CA',
        paleBlue: '#ebf1ff',
        lightLavender: '#c8c7ff',
        darkGray: '#303b5a'
      },
      fontFamily: {
        Hanken: "'Hanken Grotesk', serif"
      }
    },
  },
  plugins: [],
}

