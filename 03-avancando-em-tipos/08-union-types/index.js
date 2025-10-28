function showBalance(balance) {
    console.log("O saldo da conta \u00E9 de R$".concat(balance));
}
showBalance(100);
showBalance("500");
var arr2 = [1, "teste"];
// AVANÇANDO EM UNION TYPES
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuário não aprovado!";
    }
    return "A fun\u00E7\u00E3o do usu\u00E1rio \u00E9: ".concat(role);
}
console.log(showUserRole(true));
console.log(showUserRole("Admin"));
