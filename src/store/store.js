import { configureStore } from '@reduxjs/toolkit'

import heroes from './slices/heroesSlices'
import filters from './slices/filtersSlices'

const stringMiddleware = () => next => action => {
	if (typeof action === 'string') {
		return next({
			type: action
		})
	}
	return next(action)
}

const store = configureStore({
	reducer: { heroes, filters },
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(stringMiddleware),
	devTools: import.meta.env.NODE_ENV !== 'production'
})

export default store
