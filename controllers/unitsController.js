const express = require("express");

const units = {
	renderUnits: (req, res) => {
		res.send(JSON.stringify({
			temperature : ["celsius", "farenheit"],
			currency: ["dollars", "euros"] }
		));
	},
	checkUnit: (req, res) =>{
		let checkedUnit = req.params.unit
		let unitExist
		switch (checkedUnit) {
			case "celsius" :
			case "farenheit" :
			case "dollars" :
			case "euros" :
			 unitExist = true
			break
			default :
				unitExist = false
		}
		if (unitExist){
			res.send(JSON.stringify({
				message: `l'unité de conversion ${checkedUnit} est prise en charge`
			}
			));
		} else {
			res.send(JSON.stringify({
				message: `l'unité de conversion ${checkedUnit} n'est pas prise en charge`
			}))
		}
	},
};

module.exports = units;