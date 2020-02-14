// Programa que faz o calculo da médias de várias turmas de alunos em JavaScript//

var turma1 = [{
        nome: "Vitor",
        nota: 18
    },

    {
        nome: "Joao",
        nota: 8
    },

    {
        nome: "Igor",
        nota: 19
    }
]

var turma2 = [{
        nome: "Oscar",
        nota: 17.2
    },

    {
        nome: "fred",
        nota: 18
    },

    {
        nome: "Rute",
        nota: 15
    },
]

function calculaMedia(turma1) {
    return (turma1[0].nota + turma1[1].nota + turma1[2].nota) / 3
}
var media1 = calculaMedia(turma1)
var media2 = calculaMedia(turma2)



function enviaMensagem(media, turma) {
    if (media >= 16) {
        console.log(`A média da ${turma} foi de ${media} parabens,aprovado`)
    } else {
        console.log(`A média foi  da ${turma} de ${media} não foi suficiente,não foram aprovados`)
    }
}

enviaMensagem(media1, "turma1")
enviaMensagem(media2, "turma2")