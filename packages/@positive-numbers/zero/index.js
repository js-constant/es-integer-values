const dependency = require("zerosurge");
const falseValue = require("false-value")
module.exports = dependency.returnZero({
  loggingEnabled: falseValue,
  method: dependency.ZeroCalculationMethod.RandomNumberSelfSubtraction
}) // Export the number 0
