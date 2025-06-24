//8. Agrupamento por Propriedade
// Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
// cada chave é um cliente e o valor é a soma de todos os seus total.

let vendas = [
    {cliente: 'Maria', total: 100},
    {cliente: 'Maria', total: 150},
    {cliente: 'João', total: 250},
    {cliente: 'João', total: 50},
    {cliente: 'Pedro', total: 155},
    {cliente: 'Luisa', total: 300},
]

let somaTotal = vendas.reduce((acumulador, venda) => {
    acumulador[venda.cliente] = (acumulador[venda.cliente] || 0) + venda.total
    return acumulador
}, {})

console.log(somaTotal)