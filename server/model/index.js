import sequelize  from 'sequelize';

var db = new sequelize('postgres://postgres@localhost:5432/1', {
	dialect: 'postgres',
	// logging: false
});

db.import('./department');

Object.keys(db.models).forEach((modelName) => {
	let model = db.models[modelName];
	model.hasOwnProperty('associate') && model.associate(db.models);
});

export default db;