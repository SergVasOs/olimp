const colors = {
	transparent: 'transparent',
	inherit: 'inherit',
	white: '#ffffff',
	black: '#000000',
	blue: {
		DEFAULT: '#287DE0',
		dark: '#022F47',
	},
	orange: {
		DEFAULT: '#F79E00',
	},
	yellow: {
		DEFAULT: '#F3D470',
		dark: '#FFC531',
		light: '#FFF9E2',
	},
	gray: {
		DEFAULT: '#7C7C7C',
		dark: '#333333',
		light: '#B5B5B5',
		card: '#F9F9F9',
		border: '#DEDEDE',
		'border-light': '#F3F3F3',
		'gradient-from': '#F0F0F0',
		'gradient-to': '#F7F7F7',
	},
	green: {
		DEFAULT: '#57A54A',
		dark: '#539269',
		light: '#B8CE01',
	},
	red: {
		DEFAULT: '#F44336',
		dark: '#df5951',
	},
};

module.exports = {
	purge: [
		'./dist/*.html',
		'./dist/*.css',
	],
	darkMode: false,
	theme: {
		extend: {
			screens: {
				'xl': '1200px',
				'2xl': '1440px',
			},
			container: {
				padding: '1rem',
			},
			color: colors,
			gradientColorStops: colors,
			backgroundColor: colors,
			placeholderColor: colors,
			borderColor: {
				...colors,
				light: colors.gray['border-light'],
				DEFAULT: colors.gray['border'],
			},
			textColor: colors,
			ringColor: colors,
			stroke: colors,
			fill: colors,
			fontFamily: {
				sans: ['Roboto', 'sans-serif'],
			},
			fontSize: {
				xs: ['10px', '12px'],
				sm: ['12px', '14px'],
				base: ['14px', '18px'],
				lg: ['16px', '22px'],
				xl: ['18px', '22px'],
				'2xl': ['20px', '24px'],
				'3xl': ['22px', '26px'],
				'4xl': ['24px', '32px'],
				'5xl': ['30px', '42px'],
				'6xl': ['36px', '42px'],
				'7xl': ['75px', '87px'],
			},
			width: {
				22: '5.5rem',
				30: '7.5rem',
				38: '9.5rem',
				50: '12.5rem',
				104: '26rem',
				'small-dot': '4px',
				'popup-xl': '1200px',
				'popup-lg': '840px',
				'popup-sm': '435px',
				popup: '676px',
			},
			minWidth: {
				size: '4rem',
				'screen-xl': '1200px',
			},
			maxWidth: {
				'popup': '90vw',
				'word': '15ch',
			},
			height: {
				'2px': '2px',
				22: '5.5rem',
				'small-dot': '4px',
				'popper': 'calc(100vh - 5rem)',
			},
			maxHeight: {
				popup: '80vh',
			},
			spacing: {
				'2px': '2px',
				'3px': '3px',
				'13': '3.25rem',
				'3/10': '30%',
				'1/2': '50%',
				'3/4': '75%',
				'4/3': '133.3333%',
				18: '4.5rem',
				scrollbar: '15px',
				full: '100%',
			},
			inset: {
				'-screen': '-100vh',
				'-22': '-5.5rem',
				34: '8.5rem',
			},
			boxShadow: {
				DEFAULT: '0px 2px 6px rgba(0, 0, 0, 0.1)',
				lg: '0px 4px 28px rgba(137, 119, 119, 0.25)',
				top: '0px -12px 22px rgba(168, 168, 168, 0.25)',
			},
			dropShadow: {
				DEFAULT: '0px 2px 6px rgba(0, 0, 0, 0.1)',
			},
			transitionProperty: {
				'top': 'top',
				'height': 'height',
				'background': 'background',
			},
			borderRadius: {
				DEFAULT: '6px',
				lg: '8px',
				circle: '50%',
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
			flex: ['first', 'last'],
			width: ['first', 'last'],
			padding: ['first', 'last'],
			margin: ['last', 'first'],
			inset: ['last', 'first'],
			backgroundImage: ['hover'],
			gradientColorStops: ['hover'],
			borderWidth: ['first', 'last', 'hover'],
			borderColor: ['active'],
			textColor: ['last'],
			fill: ['hover'],
		}
	},
	plugins: [
		require('@tailwindcss/line-clamp'),
	]
};

