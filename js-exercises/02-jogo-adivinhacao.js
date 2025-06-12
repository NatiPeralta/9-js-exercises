// 2. Jogo de Adivinhação
// Escreva um script que gere um número aleatório de 1 a 100 e peça ao
// usuário, para adivinhar. Use while para repetir até acertar, contando
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

const prompt = require('prompt-sync')()

let numberUser = null
let numberAdv = 0

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const randomNumber = getRandomNumber(1, 100)

        while(numberUser != randomNumber){
        let numberUser = Number(prompt("Jogo da Adivinhação! Adivinhe qual é o número (1 a 100): "))
        numberAdv++

        if(numberUser < 1 && numberUser > 100){
            console.log("Número inválido! Por favor, digite um número de 1 a 100")
        }else if(numberUser > randomNumber){
        console.log(`O ${numberUser} é maior! Tente um número mais baixo.`)
        }else if(numberUser < randomNumber){
        console.log(`O ${numberUser} é menor! Tente um número mais alto.`)
        }else{
        console.log(`Parabéns! O número correto era o ${numberUser}. Você acertou em ${numberAdv} tentativas!`)
        }
   
}