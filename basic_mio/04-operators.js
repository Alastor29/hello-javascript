//Operadores

//Operadores aritmeticas
console.log(5 + 10)

let a = 5
let b = 10

console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicación
console.log(a / b) // Division
console.log(a % b) //Modulo (Resto división)
console.log(a ** b) //Exponente

a++ //Incremento
console.log(a)

b-- //Decremento
console.log(b)

//Operadores de asignación

let myVariable = 2
console.log(myVariable)
myVariable += 2
console.log(myVariable)
myVariable -= 2
myVariable *= 2
myVariable /= 2
myVariable %= 2
myVariable **= 2

//Operadores de comparación
console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == b) //Igualdad por valor
console.log(a == 6) //Igualdad por valor
console.log(a == "6") //Igualdad por valor
console.log(a == a)
console.log(a === 5)//Hubo un incremento en la variable "a" que es 6
console.log(a === 6)
console.log(a === a) //Igualdad por identidad (por tipo y valor)
console.log(a != 6)
console.log(a !== "6")
console.log(0 == false)
console.log(1 == false)
console.log(2 == false)
console.log(0 == "")
console.log(0 == " ")
console.log(0 == "Hola")
console.log(0 === "")
console.log(undefined == null)
console.log(undefined === null)

// Truthy values (valores verdaderos)
//Todos los numeros positivos y negativos menos el cero
//El boolean true


//Falsy values (valores falsos)

//0
//0n
//null
//undefined
//NaN
//Boolean false
//Cadena de texto vacias

//Operadores logicos

// and (&&)
console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20) 
console.log(5 > 10 && 15 > 20 && 30 > 40)

// or (||)
console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)
console.log(5 > 10 || 15 > 20 || 30 > 40)
console.log(5 > 10 && 15 > 20 || 30 > 40)
console.log(5 > 10 && 15 > 20 || 30 < 40)

// not (!)
console.log(!(5 > 10 && 15 > 20))
console.log(!(5 > 10 || 15 > 20))

//Operadores ternarios

const isRaining = true

isRaining ? console.log("Esta lloviendo") : console.log("No está lloviendo")
