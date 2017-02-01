import db from './../../model';

export default (req, res, next) => {
	db.models.Department.create(req.body).then((department) => {
		res.json(department);
	}).catch((err) => {
		err.name === 'SequelizeUniqueConstraintError' && ~Object.keys(err.fields).indexOf('name')
			? res.status(400).json({ code: 'DEPARTMENT_NAME_ALREADY_TAKEN' })
			: next(err);
	});
};