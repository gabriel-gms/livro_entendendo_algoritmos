/*
 É uma forma de programar dividindo um problema em problemas menores, em subproblemas

 É usada quando se tenta otimizar algo em relação a um limite
*/

/*
-----------------O PROBLEMA DA MOCHILA----------------------

 Você tem uma mochila e só pode carregar até 4kg itens nela, e existem tres opções de 
escolha dos itens:

radio: 4kg / notebook: 3kg / violão: 1kg

A ideia vai ser criar mochilas de 1 a 4 kg e ir vendo o que vai caber em cada uma delas

Toda solução de programação dinamica envolve uma tabela

Os valores na célula são, geralmente, o que você esta tentando otimizar. os valores nas
celulas são os valores dos itens

cada celula é um subproblema, portanto, pense se voce pode dividir elas em outros subproblemas

*/

function substring(){
    let palavra_a = "fish"
    let palavra_b = "hish"

    let i = 0
    let j = 0
    let count = 0 

    for (i of palavra_b) {
        if(palavra_a[i] === palavra_b[j]){
            palavra_b[i][j] = palavra_a[i-1][j-1]
        }
    }
}

console.log(substring())