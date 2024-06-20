import {
	ListItem,
	ListItemAvatar,
	Avatar,
	ListItemText,
	Typography,
	ListItemButton
} from '@mui/material'
import { Close } from '@mui/icons-material'
import setColor from '../../utils/setColor'

import { bgGradient } from '../../theme'

const HeroesListItem = ({ name, description, element, onDelete }) => {
	return (
		<ListItem
			alignItems='flex-start'
			sx={{
				backgroundImage: bgGradient,
				boxShadow: '3',
				height: '150px',
				backgroundColor: setColor(element),
				padding: '10px',
				marginBottom: '25px',
				borderRadius: '5px',
				position: 'relative'
			}}
		>
			<ListItemAvatar sx={{ height: '100%', width: '140px', margin: 0 }}>
				<Avatar
					alt='unknown-hero'
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1200px-Unknown_person.jpg'
					variant='square'
					sx={{ width: '100%', height: '100%' }}
				></Avatar>
			</ListItemAvatar>
			<ListItemText
				sx={{ margin: '0px 0px 0px 20px' }}
				primary={
					<Typography sx={{ marginBottom: '0.5rem' }} variant='h3'>
						{name}
					</Typography>
				}
				secondary={
					<Typography component='p' variant='body1'>
						{description}
					</Typography>
				}
			></ListItemText>
			<ListItemButton
				sx={{
					width: '25px',
					height: '25px',
					padding: 0,
					position: 'absolute',
					right: '-10px',
					top: '-10px',
					backgroundColor: 'white',
					border: '1px solid rgba(0, 0, 0, 0.7)',
					borderRadius: '10px',
					transition: '0.5s all',
					'&:hover': {
						transform: 'scale(1.2)',
						backgroundColor: 'white'
					}
				}}
				onClick={onDelete}
			>
				<Close></Close>
			</ListItemButton>
		</ListItem>
	)
}

export default HeroesListItem
