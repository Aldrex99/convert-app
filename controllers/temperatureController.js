const temperature = {
	convertTemperature: (req, res) => {
		const {unit, convertTo, value} = req.body;
		let result = 0;
		if (unit === "celsius" && convertTo === "farenheit") {
			result = value * 9 / 5 + 32;
		} else if (unit === "farenheit" && convertTo === "celsius") {
			result = (value - 32) * 5 / 9;
		}
		res.send(JSON.stringify({result}));
	}
}

module.exports = temperature;
