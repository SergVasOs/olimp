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
		400: '#F2994A',
	},
	gray: {
		50: '#F9F9F9',
		100: '#F8F8F8',
		200: '#F3F3F3',
		250: '#F0F0F0',
		300: '#E8E8E8',
		400: '#DEDEDE',
		500: '#B5B5B5',
		600: '#BEBEBE',
		650: '#A8A8A8',
		700: '#7C7C7C',
		900: '#333333',
		950: '#003453',
	},
	green: {
		300: '#539269',
		400: '#57A54A',
		500: '#7BBE66',
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
				50: ['9px', '11px'],
				100: ['10px', '12px'],
				150: ['11px', '13px'],
				200: ['12px', '14px'],
				300: ['13px', '15px'],
				400: ['14px', '18px'],
				500: ['15px', '19px'],
				600: ['16px', '22px'],
				650: ['17px', '22px'],
				700: ['18px', '22px'],
				800: ['20px', '28px'],
				850: ['22px', '30px'],
				900: ['24px', '32px'],
				950: ['36px', '42px'],
				1000: ['82px', '82px'],
			},
			width: {
				18: '4.5rem',
				22: '5.5rem',
				25: '6.25rem',
				30: '7.5rem',
				34: '8.5rem',
				38: '9.5rem',
				108: '27rem',
				modal: '435px',
				sidebar: '275px',
				layer: '676px',
				unlimit: '10000px',
				'overflow-box-full': 'calc(100% + 2rem)',
				'overflow-box': 'calc(100% + 1rem)',
			},
			maxHeight: {
				layer: '80vh',
			},
			inset: {
				'2\/5': '40%',
				22: '5.5rem',
				38: '9.5rem',
			},
			height: {
				13: '3.25rem',
				15: '3.75rem',
				22: '5.5rem',
			},
			maxWidth: {
				'word': '15ch',
			},
			backgroundImage: {
				'select-arrow-icon': "url('/src/assets/images/selectArrowIcon.svg')",
			},
			backgroundPosition: {
				rightIcon: 'calc(100% - .5rem) center',
				rightIconLg: 'calc(100% - 1rem) center',
			},
			spacing: {
				'4/3': '116.667%',
				'10/7': '142.857%',
				'4/5': '80%',
				'7/8': '87.5%',
				'4.5': '1.125rem',
				'15': '3.75rem',
				'18': '4.5rem',
				'21': '5.25rem',
				'26': '6.5rem',
				'42': '10.5rem',
				full: '100%',
			},
			boxShadow: {
				button: '0px -12px 22px rgba(168, 168, 168, 0.25)',
				'product-menu': '0px 3px 18px 2px rgba(146, 146, 146, 0.25)',
				variant: '0px 4px 28px rgba(137, 119, 119, 0.25)',
			},
			transitionProperty: {
				'top': 'top',
				'height': 'height',
			},
		},
	},
	variants: {
		extend: {
			ringColor: ['active'],
			ringOffsetColor: ['active'],
			ringOffsetWidth: ['active'],
			ringOpacity: ['active'],
			ringWidth: ['active'],
			flex: ['first'],
			width: ['last'],
			padding: ['first'],
			margin: ['last'],
			backgroundImage: ['hover'],
			gradientColorStops: ['hover'],
			borderWidth: ['last', 'hover'],
			textColor: ['last'],
			fill: ['hover'],
		}
	},
	plugins: [
		require('@tailwindcss/line-clamp'),
	]
};
