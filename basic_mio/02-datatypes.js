//Tipos de datos primitivos

import { type } from "os"

// String Cadena de texto
let myName = "Juan Jose"
let alias = 'Juan'
let mail = `alastorfender29@gmail.com`

//Números
let age = 36 //Entero
let height = 1.70 //Decimal

//Booleanos (boolean)
let isStudent = false
let isTeacher = true

// Undefined 
let undefinedValue


//Null
let nullValue = null

//Symbol
let mySymbol = Symbol("mysymbol")

//BigInt
let myBigInt = BigInt(424323454564564563424324656686789798)


// Mostramos los tipos de datos

console.log(typeof myName)
console.log(typeof alias)
console.log(typeof mail)
console.log(typeof age)
console.log(typeof height)
console.log(typeof isTeacher)
console.log(typeof isStudent)
console.log(undefinedValue)
console.log(typeof nullValue)
console.log(typeof mySymbol)
console.log(typeof myBigInt)