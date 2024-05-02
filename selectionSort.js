const livros = require ('./listaLivros');

let maisBarato = 0;

for (let atual0; atual < livros.length; atual++) {

if (livros [atual].preco < livros [maisBarato].preco) {

 maisBarato = atual

}

}
console.log(' o livro mais barato custa ${livros [maisBarato].preco) e o título é ${Livros [maisbarato]. título}')