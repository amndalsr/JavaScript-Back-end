const nomes = ["Evaldo", "Amanda", "Andre"]

nomes.forEach(function (nome){
    console.log(nome)
})

nomes.forEach((nome) => { //arrow function = função de seta
    console.log(nome)
})

function imprimeNome(nome) {
    console.log(nome)
}

nomes.forEach(imprimeNome)