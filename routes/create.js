const crypto = require('node:crypto')
const { newConnection, newLinkModel } = require('../models');
const express = require('express');
require('ejs');
var router = express.Router();



function isValidUrl(url) {
	const urlPattern = new RegExp(
		'^(https?:\\/\\/)?' + // optional protocol
		'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
		'((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
		'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
		'(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
		'(\\#[-a-z\\d_]*)?$', 'i' // fragment locator
	);
	return urlPattern.test(url);
}


async function checkifExist(url, model) {
	const object = await model.findOne({
		where: {
			url
		}
	});

	return object;

}

async function createLink(url, model) {
	const key = crypto.randomBytes(3).toString('base64url');;
	try {

		await model.create({
			'key': key,
			'url': url
		})

		return key;

	} catch (err) {
		console.log(err);
		return null;
	}
}

router.get('/c', async (req, res) => {

	const url = new URL(req.url, "http://example.com")
		.searchParams
		.get('url');

	if (!isValidUrl(url)) {

		res.render('index.ejs', {
			link: false,
			snuck: true
		})

		return;
	}
	
	const sequelize = await newConnection();

	const model = await newLinkModel(sequelize);

	var key;
	const object = await checkifExist(url, model);

	if (object !== null) {
		key = object.key;
	} else {
		key = await createLink(url, model);
	}

	if (!key) {
		res.send("An error has Occurred, Check logs.");
		return;
	}

	res.render('index.ejs', {
		link: true,
		key: key
	})
});


module.exports = router;