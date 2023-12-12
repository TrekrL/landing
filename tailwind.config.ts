import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		fontSize: {
			xs: '12px',
			sm: '14px',
			base: '16px',
			lg: '18px',
			'2xl': '24px',
			'3xxl': '32px',
		},
		borderWidth: {
			'0': '0px',
			'1': '1px',
			'5': '5px',
		},
		extend: {
			borderRadius: {
				MOBILE: '40px',
			},
			fontSize: {
				'28': '28px',
				'32': '32px',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'hero-background': 'linear-gradient(180deg, rgba(16, 19, 26, 0.00) 0%, #10131A 100%), url(/bg.png)',
			},
			colors: {
				'custom-gray': '#8A8C94',
				'custom-white': '#F2F3F4',
				'custom-light-gray': '#DBDEE3',
				'custom-midnight': '#1F2430',
				'custom-midnight-blue': '#252A37',
				'custom-midnight-indigo': '#1F2633',
				'custom-grayish-blue': '#171A21',
				'custom-medium-blue': '#536DFE',
				'custom-dark-navy': '#0F1418',
			},
			maxWidth: {
				'8': '8px',
				'148': '148px',
				'442': '470px',
				'470': '470px',
				'954': '954px',
				'1440': '1440px',
			},
			minWidth: {
				'400': '400',
			},
			minHeight: {
				'148': '148px',
			},
			spacing: {
				'72': '72px',
				'78': '78px',
				'133': '133px',
				hero: 'calc(2rem + (60 - 2) * ((100vh - 320px) / (1440 - 320)*4))',
			},
			flex: {
				'32': '0 0 32px',
			},
		},
	},
	plugins: [],
};
export default config;
