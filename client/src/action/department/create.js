import {
	CREATE_DEPARTMENT_REQUEST,
	CREATE_DEPARTMENT_SUCCESS,
	CREATE_DEPARTMENT_FAILURE
} from './../../constant';
import DepartmentService from './../../service/department';
import { push } from 'react-router-redux';

export const createDepartmentRequest = () => {
	return {
		type: CREATE_DEPARTMENT_REQUEST
	};
};

export const createDepartmentSuccess = (response) => {
	return {
		type: CREATE_DEPARTMENT_SUCCESS,
		response
	};
};

export const createDepartmentFailure = (response) => {
	return {
		type: CREATE_DEPARTMENT_FAILURE,
		response
	};
};

export default () => {
	return (dispatch, getState) => {
		dispatch(createDepartmentRequest());
		let { name } = getState().department.create;
		DepartmentService.create({ name }).then((response) => {
			dispatch(createDepartmentSuccess(response));
			dispatch(push('/department/search'));
		}).catch((response) => {
			dispatch(createDepartmentFailure(response));
		});
	};
};