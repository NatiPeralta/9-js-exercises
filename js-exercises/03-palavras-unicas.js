//3. Palavras Únicas
// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair todas as palavras únicas e exibi-las em um array.

let frase = "Olá Olá Mundo Mundo"
let listaPalavras = frase.split(" ")
let unicaPalavra = []


for(let i = 0; i < listaPalavras.length; i++) {
        let palavraAtual = listaPalavras[i]
        let cont = 0

    for(let j = 0; j < listaPalavras.length; j++) {
        if(listaPalavras[j] === palavraAtual){
        cont++
    }
    }
    if(contador === 1){
        unicaPalavra.push(palavraAtual)
    }
}

console.log(unicaPalavra)

