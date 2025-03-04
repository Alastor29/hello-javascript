/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let name = "Juan Jose"

if (name === "Juan Jose") {
    console.log("Mi nombre es Juan José")
} 

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let usuario = "admin"
let password = "1234"

if (usuario === "admin" && password === "1234") {
    console.log("Acceso concedido")
} else {
    console.log("Acceso denegado")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = 0

if (numero > 0) {
    console.log("El numero es positivo")
} else if (numero < 0) {
    console.log("El numero es negativo")
} else {
    console.log("El numero es 0")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let age = 16

if (age >= 18) {
    console.log(`Puedes votar, eres mayor de edad`)
} else {
    console.log(`No puedes votar,te faltan ${18 - age} para votar`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
let status = age >=18 ? "Adulto" : "Menor"
console.log(`Tu estatus es ${status}`)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = "Junio"

if (mes === "Diciembre" || mes === "Enero" || mes === "Febrero") {
    console.log(`El mes de ${mes} corresponde a la estación de invierno`)
} else if (mes === "Marzo" || mes === "Abril" || mes === "Mayo") {
    console.log(`El mes de ${mes} corresponde a la estación de primavera`)
} else if (mes === "Junio" || mes === "Julio" || mes === "Agosto") {
    console.log(`El mes de ${mes} corresponde a la estación de verano`)
} else {
    console.log(`El mes de ${mes} corresponde a la estación de otoño`)
} 
    
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7