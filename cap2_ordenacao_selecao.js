// É possível chamar a funcção buscaMaior ou buscaMenor dentro da função ordenacaoPorSelecao, ficando crescente ou decrescente

const lista = [5,3,6,2,10]
const tamanho = lista.length
const nova_lista = []

function buscaMaior(list){
    let maior_elemento = list[0]
    let maior_index = 0
    
    for(let i = 0 ; i < list.length ; i ++){
        if(list[i]>maior_elemento){
            maior_elemento = list[i]
            maior_index = i
        }
    }
    return maior_index
}

function buscaMenor(list){
    let menor_elemento = list[0]
    let menor_index = 0
    
    for(let i = 0 ; i < list.length ; i ++){
        if(list[i]<menor_elemento){
            menor_elemento = list[i]
            menor_index = i
        }
    }
    return menor_index
}

function ordenacaoPorSelecao(list){
    for(let i = 0 ; i < tamanho ; i ++){
        let menorOuMaior = buscaMaior(list)
        nova_lista.push(list[menorOuMaior])
        list.splice(menorOuMaior, 1)
    }
    return nova_lista
}

let result = ordenacaoPorSelecao(lista)

console.log(result)