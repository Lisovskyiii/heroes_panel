import { useHttp } from '../../hooks/useHttp'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import store from '../../store/store'
import {
	Box,
	Button,
	TextField,
	Select,
	InputLabel,
	FormControl,
	MenuItem,
	styled
} from '@mui/material'

import { selectAll } from '../../store/slices/filtersSlices'
import { heroCreated } from '../../store/slices/heroesSlices'

const OptionStyled = styled(MenuItem)({
	color: 'black'
})

const HeroesAddForm = () => {
	const [heroName, setHeroName] = useState('')
	const [heroDescr, setHeroDescr] = useState('')
	const [heroElement, setHeroElement] = useState('')

	const { filtersLoadingStatus } = useSelector(state => state.filters)
	const filters = selectAll(store.getState())
	const dispatch = useDispatch()
	const { request } = useHttp()

	const onSubmitHandler = e => {
		e.preventDefault()
		const newHero = {
			id: uuidv4(),
			name: heroName,
			description: heroDescr,
			element: heroElement
		}

		request('http://localhost:3002/heroes', 'POST', JSON.stringify(newHero))
			.then(res => console.log(res, 'Отправка успешна'))
			.then(dispatch(heroCreated(newHero)))
			.catch(err => console.log(err))

		setHeroName('')
		setHeroDescr('')
		setHeroElement('')
	}

	const renderFilters = (filters, status) => {
		if (status === 'loading') {
			return <OptionStyled>Загрузка элементов</OptionStyled>
		} else if (status === 'error') {
			return <OptionStyled>Ошибка загрузки</OptionStyled>
		}

		if (filters && filters.length > 0) {
			return filters.map(({ id, name, label }) => {
				// eslint-disable-next-line
				if (name === 'all') return

				return (
					<OptionStyled key={id} value={name}>
						{label}
					</OptionStyled>
				)
			})
		}
	}

	return (
		<Box
			component='form'
			boxShadow={2}
			sx={{ padding: '1.5rem', borderRadius: '5px' }}
			onSubmit={onSubmitHandler}
		>
			<TextField
				value={heroName}
				required
				onChange={e => setHeroName(e.target.value)}
				label='Имя нового героя'
				fullWidth
				id='hero-name'
				sx={{
					mb: '1rem',
					label: {
						color: 'black'
					}
				}}
			></TextField>
			<TextField
				multiline
				required
				fullWidth
				rows={6}
				value={heroDescr}
				label='Описание'
				sx={{
					mb: '1rem',
					label: {
						color: 'black'
					}
				}}
				onChange={e => setHeroDescr(e.target.value)}
			></TextField>

			<FormControl sx={{ marginBottom: '1rem' }} fullWidth>
				<InputLabel required id='hero-element-select' sx={{ color: 'black' }}>
					Выбрать элемент героя
				</InputLabel>
				<Select
					labelId='hero-element-select'
					id='hero-element'
					required
					label='Выбрать элемент героя'
					value={heroElement}
					onChange={e => setHeroElement(e.target.value)}
				>
					<OptionStyled value=''>Я владею элементом...</OptionStyled>
					{renderFilters(filters, filtersLoadingStatus)}
				</Select>
			</FormControl>

			<Button variant='contained' type='submit'>
				Создать
			</Button>
		</Box>
	)
}

export default HeroesAddForm
