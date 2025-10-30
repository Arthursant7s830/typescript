interface Point {
    x: number
    y: number
    z: number
}

function showCoords(obj:Point) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`)
}
 
const coordObj = {
    x: 10,
    y: 15,
    z: 34
}

showCoords(coordObj)