const { link } = require('../models');
var express = require('express');
var router = express.Router();


router.get(/^(?!\/c\/?$).+/, async (req, res) => {
	
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
		
		res.render('middle.ejs', {
			url: object.url,
			seconds: 5
		})
		
	} catch (e) {
		console.log(e);
		res.send('An Error occurred, try again later.')
	}
});


module.exports = router