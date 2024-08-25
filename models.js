const { Sequelize , DataTypes } = require("sequelize");
require('dotenv').config();


// Initializing connectoin

const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: "./database.db",
	logging: false,
	freezeTableName: true,      // Model name == Table name
	timestamps: false
});


// Defining "links" model

const link = sequelize.define(

	// Model name
	'links',

	// Columns
	{
		key: {
			type: DataTypes.STRING,
			allowNull: false
		},
		url: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}
);


(async () => {
	try {
		
		// Testing connection
		await sequelize.authenticate();
		
		// Syncing table with database
		await link.sync({
			force: process.env.FORCE_DROP | false,         // Forcing drop table before creation
		});

	} catch (e) {
		console.log(e);
	}
})();



module.exports = {
	link
};