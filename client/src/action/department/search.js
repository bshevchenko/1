import {
	SEARCH_DEPARTMENT_REQUEST,
	SEARCH_DEPARTMENT_SUCCESS,
	SEARCH_DEPARTMENT_FAILURE
} from './../../constant';
import DepartmentService from './../../service/department';

export const searchDepartmentRequest = () => {
	return {
		type: SEARCH_DEPARTMENT_REQUEST
	};
};

export const searchDepartmentSuccess = (response) => {
	return {
		type: SEARCH_DEPARTMENT_SUCCESS,
		response
	};
};

export const searchDepartmentFailure = (response) => {
	return {
		type: SEARCH_DEPARTMENT_FAILURE,
		response
	};
};

export default () => {
	return (dispatch, getState) => {
		dispatch(searchDepartmentRequest());
		DepartmentService.search().then((response) => {
			dispatch(searchDepartmentSuccess(response));
		}).catch((response) => {
			dispatch(searchDepartmentFailure(response));
		});
	};
};