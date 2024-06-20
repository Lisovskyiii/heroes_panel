import { createTheme } from '@mui/material'

export const red = '#f44336',
	green = '#4caf50',
	blue = '#2196f3',
	gray = '#9e9e9e',
	black = '#212121',
	orange = '#ff9800',
	bgGradient =
		'linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))'

const theme = createTheme({
	typography: {
		allVariants: {
			fontFamily: ['Roboto', 'sans-serif'].join(',')
		},
		h3: {
			fontSize: 'calc(1.3rem + 0.6vw)',
			fontWeight: 500,
			lineHeight: 1.2,
			color: '#ffff'
		},
		h5: {
			fontSize: '1rem',
			fontWeight: 500,
			lineHeight: 1.2,
			color: '#000'
		},
		body1: {
			fontSize: '1rem',
			lineHeight: 1.5,
			color: '#fff'
		}
	}
})

export default theme
