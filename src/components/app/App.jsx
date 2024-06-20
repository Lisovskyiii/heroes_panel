import { Grid } from '@mui/material'

import HeroesList from '../HeroesList'
import HeroesAddForm from '../HeroesAddForm'
import HeroesFilters from '../HeroesFilters'
import img from '../../assets/img/hero_bg.jpg'

const App = () => {
	return (
		<main
			style={{
				height: '100vh',
				background: `url(${img}) center / cover no-repeat`,
				overflow: 'auto'
			}}
		>
			<Grid container maxWidth={'1040px'} sx={{ margin: '50px auto 0px auto' }}>
				<Grid item md={6.5}>
					<HeroesList></HeroesList>
				</Grid>
				<Grid item md={5} style={{ paddingLeft: '50px' }}>
					<HeroesAddForm></HeroesAddForm>
					<HeroesFilters></HeroesFilters>
				</Grid>
			</Grid>
		</main>
	)
}

export default App
