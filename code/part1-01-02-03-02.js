const fp = require("lodash/fp")
const {Maybe, Container} = require("./part1-01-02-03")

let xs = Container.of(["do", "ray", "me", "fa", "so", "la", "ti", "do"])

let ex2 = () => {
    return xs.map(fp.first)._value
}

console.log(ex2())