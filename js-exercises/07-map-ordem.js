// //7. Mapeamento e Ordenação
// Dado um array produtos = [{ nome, preco }, ...], crie uma função que
// retorne um novo array apenas com os nomes, ordenados por preço
// crescente, usando map, sort.

let produtos = [
    {nome: 'Banana', preco: 15},
    {nome: 'Maça', preco: 10},
    {nome: 'Uva', preco: 16},
]

function novoArray(lista) {
    return lista
    .sort((a, b) => a.preco - b.preco)
    .map(produto => produto.nome)
}

console.log(novoArray(produtos))