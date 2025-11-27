// 1 - TYPE GUARD
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
//2-CHECANDO VALOR SE VALOR EXISTE
function operations(arr, operation) {
    if (operation === "sum") {
        var sum_1 = arr.reduce(function (i, total) { return i + total; });
    }
    else if (operation === "multiply") {
        var multiply = arr.reduce(function (i, total) { return i * total; });
    }
    else {
        console.log("Por favor, defina uma operação");
    }
}
operations([1, 12, 3]);
operations([1, 12, 3], "sum");
operations([1, 12, 3], "multiply");
// 3-INSTANCEOFF
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var SuperUser = /** @class */ (function (_super) {
    __extends(SuperUser, _super);
    function SuperUser(name) {
        return _super.call(this, name) || this;
    }
    return SuperUser;
}(User));
var Arthur = new User("Arthur");
var Paul = new SuperUser("Paul");
console.log(Arthur);
console.log(Paul);
