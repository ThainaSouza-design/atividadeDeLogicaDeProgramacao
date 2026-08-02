//Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles.

// Ler os dois valores
let valor1 = Number(prompt("Digite o primeiro valor:"));
let valor2 = Number(prompt("Digite o segundo valor:"));

// Verificar qual é o maior
if (valor1 > valor2) {
    alert("O maior valor é: " + valor1);
    console.log("O maior valor é: " + valor1);
} else {
    alert("O maior valor é: " + valor2);
    console.log("O maior valor é: " + valor2);
}