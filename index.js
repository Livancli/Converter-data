alert("Bem vindo, vamos converter! \nSegundos/Minutos/Horas/Dias")

let dataPartida = prompt("Informe a data para conversão. \nLembre-se de separar com '/'  (formato DD/MM/YYYY)")

let partidaData = moment(dataPartida, "DD/MM/YYYY")

let today = moment()

let dataDiferent = today - partidaData

let chosenOption = prompt("Escolha as opções abaixo: \n1- Segundos\n2- Minutos\n3- Horas\n4- Dias")

if (chosenOption == "1") {
    let segundosPartida = Math.round(dataDiferent / 1000)
    alert("Resultado: " + segundosPartida + " segundos")
} else if(chosenOption == "2") {
    let minutosPartida = Math.round(dataDiferent / 1000 / 60)
    alert("Resultado: " + minutosPartida + " minutos")
} else if(chosenOption == "3") {
    let horasPartida = Math.round(dataDiferent / 1000 / 3600)
    alert("Resultado: " + horasPartida + " Horas")
} else if(chosenOption == "4") {
    let diasPartida = Math.round(dataDiferent / 1000 / 3600 / 24)
    alert("Resultado: " + diasPartida + " Dias")
} else {
    alert("Opção inválida!")
}