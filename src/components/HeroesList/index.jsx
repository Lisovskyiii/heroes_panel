import { useHttp } from '../../hooks/useHttp'
import { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Typography, Skeleton, List } from '@mui/material'

import {
	heroDeleted,
	fetchHeroes,
	filteredHeroesSelector
} from '../../store/slices/heroesSlices'

import HeroesListItem from '../HeroesListItem'

const HeroesList = () => {
	const filteredHeroes = useSelector(filteredHeroesSelector)
	const heroesLoadingStatus = useSelector(
		state => state.heroes.heroesLoadingStatus
	)
	const dispatch = useDispatch()
	const { request } = useHttp()

	useEffect(() => {
		dispatch(fetchHeroes())
		// eslint-disable-next-line
	}, [])

	const onDelete = useCallback(
		id => {
			request(`http://localhost:3002/heroes/${id}`, 'DELETE')
				.then(data => console.log(data, 'Deleted'))
				.then(dispatch(heroDeleted(id)))
				.catch(err => console.log(err))
			// eslint-disable-next-line
		},
		[request]
	)

	if (heroesLoadingStatus === 'loading') {
		return (
			<Skeleton
				animation='wave'
				variant='rectangular'
				sx={{ borderRadius: '10px' }}
				width={'100%'}
				height={150}
			></Skeleton>
		)
	} else if (heroesLoadingStatus === 'error') {
		return (
			<Typography variant='h5' textAlign={'center'} mt={5}>
				Ошибка загрузки
			</Typography>
		)
	}

	const renderHeroesList = arr => {
		if (arr.length === 0) {
			return (
				<Typography variant='h5' textAlign={'center'} mt={5}>
					Героев пока нет
				</Typography>
			)
		}

		return arr.map(({ id, ...props }) => {
			return (
				<HeroesListItem key={id} {...props} onDelete={() => onDelete(id)} />
			)
		})
	}

	const elements = renderHeroesList(filteredHeroes)
	return <List sx={{ width: '100%' }}>{elements}</List>
}

export default HeroesList
