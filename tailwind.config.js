const colors = {
  inherit: 'inherit',
  darkBlue: '#022F47',
  black: '#000000',
  lightOrange: '#F3D470',
  lightGray: '#B5B5B5',
};

module.exports = {
  purge: [
    './dist/*.html',
    './dist/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      color: colors,
      backgroundColor: colors,
      borderColor: colors,
      textColor: colors,
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        xs: ['10px', '12px'],
        sm: ['12px', '14px'],
        base: ['14px', '16px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
