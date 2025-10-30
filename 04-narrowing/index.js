"use strict";
// 1 - TYPE GUARD
Object.defineProperty(exports, "__esModule", { value: true });
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log("Impossível realizar a soma");
    }
}
sum("1", "2");
sum(12, 1.23);
sum("5", 4);
//# sourceMappingURL=index.js.map