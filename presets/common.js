const colors = {
	inherit: 'inherit',
	white: '#ffffff',
	black: '#000000',
	blue: {
		DEFAULT: '#1D87BB',
		light: '#25A0DD',
		medium: '#7B61FF',
		dark: '#10223E',
	},
	orange: {
		DEFAULT: '#F79E00',
		light: '#F3D470',
	},
	yellow: {
		DEFAULT: '#F3D470',
		light: '#FFF9E2',
	},
	gray: {
		DEFAULT: '#7C7C7C',
		dark: '#333333',
		light: '#B5B5B5',
		card: '#F9F9F9',
		border: '#DEDEDE',
		bg: '#F3F3F3',
		'gradient-from': '#F0F0F0',
		'gradient-to': '#F7F7F7',
	},
	green: {
		DEFAULT: '#57A54A',
		light: '#B8CE01',
	},
	red: '#F44336',
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
				xxs: ['8px', '10px'],
				xs: ['10px', '12px'],
				sm: ['12px', '14px'],
				base: ['14px', '18px'],
				lg: ['16px', '22px'],
				xl: ['18px', '22px'],
				'2xl': ['20px', '24px'],
				'3xl': ['22px', '26px'],
				'4xl': ['24px', '32px'],
				'5xl': ['30px', '42px'],
				'6xl': ['82px', '82px'],
			},
			width: {
				modal: '435px',
				layer: '676px',
			},
			minWidth: {
				menuItem: '9rem',
				size: '4rem',
			},
			maxWidth: {
				'word': '15ch',
			},
			height: {
				'2px': '2px',
			},
			minHeight: {
				upgrade: '4rem',
			},
			maxHeight: {
				layer: '80vh',
			},
			spacing: {
				'4/3': '116.667%',
				'10/7': '142.857%',
				'4/5': '80%',
				'7/8': '87.5%',
				full: '100%',
			},
			boxShadow: {
				lg: '0px 4px 28px rgba(137, 119, 119, 0.25)',
				top: '0px -12px 22px rgba(168, 168, 168, 0.25)',
			},
			transitionProperty: {
				'top': 'top',
				'height': 'height',
				'background': 'background',
			},
			borderRadius: {
				DEFAULT: '6px',
				lg: '8px',
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
			borderWidth: ['last', 'hover'],
			textColor: ['last'],
			fill: ['hover'],
		}
	},
	plugins: [
		require('@tailwindcss/line-clamp'),
	]
};
