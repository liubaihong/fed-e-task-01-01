const fp = require("lodash/fp")
const {Maybe, Container} = require("./part1-01-02-03")
const { add } = require("lodash")

let maybe = Maybe.of([5, 6, 1])

let ex1 = (x) => {
    return maybe.map(fp.map(y => fp.add(x, y)))
}

console.log(ex1(2))