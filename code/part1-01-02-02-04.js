const fp = require("lodash/fp")
const cars = require("./part1-01-02-02")

let _underscore = fp.replace(/\W+/g, "_")

let sanitizeNames = fp.map(fp.flowRight(_underscore, fp.lowerCase))

console.log(sanitizeNames(["Liu Baihong", "Hello World"]))
