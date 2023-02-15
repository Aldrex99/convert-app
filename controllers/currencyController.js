const currency = {
	convertCurrency: (req, res) => {
		const {currency, convertTo, value} = req.body;
		let result = 0;
		const dollarEgalEuro = 0.94;
		const euroEgalDollar = 1.07;
		if (currency === "euros" && convertTo === "dollars") {
			result = value * euroEgalDollar
		} else if (currency === "dollars" && convertTo === "euros") {
			result = value * dollarEgalEuro
		}
		res.send(JSON.stringify({result}));
    return result;
	}
}

module.exports = currency;
