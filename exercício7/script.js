//Ler 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores.

// Ler os 3 valores
let valor1 = Number(prompt("Digite o primeiro valor:"));
let valor2 = Number(prompt("Digite o segundo valor:"));
let valor3 = Number(prompt("Digite o terceiro valor:"));

let soma;

// Verificar qual é o menor valor
if (valor1 < valor2 && valor1 < valor3) {
    soma = valor2 + valor3;
} else if (valor2 < valor1 && valor2 < valor3) {
    soma = valor1 + valor3;
} else {
    soma = valor1 + valor2;
}

// Mostrar o resultado
alert("A soma dos dois maiores valores é: " + soma);

console.log("Valor 1: " + valor1);
console.log("Valor 2: " + valor2);
console.log("Valor 3: " + valor3);
console.log("Soma dos dois maiores: " + soma);