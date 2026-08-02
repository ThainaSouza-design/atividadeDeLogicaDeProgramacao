//Solicitar 20 nomes quaisquer que serão armazenados em uma matriz do tipo vetor. Ordene este vetor em ordem alfabética. Exiba na tela os 20 nomes na ordem. Em seguida solicite um nome para pesquisa. Caso o nome fornecido exista no vetor, informar a sua localização (seu índice).

// Criar o vetor para armazenar os nomes
let nomes = [];

// Solicitar 20 nomes
for (let i = 0; i < 20; i++) {
    nomes[i] = prompt("Digite o " + (i + 1) + "º nome:");
}

// Ordenar os nomes em ordem alfabética
nomes.sort();

// Exibir os nomes ordenados
console.log("Nomes em ordem alfabética:");
for (let i = 0; i < nomes.length; i++) {
    console.log(i + " - " + nomes[i]);
}

// Solicitar um nome para pesquisa
let pesquisa = prompt("Digite um nome para pesquisar:");

let encontrado = false;

// Procurar o nome no vetor
for (let i = 0; i < nomes.length; i++) {
    if (nomes[i] == pesquisa) {
        alert("Nome encontrado no índice: " + i);
        console.log("Nome encontrado no índice: " + i);
        encontrado = true;
    }
}

// Caso o nome não exista
if (encontrado == false) {
    alert("Nome não encontrado.");
    console.log("Nome não encontrado.");
}