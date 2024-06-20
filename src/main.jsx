import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { CssBaseline } from '@mui/material'
import App from './components/app/App.jsx'
import { ThemeProvider } from '@emotion/react'

import theme from './theme.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<CssBaseline>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</CssBaseline>
	</Provider>
)
