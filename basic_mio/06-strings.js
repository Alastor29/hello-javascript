//Concatenación

let myName = "Juan José"
let greeting = "Hola, " + myName + "!"
console.log(greeting)
console.log(typeof greeting)

//Longitud
console.log(greeting.length)

//Acceso a caracteres
console.log(greeting[0])
console.log(greeting[2])
console.log(greeting[15])

//Metodos comunes
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Hola"))
console.log(greeting.indexOf("Juan José"))
console.log(greeting.indexOf("!"))
console.log(greeting.includes("Hola"))
console.log(greeting.includes("Juan José"))
console.log(greeting.includes("!"))
console.log(greeting.includes("Pepe"))
console.log(greeting.slice(0,10))//excluye el final o sea serian 9
console.log(greeting.replace("Juan José","MoureDev"))

//Template literals (plantillas literales)
let message = `Hola, este es mi 
curso de Javascript`

console.log(message)

let mail = "alastorfender29@gmail.com"

console.log(`Hola, ${myName}! Tu email es ${mail}`)



