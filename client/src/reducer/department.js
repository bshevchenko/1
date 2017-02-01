import { combineReducers } from 'redux';
import {
	SEARCH_DEPARTMENT_SUCCESS,
	CREATE_DEPARTMENT_SUCCESS,
	CREATE_DEPARTMENT_FAILURE,
	REVIEW_DEPARTMENT_SUCCESS,
	UPDATE_DEPARTMENT_SUCCESS,
	UPDATE_DEPARTMENT_FAILURE,
	DEPARTMENT_FORM_FIELD_CHANGE
} from './../constant';

export const search = (state = [], action) => {
	switch (action.type) {
		case SEARCH_DEPARTMENT_SUCCESS:
			return [ ...action.response ];
			break;
		default:
			return state;
	}
};

const CREATE_DEFAULT = { name: '', error: null };
export const create = (state = CREATE_DEFAULT, action) => {
	switch (action.type) {
		case DEPARTMENT_FORM_FIELD_CHANGE:
			return {
				...state,
				[action.field]: action.value
			};
			break;
		case CREATE_DEPARTMENT_SUCCESS:
		case UPDATE_DEPARTMENT_SUCCESS:
			return CREATE_DEFAULT;
			break;
		case CREATE_DEPARTMENT_FAILURE:
			return { 
				...state,
				error: action.response
			};
			break;
		default:
			return state;
	}
};

export const review = (state = { id: null, name: null }, action) => {
	switch (action.type) {
		case REVIEW_DEPARTMENT_SUCCESS:
			return { ...action.response };
			break;
		default:
			return state;
	}
};

const UPDATE_DEFAULT = { id: null, name: null, error: null };
export const update = (state = UPDATE_DEFAULT, action) => {
	switch (action.type) {
		case REVIEW_DEPARTMENT_SUCCESS:
			return { ...action.response };
			break;
		case DEPARTMENT_FORM_FIELD_CHANGE:
			return {
				...state,
				[action.field]: action.value
			};
			break;
		case UPDATE_DEPARTMENT_FAILURE:
			return { 
				...state,
				error: action.response
			};
			break;
		default:
			return state;
	}
};


export default combineReducers({
	search,
	create,
	review,
	update,
});