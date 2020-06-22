const A = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const a = " hello "
            resolve(a)
        }, 10)
    })
},
B = (a) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const b = " lagou "
            resolve([a, b])
        }, 10) 
    })
},
C = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const c = " I ❤  U "
            resolve([a, b, c])
        }, 10) 
    })
}

A().then(a => {
    return B(a)
}).then(([a, b]) => { 
    return C(a, b)
}).then(([a, b, c]) => {
    console.log(a + b + c)
})