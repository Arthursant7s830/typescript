function showBalance(balance: string | number) {
    console.log(`O saldo da conta é de R$${balance}`)
}

showBalance(100)
showBalance("500")


const arr2: Array<number | string | boolean> = [1, "teste"]

// AVANÇANDO EM UNION TYPES

function showUserRole(role: boolean | String) {
    if(typeof role === "boolean") {
        return "Usuário não aprovado!"
    }

    return `A função do usuário é: ${role}` 
}

console.log(showUserRole(true))
console.log(showUserRole("Admin"))