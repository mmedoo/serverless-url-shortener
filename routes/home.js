var express = require('express');
var router = express.Router();
require('ejs');

router.get('/', (req, res) => {
	res.render('index.ejs', {
		link: false,
		snuck: false
	})
});


module.exports = router;