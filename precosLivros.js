const livros = require('./listaLivros');

const menorValor = require('./menor Valor');

// 1 
for (let atual = 0; atual < livros.length - 1; atual++) { 
  let menor = menorValor(livros, atual)

let livroAtual = livros [atual]; 
console.log('posição atual', atual)
console.log('livro atual', livros[atual])
let livrotenorPreco = livros [menor];
console.log('livro menor preço', livros [menor])

livros [atual] = livroMenorPreco
livros [menor] = livroktual

}

console.log(livros)