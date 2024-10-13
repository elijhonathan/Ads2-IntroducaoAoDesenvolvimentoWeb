let diaSemana = 3
let mensagem

switch (diaSemana)
{
    case 1:
        mensagem = "Segunda-Feira"
        break

    case 2:
        mensagem = "Terça-Feira"
        break

    case 3:
        mensagem = "Quarta-Feira"
        break

    case 4:
        mensagem = "Quinta-Feira"
        break

    case 5:
        mensagem = "Sexta-Feira"
        break

    case 6:
        mensagem = "Sábado"
        break

    case 7:
        mensagem = "Domingo"
        break

    default:
        mensagem = "Número Inválido"
}

console.log(`Hoje é ${mensagem}`)