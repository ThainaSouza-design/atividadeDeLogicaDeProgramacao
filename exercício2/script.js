//Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor.

// Ler os dados do vendedor
let carrosVendidos = Number(prompt("Digite a quantidade de carros vendidos:"));
let valorVendas = Number(prompt("Digite o valor total das vendas:"));
let salarioFixo = Number(prompt("Digite o salário fixo:"));
let comissaoCarro = Number(prompt("Digite o valor da comissão por carro vendido:"));

// Calcular a comissão pelos carros vendidos
let totalComissao = carrosVendidos * comissaoCarro;

// Calcular 5% sobre o valor das vendas
let bonusVendas = valorVendas * 0.05;

// Calcular o salário final
let salarioFinal = salarioFixo + totalComissao + bonusVendas;

// Mostrar o resultado
alert("O salário final do vendedor é: R$ " + salarioFinal.toFixed(2));

console.log("Carros vendidos: " + carrosVendidos);
console.log("Valor das vendas: R$ " + valorVendas);
console.log("Salário fixo: R$ " + salarioFixo);
console.log("Comissão por carro: R$ " + comissaoCarro);
console.log("Salário final: R$ " + salarioFinal.toFixed(2));