//Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500.

// Criar uma variável para guardar a soma
let soma = 0;

// Percorrer os números de 1 até 500
for (let i = 1; i <= 500; i++) {

    // Verificar se o número é par
    if (i % 2 == 0) {
        soma = soma + i;
    }
}

// Mostrar o resultado
alert("A soma dos números pares de 1 até 500 é: " + soma);

console.log("A soma dos números pares de 1 até 500 é: " + soma);