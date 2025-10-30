// 1 - TYPE GUARD

function sum(a: number | string, b: number | string) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b))
    } else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b)
    } else {
        console.log("Impossível realizar a soma")
    }

}

sum("1", "2")
sum(12, 1.23)
sum("5", 4)
