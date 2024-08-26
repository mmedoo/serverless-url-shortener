var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
	express().set('view engine', 'ejs');
	res.render('index.ejs', {
		link: false,
		snuck: false
	})
});


module.exports = router;