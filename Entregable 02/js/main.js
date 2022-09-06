// Ciclos

debugger

let peso = parseInt(prompt("Ingresa tu peso en kg:"))
let edad = parseInt(prompt("Ingresa tu edad:"))
let altura = parseInt(prompt("Ingresa tu estatura en cm:"))
let sexo = prompt("Ingresa el número -161 si eres mujer o 5 si eres hombre")

let calculo = parseInt((((peso * 10) + (altura * 6.25)) - (edad * 5) + (sexo)))

if (calculo <= 1500) {
    console.log("Tú nivel de consumo de calorías es: " + calculo + ". Estas en el promedio.")
} else if (calculo >= 1501) {
    console.log("Tú nivel de consumo de calorías es: " + calculo + ". Estas por arriba del promedio.")
} else {
    console.warn("Tienes que ingresar un números")
}