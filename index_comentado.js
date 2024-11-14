//Importa o array de livros do arquivio "array.js"
const listaLivros = require("./array.js");
//Função principal que implementa o algoritmo Merge Sort
function mergeSort(array) {
    //Verifica se  o array tem mais de 1 elemento
    if (array.length > 1) {
        //Encontra o meio do arraypara dividi-lo em duas partes
        const meio = Math.floor(array.length/ 2);
        //Chama recursivamente a função para ordenar a primeira metade
        const part1 = mergeSort(array.slice(0, meio));
        //Chama recursivamente a função para ordenar a segunda metade 
        const part2 = mergeSort(array.slice(meio, array.length));
        //Junta as duas prtes ordenadas usanso a função 'ordena'
      array = ordena (part1, part2)
    }
    //Retorna o array ordenado
    return array;
}
//Função que combina duas partes ordenadas em uma única lista ordenada 
function ordena (part1, part2) {
//Define o índice atual para a primeira parte 
let posicaoAtualPart1 = 0;

//Define o índice atual para a segunda parte
let posicaoAtualPart2 = 0;

//Cria um array vazio para armazenar o resultado final
const resultado = [];

//Enquanto houver elementos em ambas as partes, compare e adicione o menor ao resultado
while (
    posicaoAtualPart1 < part1.length &&
    posicaoAtualPart2 < part2.length 
) {
    //Pega o produto atual da primeira parte
    const produtoAtualPart1 = part1[posicaoAtualPart1];
    //Pega o produto r=atual da segunda parte 
    const produtoAtualPart2 = part2[posicaoAtualPart2];
    //verifica qual dos produtos tem o menor preço 
    if (produtoAtualPart1.preco < produtoAtualPart2.preco){
  //Se o produto da primeira parte for mais barato, adiciona ao resultado
  resultado.push(produtoAtualPart1);
  //Avança o índice da primeira parte
  posicaoAtualPart1++;
    } else {
        //Caso contrário, adicione o produto da segunda parte ao resultado
        resultado.push(produtoAtualPart2);
        //Avança o índice da segunda parte
        posicaoAtualPart2++;
    }
}
//Adiciona os elementos restantes da parte qque ainda não terminou 
return resultado.concat(
    posicaoAtualPart1 < part1.length 
    ? part1.slice(posicaoAtualPart1) // Se restarem elementos na primeira parte
    : part2.slice(posicaoAtualPart2) // Se restarem elementos na segunda parte
);
}

//Exibe no console o array de Livros ordenado
console.log(mergeSort(listaLivros));


