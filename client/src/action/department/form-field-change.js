import { DEPARTMENT_FORM_FIELD_CHANGE } from './../../constant';

export default (field, value) => {
	return {
		type: DEPARTMENT_FORM_FIELD_CHANGE,
		field,
		value
	};
};