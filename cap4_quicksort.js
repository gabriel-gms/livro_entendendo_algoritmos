// A divisão e conquista (DC) serve para achar o caso-base, e para achar o caso-base, é necessário saber o objetivo
//do algoritmo, em qual valor ele deve chegar?

// Um array por exemplo, para achar o caso-base dele, geralmente é quando ele ta vazio ou com um único elemento

let lista = [1,2,20]

function contItens(list){
    if(list.length === 1){
        return 1
    }
    list.pop()
    return 1 + contItens(list)
}

console.log(contItens(lista))  // Aqui foi usado o método de divisão e conquista, pois o array foi se dividindo até 
//chegar em seu menor tamanho possível, somando, depois, cada item desse array

//Veja abaixo mais um exemplo de DC

function valorMaisAlto(lista){
    if(lista.length === 1){
        return lista[0] > lista[1] ? lista[0] : lista[1]
    }
    let sub_max = valorMaisAlto(lista[1])
    return lista[0] > sub_max ? lista[0] : sub_max
}

console.log(valorMaisAlto(lista));

/*      O quicksort é mais eficiente do que a ordenação por seleção.
    Consiste em selecionar um pivô, repartir subarrays menores e maiores que esse pivô,
    repetir esse processo para os subarrays até que se tenha o caso base e por fim, ordenar*/

/////////O QUICKSORT//////////////////

/* No pior caso o quicksort tem tempo O(n²), no caso médio tem O(n log n) */

let arr = [2,6,8,7,1,3,10]

function quickSort(arr){
    if(arr.length === 1 || arr.length === 0){
        return arr
    }

    let pivo = arr[0]
    let menores = []
    let maiores = []

    for(let i = 0; i<arr.length; i++){
        if(arr[i]<pivo){
            menores.push(arr[i])
        }
        if(arr[i]>pivo){
            maiores.push(arr[i])
        }
    }

    return [].concat(quickSort(menores)).concat(pivo).concat(quickSort(maiores))
}

console.log(quickSort(arr))