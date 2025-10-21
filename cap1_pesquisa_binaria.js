//pesquisa binária: busca em uma lista ORDENADA, partindo ela no meio. Sendo assim, o sistema dirá se o chute foi alto
//ou baixo, descartando os numeros superiores ou inferiores ao chutado. Se não achar, retorna null

//a binária é uma alternativa a simples para listas muito grandes. a simples não é eficiente.

//simples: as etapas de adivinhação para a simples é n
//binária: as etapas de adivinhação para a binaria é log n (tempo logarítmico)
//Sendo n o tamanho do array

let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
let item_escolhido = 6

function pesquisa_binaria(lista, item){
    let baixo = 0
    let alto = lista.length

    while(baixo <= alto) {

        let meio = parseInt((baixo+alto)/2)

        let chute = lista[meio]

        if(chute == item){
            return meio
        }
        if(chute>item){
            alto = meio - 1
        }
        if(chute<item){
            baixo = meio + 1
        }
    }
    return null
}

let result = `Indice ${pesquisa_binaria(array, item_escolhido)}`

console.log(result)