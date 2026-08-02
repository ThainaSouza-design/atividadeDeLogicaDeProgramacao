//As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e escreva o custo total da compra.

// Ler a quantidade de maçãs compradas
let quantidade = Number(prompt("Digite a quantidade de maçãs compradas:"));

let preco;
let total;

// Verificar o preço de cada maçã
if (quantidade < 12) {
    preco = 1.30;
} else {
    preco = 1.00;
}

// Calcular o valor total da compra
total = quantidade * preco;

// Mostrar o resultado
alert("O valor total da compra é: R$ " + total.toFixed(2));

console.log("Quantidade de maçãs: " + quantidade);
console.log("Preço de cada maçã: R$ " + preco.toFixed(2));
console.log("Valor total da compra: R$ " + total.toFixed(2));