const express = require('express');
const router = express.Router();
const units = require('../controllers/unitsController');

router.get('/', units.renderUnits);

router.get('/exists/:unit', units.checkUnit);


router.all('*', (req, res) => {
	res.status(404).send('404 - Not Found');
});

module.exports = router;