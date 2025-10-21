// É uma função que chama a si mesma, dentro da sua própria função.

let i = 10

function contagemRegressiva(i){
    if(i === 0){
        return i    //Esse é o caso-base para não dar erro de callstack
    }
    console.log(i);
    contagemRegressiva(i-1)
}

contagemRegressiva(i)

// As pilhas de chamadas ocorrem quando uma função chama outra função dentre dela mesma
//sem precisar usar da recursividade. Logo, recursão forma uma pilha, mas, nem toda pilha
//é uma recursão.

//Veja abaixo de uma pilha sem recursão

let numInicial = 5

function primeiroNum(numInicial){
    console.log(numInicial)
    adcMaisCinco(numInicial)
}

function adcMaisCinco(numInicial){
    numInicial += 5
    console.log(numInicial)
}

primeiroNum(numInicial)

//Veja um exemplo de calculo fatorial usando recursão, essa foi a feita por mim

let numberFat = 5
let numberMulti = 5

function fatorial(numberFat, numberMulti){
    if(numberMulti === 1){
        console.log(numberFat);
        return numberFat
    }
    numberMulti = numberMulti - 1
    numberFat = numberFat * numberMulti
    fatorial(numberFat, numberMulti)
}

fatorial(numberFat, numberMulti)

//Agora veja a demonstração do livro

let x = 5

function fat(x){
    if(x === 1){
        return 1
    }
    return x * fat(x-1)
}

console.log(fat(x));

//desvantagens: se a pilha for alta demais, isso pode exigir muita memória do computador, pois ele aramezena o processamento de
//cada chamada de função. Se for esse o caso, pode ser melhor usar looping