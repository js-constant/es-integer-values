const { negativeInfinity } = require("infinities")
const divide = require("lodash.divide")
const one = require("integer-value-positive-one")

module.exports = divide(one(), negativeInfinity())