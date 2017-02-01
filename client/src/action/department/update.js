import {
	UPDATE_DEPARTMENT_REQUEST,
	UPDATE_DEPARTMENT_SUCCESS,
	UPDATE_DEPARTMENT_FAILURE
} from './../../constant';
import DepartmentService from './../../service/department';
import { push } from 'react-router-redux';

export const updateDepartmentRequest = () => {
	return {
		type: UPDATE_DEPARTMENT_REQUEST
	};
};

export const updateDepartmentSuccess = (response) => {
	return {
		type: UPDATE_DEPARTMENT_SUCCESS,
		response
	};
};

export const updateDepartmentFailure = (response) => {
	return {
		type: UPDATE_DEPARTMENT_FAILURE,
		response
	};
};

export default () => {
	return (dispatch, getState) => {
		dispatch(updateDepartmentRequest());
		const { id, name } = getState().department.update;

		DepartmentService.update({ id, name }).then((response) => {
			dispatch(updateDepartmentSuccess(response));
			dispatch(push('/department/search'));
		}).catch((response) => {
			dispatch(updateDepartmentFailure(response));
		});
	};
};