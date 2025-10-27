let estados = new Set(['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az'])

let estacoes = {}
estacoes['kum'] = new Set(['id', 'nv', 'ut'])
estacoes['kdois'] = new Set(['wa', 'id', 'mt'])
estacoes['ktres'] = new Set(['or', 'nv', 'ca'])
estacoes['kquatro'] = new Set(['nv', 'ut'])
estacoes['kcinco'] = new Set(['ca', 'az'])

let result = []

function alg_aproximacao(){
    let estadosCobertos = []
    let estacaoMaiorNum
    let estacoesJaCobertas = []
    let arrTransformar = ''

    while(estacoesJaCobertas.length<5){
        let maiorNumeroEstados = 0
        
        for(let i in estacoes){
            if(estacoes[i].size>maiorNumeroEstados){
                Array.from(estacoes[i]).forEach(v => {
                    if(!estadosCobertos.includes(v)){

                        estacaoMaiorNum = i
                        result.push(estacaoMaiorNum)
                        arrTransformar += Array.from(estacoes[estacaoMaiorNum])+","
                        estadosCobertos = arrTransformar.split(',')
                    }
                })
            }
            estacoesJaCobertas.push(estacaoMaiorNum)
        }
    }
    
}

alg_aproximacao()
console.log(result)