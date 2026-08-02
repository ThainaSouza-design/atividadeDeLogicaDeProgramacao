//Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte.

// Ler a hora de início e a hora de fim
let inicio = Number(prompt("Digite a hora de início do jogo:"));
let fim = Number(prompt("Digite a hora de fim do jogo:"));

let duracao;

// Calcular a duração do jogo
if (fim > inicio) {
    duracao = fim - inicio;
} else {
    duracao = (24 - inicio) + fim;
}

// Mostrar o resultado
alert("A duração do jogo foi de " + duracao + " horas.");

console.log("Hora de início: " + inicio);
console.log("Hora de fim: " + fim);
console.log("Duração do jogo: " + duracao + " horas.");