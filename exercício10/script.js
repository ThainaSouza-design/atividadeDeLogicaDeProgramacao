//Uma empresa quer verificar se um empregado está qualificado para a aposentadoria ou não. Para estar em condições, um dos seguintes requisitos deve ser satisfeito: - Ter no mínimo 65 anos de idade. - Ter trabalhado no mínimo 30 anos. - Ter no mínimo 60 anos e ter trabalhado no mínimo 25 anos. Com base nas informações acima, faça um algoritmo que leia: o número do empregado (código), o ano de seu nascimento e o ano de seu ingresso na empresa. O programa deverá escrever a idade e o tempo de trabalho do empregado e a mensagem 'Requerer aposentadoria' ou 'Não requerer'.

// Ler os dados do empregado
let codigo = prompt("Digite o código do empregado:");
let anoNascimento = Number(prompt("Digite o ano de nascimento:"));
let anoIngresso = Number(prompt("Digite o ano de ingresso na empresa:"));
let anoAtual = Number(prompt("Digite o ano atual:"));

// Calcular idade e tempo de trabalho
let idade = anoAtual - anoNascimento;
let tempoTrabalho = anoAtual - anoIngresso;

// Verificar se pode se aposentar
if (idade >= 65 || tempoTrabalho >= 30 || (idade >= 60 && tempoTrabalho >= 25)) {
    alert("Código: " + codigo +
          "\nIdade: " + idade +
          "\nTempo de trabalho: " + tempoTrabalho +
          "\nRequerer aposentadoria");
          
    console.log("Código: " + codigo);
    console.log("Idade: " + idade);
    console.log("Tempo de trabalho: " + tempoTrabalho);
    console.log("Requerer aposentadoria");
} else {
    alert("Código: " + codigo +
          "\nIdade: " + idade +
          "\nTempo de trabalho: " + tempoTrabalho +
          "\nNão requerer");

    console.log("Código: " + codigo);
    console.log("Idade: " + idade);
    console.log("Tempo de trabalho: " + tempoTrabalho);
    console.log("Não requerer");
}