import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import department from './department';

export default combineReducers({
	routing,
	department
});