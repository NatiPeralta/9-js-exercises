//Implemente function memoize(fn) que armazene em cache chamadas
//anteriores de fn (por argumentos), retornando resultados instantâneos em
//repetidas invocações.


function memoize(fn) {
    const cache = {}


    return function(...args){
        const key = JSON.stringify(args)

        if (cache[key]) {
            console.log("Resultado vindo do cache!")
            return cache[key]
        }

        const result = fn(...args)
        cache[key] = result
        return result
    }

}

function somaLenta(a, b) {
    console.log("Processando...")
    return a + b
}

const somaMemo = memoize(somaLenta)

console.log(somaMemo(2, 3))
console.log(somaMemo(2, 3))
