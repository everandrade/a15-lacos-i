// Utilizando o laço `while`, escreva um código que recebe um `prompt` perguntando
//  se a pessoa deseja comer mais coxinhas. “S” deve representar “sim”, e “N” 
//  deve representar “não”. Crie também uma `let conta` para guardar o valor total.

// Toda vez que a resposta for **sim**, o laço deve se repetir, e devemos 
// adicionar R$2.50 ao valor total. Quando a resposta não for **sim**, 
// devemos imprimir o valor total da conta.

let coxinha = prompt("Gostaria de comer mais coxinhas? \nResponda S ou N.").toUpperCase()
let conta = 1

while (coxinha !== "N") {
    conta++
    coxinha = prompt("Gostaria de comer mais coxinhas? \nResponda S ou N.").toUpperCase()
}

console.log(`Você comeu ` + (conta), `coxinhas!`)
console.log("Sua conta é de: ", conta * 2.50, "reais.")