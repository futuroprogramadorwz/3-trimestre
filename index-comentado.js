//importa as listas'edGalho' e 'edFolha' do arquivo 'arrays.js'
const { edGalho, edFolha } = require('./arrays');

//Função que recebe duas listas e as junta, mantendo a ordem crescente dos preços
function juntaListas(Lista1, Lista2) {
    //cria uma nova lista vazia que irá armazenar a listas final ordenada 
    let listaFinal = [];

 //Inicializa o índice que rastreia a posição atual na Lista1
  let posicaoAtualLista1 = 0;
  
  //Inicializa o índice que rastreia a posição atual na Lista1
  let posicaoAtualLista2 = 0;
  
  //Inicializa o índice que rastreia a posição atual na listaFinal
  let atual = 0;

  //Enquanto ainda houver itens em ambas as listas (Lista1 e Lista2)
  while (posicaoAtualLista1 < Lista1.length && posicaoAtualLista2 < Lista2.length) {
    //Obtém o produto atual da Lista1 usando o  índice posicaoAtualLista
    let produtoAtualLista1 = Lista1[posicaoAtualLista1];
    //Obtém o produto atual da Lista2 usando o índice posicaoAtualLista2
    let produtoAtualLista2 = Lista2[posicaoAtualLista2];
    //Compara o preço do produto da Lista1 com o preço do produto da Lista2
    if (produtoAtualLista1.preco < produtoAtualLista2.preco) {
      //Se o produto da Lista1 for mais barato, ele é adicionado á listaFinal
      listaFinal[atual] = produtoAtualLista1;
   //MOve para o próximo produto na Lista2, incrementando o índice posicaoAtualLista2
    posicaoAtualLista1++;
    } else {
      //Caso contrário, se o produto da List2 for mais barato ou igual, ele é adicionado á listaFinal1
      listaFinal[atual] = produtoAtualLista2;
      //MOve para o próximo produto na Lista2, incrementando o índice posicaoAtualLista2
      posicaoAtualLista2++;
    }
    //Incremento o índice 'atual' para indicar a próxima posição da listaFinal
    atual++;
  }
  //Se ainda houver produtos restantes na Lista1, adiciona-os á listaFinal
  while (posicaoAtualLista1 < Lista1.length) {
    //Adiciona o produto atual da Lista1 á listaFinal
    listaFinal[atual] = Lista1[posicaoAtualLista1];

    //Move para o próximo produto na Lista1
    posicaoAtualLista1++;
    atual++;
  }
    while (posicaoAtualLista2 < Lista2.length){
    listaFinal[atual] = Lista2 [posicaoAtualLista2];
    posicaoAtualLista2++;
    atual++;
  }
  return listaFinal;

}
console.log(juntaLista(edGlaho.edFolha));