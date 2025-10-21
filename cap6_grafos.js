/*A pesquisa em largura calcula qual o caminho mínimo necessário para se chegar
a um objetivo utilizando grafos */

/* Os grafos são grupos de conexõs, com vértices e arestas */

/** Duas perguntas fundamentais permeiam a criação da pesquisa em largura:
 * 1 - Existe um caminho do ponto A ao B?
 * 2 - Qual o caminho mais curto entre eles?
 */

/* Para fazer o grafo nós usamos tabela hash */

/* Esse algoritmo abaixo procura a pessoa mais proxima que vende manga, primeiro
ele procura seus amigos mais proximos, se nenhum vender manga ele procura quem vende com
os amigos de seus amigos. seus próprios amigos são os amigos de primeiro grau e são analisados
primeiro, e devem ser analisados primeiro pois são o caminho mais curto, os amigos de seus amigos
são de segundo grau, então devem entrar na fila para serem analisados após todos os seus amigos 
de primeiro grau. Os de primeiro grau primeiro, pois são o caminho mais curto, os de segundo grau depois,
pois são o caminho mais curto caso os de primeiro grau não vendam manga, e assim por diante */

let grafo = {} // O desenho do grafo esta no livro

grafo["eu"] = ["alice", "Bob", "Claire"] // primeiro grau
grafo["Bob"] = ["Anuj", "Peggy"] // segundo grau
grafo["alice"] = ["Peggy"] // segundo grau
grafo["Claire"] = ["Thom", "Jonny"] // segundo grau
grafo["Anuj"] = []
grafo["Peggy"] = []
grafo["Thom"] = []
grafo["Jonny"] = []

console.log(grafo) // Esse é o grafo, consulte o livro para entender

function pesquisaEmLargura(){
    let fila = []
    grafo["eu"].forEach((v) => { fila.push(v) })
    
    while(fila){
        let pessoa = fila.shift()

        if(pessoa[pessoa.length - 1] === "m"){ // o que termina o nome com m vende manga
            return `${pessoa} vende manga`
        }
        else {
            grafo[pessoa].forEach((v) => { fila.push(v) })
            fila.shift()
        }
    }
    return false
}

console.log(pesquisaEmLargura())
