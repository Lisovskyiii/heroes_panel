import { useHttp } from '../../hooks/useHttp'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Skeleton, Typography, Button, ButtonGroup, Box } from '@mui/material'
import store from '../../store/store'
import setColor from '../../utils/setColor'

import {
	filtersChanged,
	fetchFilters,
	selectAll
} from '../../store/slices/filtersSlices'
import { bgGradient } from '../../theme'

const HeroesFilters = () => {
	const { filtersLoadingStatus, activeFilter } = useSelector(
		state => state.filters
	)
	const filters = selectAll(store.getState())
	const dispatch = useDispatch()
	const { request } = useHttp()

	useEffect(() => {
		dispatch(fetchFilters(request))

		// eslint-disable-next-line
	}, [])

	if (filtersLoadingStatus === 'loading') {
		return <Skeleton height='100px' animation='wave'></Skeleton>
	} else if (filtersLoadingStatus === 'error') {
		return <h5 className='text-center mt-5'>Ошибка загрузки</h5>
	}

	const renderFilters = arr => {
		if (arr.length === 0) {
			return <h5 className='text-center mt-5'>Фильтры не найдены</h5>
		}

		return arr.map(({ name, id, label }) => {
			const btnActive =
				activeFilter === name ? { filter: 'brightness(0.85)' } : null
			return (
				<Button
					key={name}
					id={id}
					onClick={() => dispatch(filtersChanged(name))}
					sx={{
						...btnActive,
						backgroundColor: setColor(name),
						backgroundImage: bgGradient,
						'&:hover': {
							filter: 'brightness(0.85)',
							backgroundColor: setColor(name)
						}
					}}
				>
					{label}
				</Button>
			)
		})
	}

	const elements = renderFilters(filters)

	return (
		<Box
			sx={{ padding: '1rem 1rem', mt: '1.5rem', borderRadius: '5px' }}
			boxShadow={2}
		>
			<Typography sx={{ marginBottom: '1rem' }} variant='h5'>
				Отфильтруйте героев по элементам
			</Typography>
			<ButtonGroup
				variant='contained'
				sx={{
					maxWidth: '100%',
					'.MuiButtonGroup-middleButton, .MuiButtonGroup-firstButton, .MuiButtonGroup-lastButton':
						{
							borderColor: 'transparent'
						}
				}}
				aria-label='Basic button group'
			>
				{elements}
			</ButtonGroup>
		</Box>
	)
}

export default HeroesFilters
