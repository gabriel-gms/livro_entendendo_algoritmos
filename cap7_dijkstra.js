/* O grafo com peso adiciona um fator a mais, que é um valor associado a cada aresta, podendo ser minutos,
   kilometros ou outra unidade de medida */

/* O algoritmo de Dijkstra vai analisar exatamente isso, qual o caminho mais rápido de acordo com o peso */

/* Para criar o algortimo é necessário 4 passos: 
   1 - Do vértice de partida, encontre o proximo vértice que terá o menor peso e vá para ele 
   2 - Faça o mesmo para esse próximo vértice em que avançou e atualize os custos deles
   3 - Repita esse processo para todos os vértices
   4 - Calcule o caminho final
*/

/* Esse algortimo só funciona em gráficos em que não existem ciclos/loopings entre vértices e que não existem
   números negativos */

let grafo = {
   "inicio": {
      "a": 6,
      "b": 2
   },
   "a": {
      "fim": 1
   },
   "b": {
      "a": 3,
      "fim": 5
   },
   "fim": {}
}

let custo = {
   "a": 6,
   "b": 2,
   "fim": Infinity
}

let pais = {
   "a": "inicio",
   "b": "inicio",
   "fim": undefined
}

let processados = []

function dijkstra(){
   
}

console.log(grafo)
console.log(custo)
console.log(pais)