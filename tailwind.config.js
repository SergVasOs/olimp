const plugin = require('tailwindcss/plugin');

const colors = {
  inherit: 'inherit',
	white: '#ffffff',
  blue: {
    300: '#1890FF',
    400: '#1D87BB',
    800: '#022F47',
    900: '#10223E',
  },
  black: '#000000',
	yellow: {
		400: '#FFC531',
	},
  orange: {
    200: '#F3D470',
  },
  gray: {
    100: '#F8F8F8',
    200: '#F3F3F3',
    250: '#F0F0F0',
    300: '#E8E8E8',
    400: '#DEDEDE',
    500: '#B5B5B5',
    600: '#BEBEBE',
    700: '#7C7C7C',
    900: '#333333',
    950: '#003453',
  },
  green: {
    300: '#539269',
  },
  red: {
    300: '#DF5951',
    500: '#F44336',
    700: '#6B5151',
  },
};

module.exports = {
/*  purge: [
    './dist/!*.html',
    './dist/!*.js',
  ],*/
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'xl': '1200px',
      },
      container: {
        padding: '1rem',
      },
      color: colors,
			gradientColorStops: colors,
      backgroundColor: colors,
      borderColor: colors,
      textColor: colors,
      ringColor: colors,
      stroke: colors,
			fill: colors,
			fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        100: ['10px', '12px'],
        150: ['11px', '13px'],
        200: ['12px', '14px'],
        300: ['13px', '15px'],
        400: ['14px', '18px'],
        500: ['15px', '19px'],
        600: ['16px', '18px'],
        650: ['17px', '19px'],
        700: ['18px', '22px'],
        800: ['20px', '28px'],
        900: ['24px', '32px'],
      },
			width: {
				18: '4.5rem',
				22: '5.5rem',
				30: '7.5rem',
				34: '8.5rem',
				38: '9.5rem',
				108: '27rem',
				modal: '435px',
				sidebar: '275px',
			},
			inset: {
				22: '5.5rem',
			},
			height: {
				13: '3.25rem',
				15: '3.75rem',
			},
      maxWidth: {
        'word': '15ch',
      },
      backgroundImage: {
        'select-arrow-icon': "url('/src/assets/images/selectArrowIcon.svg')",
      },
      backgroundPosition: {
        rightIcon: 'calc(100% - .5rem) center',
      },
			spacing: {
				'4/3': '116.667%',
				'10/7': '142.857%',
				'4/5': '80%',
				'full': '100%',
			},
			boxShadow: {
      	button: '0px -12px 22px rgba(168, 168, 168, 0.25)'
			},
			transitionProperty: {
				'top': 'top',
			}
    },
  },
  variants: {
    extend: {
      ringColor: ['active'],
      ringOffsetColor: ['active'],
      ringOffsetWidth: ['active'],
      ringOpacity: ['active'],
      ringWidth: ['active'],
      padding: ['first'],
      margin: ['last'],
      textColor: ['last'],
      fill: ['hover'],
    }
  },
	plugins: [
		require('@tailwindcss/line-clamp'),
	]
};
