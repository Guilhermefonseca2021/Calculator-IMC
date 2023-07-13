
function calculate() {
    var height = (document.getElementById("height").value) / 100;
    var weight = (document.getElementById("weight").value)

    var imc = weight / height ** 2;
    console.log(imc)

    if (imc < 18.7) {
        alert("Voce precisa de um nutricionista")
    } else if (imc < 24.9) {
        alert("Voce esta em boa saude")
    } else if (imc < 29.9) {
        alert("Voce esta com sobrepeso")
    } else if (imc < 34.9) {
        alert("voce esta obeso")
    } else if (imc >= 39.9) {
        alert("Voce esta com obesidade morbida")
    }
}




