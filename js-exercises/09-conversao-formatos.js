//9. Conversão Entre Formatos
// Escreva duas funções:
// ○ paresParaObjeto(pares) recebe um array de pares [ [chave,
// valor], ... ] e retorna o objeto equivalente.
// ○ objetoParaPares(obj) faz o inverso, retornando um array de
// pares.


function paresParaObjeto(pares){
    return pares.reduce((obj, [chave, valor]) => {
        obj[chave] = valor
        return obj
    }, {})
}
    function objetoParaPares(obj) {
        return Object.entries(obj)
    }

let pares = [['nome', 'Maria'], ['idade', 24]]
let obj = {nome: 'Maria', idade: 24}

console.log(paresParaObjeto(pares))
console.log(objetoParaPares(obj))