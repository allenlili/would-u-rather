import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { green, indigo } from "@material-ui/core/colors/index";
import { createMuiTheme } from "@material-ui/core/styles/index";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducer';
import thunk from 'redux-thunk';

const theme = createMuiTheme({
	palette: {
		primary: green,
		secondary: indigo,
		type: "light",
	}
});

const store = createStore(reducers, compose(
	applyMiddleware(thunk),
	window.devToolsExtension? window.devToolsExtension():f=>f)
);

const root = document.getElementById('root');
ReactDOM.render(
	<Provider store={store}>
		<MuiThemeProvider theme={theme}>
			<BrowserRouter>
				<App/>
			</BrowserRouter>
		</MuiThemeProvider>
	</Provider>,
	root
);
