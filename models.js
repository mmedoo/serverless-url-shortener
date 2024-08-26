const { Sequelize , DataTypes } = require("sequelize");
require('dotenv').config();
const pg = require('pg');

// Initializing connectoin

function newConnection(){
	
	return new Sequelize(
		process.env.DIRECT_URL,
		{
			logging: false,
			freezeTableName: true,      // Model name == Table name
			dialectModule: pg,
			pool: {
				min: 0,
				max: 5,
				acquire: 30000,
				idle: 5000
			}
		},
	);
}

function newLinkModel(sequelize){

	return sequelize.define(
	
		// Model name
		'nodejs-urls',
	
		// Columns
		{
			key: {
				type: DataTypes.STRING,
				allowNull: false,
				primaryKey: true
			},
			url: {
				type: DataTypes.STRING,
				allowNull: false,
			}
		},
		{
			timestamps: false,
		}
	);
}




module.exports = {
	newConnection,
	newLinkModel
};