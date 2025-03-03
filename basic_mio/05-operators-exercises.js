/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let a = 4
let b = 5

console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicación
console.log(a / b) // Division
console.log(a % b) //Modulo (Resto división)
console.log(a ** b) //Exponente

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

b += 3
console.log(b)
b -= 3
console.log(b)
b *= 3
console.log(b)
b /= 3
console.log(b)
b %= 3
console.log(b)
b **= 3
console.log(b)

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
a = 10
b = 15
console.log(a < b)
console.log(a <= b)
console.log(a == 10)
console.log(b == b)
console.log(a < b)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(a > b)
console.log(a == b)
console.log(a >= b)
console.log(a >= 20)
console.log(a >= "20")

// 5. Utiliza el operador lógico and
console.log(20 > 15 && 16 < 24)
console.log(20 < 15 && 16 > 24)


// 6. Utiliza el operador lógico or
console.log(20 > 15 || 16 > 24)

// 7. Combina ambos operadores lógicos
console.log(20 > 15 && 16 < 24 || 30 > 40)
console.log(20 > 15 && 16 > 24 || 30 > 40)

// 8. Añade alguna negación
console.log(!(20 > 15 || 16 > 24))
console.log(!(20 > 15 && 16 < 24))

// 9. Utiliza el operador ternario

const isClean = true

isClean ? console.log("Esta limpio") : console.log("No esta limpio")

// 10. Combina operadores aritméticos, de comparáción y lógicas

console.log(4 + 4 > 7 - 2 && 20 * 10 >= 30 * 2)