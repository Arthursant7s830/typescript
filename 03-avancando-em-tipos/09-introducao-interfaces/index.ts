interface Point {
    x: number
    y: number
    z: number
}

function showCoords(obj: Point) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`)
}

const coordObj = {
    x: 10,
    y: 15,
    z: 34
}

showCoords(coordObj)

// TYPE ALIAS X INTERFACE

interface Person {
    name: string
}

interface Person {
    age: number
}

const somePerson: Person = { name: "Arthur", age: 21 }

console.log(somePerson)

type personType = {
    name: string
}
 