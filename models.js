// const { Sequelize } = require("sequelize");
const { Sequelize, DataTypes } = require("sequelize");
require('dotenv').config();

// Initializing connectoin
async function newConnection(){
	
	const intance = new Sequelize(
		process.env.DIRECT_URL,
		{
			logging: false,
			freezeTableName: true,      // Model name == Table name
		},
	);

	try {
		await intance.authenticate();
	} catch (error) {
		console.error("DB Connection failed: ", error);
	}
	
	return intance;
}


async function newLinkModel(sequelize){
	// const { DataTypes } = require("sequelize");

	const model = sequelize.define(
	
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

		// options
		{
			timestamps: false,
		}
	);

	try {
		await model.sync();
	} catch (error) {
		console.error("DB Model Sync Failed: ", error);
	}


	return model;
}




module.exports = {
	newConnection,
	newLinkModel
};