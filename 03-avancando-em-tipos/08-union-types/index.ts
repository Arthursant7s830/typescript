function showBalance(balance: string | number) {
    console.log(`O saldo da conta é de R$${balance}`)
}

showBalance(100)
showBalance("500")


const arr2: Array<number | string | boolean> = [1, "teste"]
