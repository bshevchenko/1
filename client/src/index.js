import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Router, Route, Redirect, IndexRoute } from 'react-router';
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLoggerMiddleware from 'redux-logger';
import { routerMiddleware as createRouterMiddleware, syncHistoryWithStore } from 'react-router-redux';

import reducer from './reducer';

import App from './component/app';
import Home from './component/app/home'
import DepartmentSearch from './component/app/department/search';
import DepartmentCreate from './component/app/department/create';
import DepartmentReview from './component/app/department/review';
import DepartmentUpdate from './component/app/department/update';

const store = createStore(
	reducer,
	applyMiddleware(
		createRouterMiddleware(browserHistory),
		thunkMiddleware,
		createLoggerMiddleware()
	)
);

const history = syncHistoryWithStore(browserHistory, store);

render(
	<Provider store={ store }>
		<Router history={ history }>
			<Route path='/' component={ App } >
				<IndexRoute component={ Home } />
				<Route path='department/search' component={ DepartmentSearch } />
				<Route path='department/create' component={ DepartmentCreate } />
				<Route path='department/review/:id' component={ DepartmentReview } />
				<Route path='department/update/:id' component={ DepartmentUpdate } />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
);
