//Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor correspondente em graus Celsius (baseado na fórmula abaixo):
//  C      F - 32
//—---- = ------
//  5       9
//Observação: Para testar se a sua resposta está correta saiba que 100oC = 212F

// Ler a temperatura em Fahrenheit
let fahrenheit = Number(prompt("Digite a temperatura em graus Fahrenheit:"));

// Calcular a temperatura em Celsius
let celsius = (fahrenheit - 32) * 5 / 9;

// Mostrar o resultado
alert("A temperatura em Celsius é: " + celsius.toFixed(2) + "°C");

console.log("Temperatura em Fahrenheit: " + fahrenheit + "°F");
console.log("Temperatura em Celsius: " + celsius.toFixed(2) + "°C");