const express = require('express');
const router = express.Router();
const temperature = require('../controllers/temperatureController');
const currency = require('../controllers/currencyController');

router.post('/temperature', temperature.convertTemperature);

router.post('/currency', currency.convertCurrency);

router.all('*', (req, res) => {
	res.status(404).send('404 - Not Found');
});

module.exports = router;