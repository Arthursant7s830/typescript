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

//2-CHECANDO VALOR SE VALOR EXISTE
function operations(arr: number[], operation?: string | undefined) {
    if (operation === "sum") {
        const sum = arr.reduce((i, total) => i + total)

    } else if (operation === "multiply") {
        const multiply = arr.reduce((i, total) => i * total)


    } else {
        console.log("Por favor, defina uma operação")
    }
}

operations([1, 12, 3])
operations([1, 12, 3], "sum")
operations([1, 12, 3], "multiply")

// 3-INSTANCEOFF
class User {
    name

    constructor(name: string) {
        this.name = name
    }
}

class SuperUser extends User {
    constructor(name: string) {
        super(name)
    }
}

const arthur = new User("Arthur")
const paul = new SuperUser("Paul")

console.log(arthur)
console.log(paul)

function userGreeting(user: object) {
    if(user instanceof SuperUser) {
        console.log(`Olá ${user.name}`)

    } else (user instanceof User) {
        console.log(`Olá ${user.name}`)
    }
}

userGreeting(arthur)
userGreeting(paul)