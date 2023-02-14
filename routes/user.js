const express = require('express');
const router = express.Router();
const user = require('../controllers/userController');


router.post('/login', user.login);

router.all('*', (req, res) => {
	res.status(404).send('404 - Not Found');
});

module.exports = router;