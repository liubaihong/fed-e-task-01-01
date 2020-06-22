const fp = require("lodash/fp")
const cars = require("./part1-01-02-02")

let isLastInStock = fp.flowRight(fp.prop("in_stock"), fp.last)

console.log(isLastInStock(cars))