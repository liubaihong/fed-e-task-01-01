const fp = require("lodash/fp")
const {Maybe, Container} = require("./part1-01-02-03")

let safeProp = fp.curry(function (x, o){
    return Maybe.of(o[x])
})

let user = {id: 2, name: "Albert"}

let ex3 = () => {
    return safeProp("name")(user).map(val => {
        return fp.first(val)
    })._value
}

console.log(ex3())