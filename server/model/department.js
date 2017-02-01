export default (sequelize, DataTypes) => {
	return sequelize.define('Department', {
		name: DataTypes.TEXT
	}, {
		tableName: 'department',
		timestamps: false
	});
};