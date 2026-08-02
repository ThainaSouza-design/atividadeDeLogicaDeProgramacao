//O custo de um carro novo ao consumidor é a soma do custo de fábricacom a porcentagem do distribuidor e dos impostos (aplicados ao custode fábrica). Supondo que o percentual do distribuidor seja de 28% e osimpostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor.

// Ler o custo de fábrica do carro
let custoFabrica = Number(prompt("Digite o custo de fábrica do carro:"));

// Calcular o valor do distribuidor (28%)
let distribuidor = custoFabrica * 0.28;

// Calcular o valor dos impostos (45%)
let impostos = custoFabrica * 0.45;

// Calcular o custo final
let custoFinal = custoFabrica + distribuidor + impostos;

// Mostrar o resultado
alert("O custo final do carro é: R$ " + custoFinal.toFixed(2));

console.log("Custo de fábrica: R$ " + custoFabrica);
console.log("Distribuidor: R$ " + distribuidor);
console.log("Impostos: R$ " + impostos);
console.log("Custo final: R$ " + custoFinal.toFixed(2));