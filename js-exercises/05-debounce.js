//5. Debounce
// Crie function debounce(fn, delay) que receba uma função fn e um delay
// em ms, retornando uma nova função que só executa fn se não for
// chamada novamente dentro do intervalo.

function debounce(fn, delay) {
    let timeoutId

    return function(...args) {
        clearTimeout(timeoutId)

        timeoutId = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}

const novaFuncao = () => {
    console.log("Executou!", new Date().toLocaleTimeString())
}

const debounced = debounce(novaFuncao, 2000)

debounced()
setTimeout(debounced, 500)
setTimeout(debounced, 1000)
setTimeout(debounced, 3000)
