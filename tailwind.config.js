// const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      },
      // colors: {
      //   'teal': colors.teal
      // },
      opacity: {
        '100-important': '1!important',
      },
    },
  },
  variants: {
    extend: {
      width: ['group-hover'],
      scale: ['group-2-hover'],
    },
  },
  plugins: [
    plugin(function({ addVariant, e }) {
      addVariant('group-2-hover', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`group-2-hover${separator}${className}`)}:hover`;
        })
      })
    }),
  ],
}
