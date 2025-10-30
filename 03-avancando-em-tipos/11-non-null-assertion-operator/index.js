var p = document.getElementById("some-p");
console.log(p.innerText);
// BIGINT
var num = 1000n;
console.log(typeof num);
console.log(num);
// SYMBOL 
var symbolA = Symbol("a");
var symbolB = Symbol("b");
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
