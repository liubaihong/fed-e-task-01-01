const fp = require("lodash/fp")
const cars = require("./part1-01-02-02")

let _average = function (xs) {
    return fp.reduce(fp.add, 0, xs)
}

let averageDollarValue = fp.flowRight(_average, fp.map(fp.prop("dollar_value")))

console.log(averageDollarValue(cars))

