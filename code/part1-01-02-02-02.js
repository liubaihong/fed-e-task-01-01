const fp = require("lodash/fp")
const cars = require("./part1-01-02-02")

let isLastInStock = fp.flowRight(fp.prop("name"), fp.first)

console.log(isLastInStock(cars))