import $ from 'jquery';

export default {

	search: () => {
		return $.get('http://localhost:8090/department');
	},

	review: (id) => {
		return $.get(`http://localhost:8090/department/${ id }`);
	},

	create: (department) => {
		return $.post('http://localhost:8090/department', department);
	},

	update: (department) => {
		return new Promise((resolve, reject) => {
			$.ajax({
				url: `http://localhost:8090/department/${ department.id }`,
				type: 'PUT',
				data: department,
				success: resolve,
				error: reject
			});
		});
	}

};