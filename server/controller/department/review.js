import db from './../../model';

export default (req, res, next) => {
	db.models.Department.findById(req.params.id).then((department) => {
		department
			? res.json(department)
			: res.sendStatus(404)
	}).catch(next);
};