// ultra light test

let currency = require('../controllers/currencyController');
const mocha = require('mocha');
const chai = require('chai');
const expect = chai.expect;

describe('Currency', () => {
  it('should return 0', () => {
    expect(currency.convertCurrency({currency: "euros", convertTo: "dollars", value: 0})).to.equal(0);
  });
});