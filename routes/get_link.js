const { newConnection, newLinkModel } = require('../models');
var express = require('express');
var router = express.Router();


router.get(/^(?!\/c\/?$).+/, async (req, res) => {
	const sequelize = await newConnection();

	const link = await newLinkModel(sequelize);
	
	const key = req.path.slice(1);
	try {

		const object = await link.findOne({
			where: {
				key: key
			}
		})
		
		if (object == null){
			res.send('No URL in the database matches this link.');
			return;
		}
		sequelize.close();
		
		res.render('middle.ejs', {
			url: object.url,
			seconds: 5
		})
		
	} catch (e) {
		console.log(e);
		sequelize.close();
		res.send('An Error occurred, try again later.')
	}
});


module.exports = router