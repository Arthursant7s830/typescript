const p = document.getElementById("some-p")

console.log(p!.innerText)

// BIGINT

const num: bigint = 1000n

console.log(typeof num)
console.log(num)
 
// SYMBOL 

let symbolA: symbol = Symbol("a")
let symbolB = Symbol("b")

console.log(symbolA == symbolB)
console.log(symbolA === symbolB)