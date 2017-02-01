import db from './../../model';

export default (req, res, next) => {
	db.models.Department.findAll().then((departments) => {
		res.json(departments);
	}).catch(next);
};