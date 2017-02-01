import {
	REVIEW_DEPARTMENT_REQUEST,
	REVIEW_DEPARTMENT_SUCCESS,
	REVIEW_DEPARTMENT_FAILURE
} from './../../constant';
import DepartmentService from './../../service/department';

export const reviewDepartmentRequest = () => {
	return {
		type: REVIEW_DEPARTMENT_REQUEST
	};
};

export const reviewDepartmentSuccess = (response) => {
	return {
		type: REVIEW_DEPARTMENT_SUCCESS,
		response
	};
};

export const reviewDepartmentFailure = (response) => {
	return {
		type: REVIEW_DEPARTMENT_FAILURE,
		response
	};
};

export default (id) => {
	return (dispatch, getState) => {
		dispatch(reviewDepartmentRequest());
		DepartmentService.review(id).then((response) => {
			dispatch(reviewDepartmentSuccess(response));
		}).catch((response) => {
			dispatch(reviewDepartmentFailure(response));
		});
	};
};