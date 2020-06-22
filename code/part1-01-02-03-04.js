const fp = require("lodash/fp")
const {Maybe, Container} = require("./part1-01-02-03")

let ex4 = function(n){
    return Maybe.of(n).map(val => {
        return parseInt(val)
    })._value
}

console.log(ex4(4.222))