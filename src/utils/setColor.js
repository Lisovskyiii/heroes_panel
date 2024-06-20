import { red, blue, gray, green, orange } from '../theme'

const setColor = element => {
	let bgColor

	switch (element) {
		case 'fire':
			bgColor = red
			break
		case 'water':
			bgColor = blue
			break
		case 'wind':
			bgColor = gray
			break
		case 'earth':
			bgColor = green
			break
		default:
			bgColor = orange
	}

	return bgColor
}

export default setColor
