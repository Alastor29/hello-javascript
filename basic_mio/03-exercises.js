/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea
//Esto es un comentario de una línea

// 2. Escribe un comentario en varias líneas
/*Esto es 
un comentario 
de varias lineas*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let myName = "Juan José"
let age = 36
let mySymbol = Symbol("mySymbol")
let nullValue = null
let undefinedValue
let booleanValue = true
let myBigInt = BigInt(5348757863456873867453479821491293319287)

// 4. Imprime por consola el valor de todas las variables
console.log(myName)
console.log(age)
console.log(mySymbol)
console.log(nullValue)
console.log(undefinedValue)
console.log(booleanValue)
console.log(myBigInt)

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof myName)
console.log(typeof age)
console.log(typeof mySymbol)
console.log(typeof nullValue)
console.log(typeof undefinedValue)
console.log(typeof booleanValue)
console.log(typeof myBigInt)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
myName = "Juan"
age = 24
mySymbol = Symbol("simbolo")
nullValue = null
undefinedValue
booleanValue = false
myBigInt = BigInt(531323143253564567)

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
myName = 34
age = "Juan Jose"
mySymbol = null
nullValue = Symbol("hola")
undefinedValue = true
booleanValue = BigInt(5313231453454335443246547)
myBigInt

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const myName = "Juan José"
const age = 36
const mySymbol = Symbol("mySymbol")
const nullValue = null
const undefinedValue
const booleanValue = true
const myBigInt = BigInt(5348757863456873867453479821491293319287)

// 9. A continuación, modifica los valores de las constantes
myName = "Pepe"
age = 31
mySymbol = Symbol("mypepe")
nullValue = 57
undefinedValue
booleanValue = false
myBigInt = BigInt(53232423448757863456873867453479821491293319287)

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

/*myName = "Pepe"
age = 31
mySymbol = Symbol("mypepe")
nullValue = 57
undefinedValue
booleanValue = false
myBigInt = BigInt(53232423448757863456873867453479821491293319287)*/