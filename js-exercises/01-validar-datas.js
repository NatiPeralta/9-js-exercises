//1. Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores formarem uma data real (meses de 28–31 dias, ano bissexto para fevereiro) e false caso contrário.

const prompt = require('prompt-sync')()

let isDia = Number(prompt("Insira um dia (número): "))
let isMes = Number(prompt("Insira um mês (número): "))
let isAno = Number(prompt("Insira um ano: "))

function ehAnoBissexto(ano){
    if((ano % 4 == 0) && (ano % 100 !== 0) || (ano % 400 == 0)){
        return true;
    }else{
        return false;
    }
}

function ehDataValida(dia, mes, ano){
    if((mes < 1) || (mes > 12)){
       return false
    }

    let diaMes
    switch (mes){
        case 2:
            if (ehAnoBissexto(ano)) {
                diaMes = 29
            }else{
                diaMes = 28
            }
            break
        case 4: case 6: case 9: case 11:
            diaMes = 30
            break
            default:
                diaMes = 31
    }

    if((dia < 1) || (dia > diaMes)){
        return false
    }

    return true;
}

console.log(`A data é válida? ${ehDataValida(isDia, isMes, isAno)}`)
console.log(`${isDia}/${isMes}/${isAno}`)