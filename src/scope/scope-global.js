var helloVar = "Hello desde var"
var helloVar = "Hello 2do desde var" // Var permite definir o declarar nuevamente la variable
let helloLet = "Hello dede let"
let helloLet = "Hello 2do desde let" // Let no permite definir o declarar nuevamente la variable || SyntaxError: Identifier 'helloLet' has already been declared
const helloConst = "Hello desde const"

function printHellos(params) {
    console.log(helloVar)
    console.log(helloLet)
    console.log(helloConst)   
}

printHellos()


// Mala Prática: Error no asignar tip de variable var let o const dentro de una funcion

const helloWorld = () => {
    globalVar = "Hello soy global desde Funtion Arrow sin asignar var let o const"
}

helloWorld()
console.log(globalVar)

// Mala Prática: Realizar doble asignacion de variable, la segunda permite acceder globalmente

const helloWorld2 = () => {
    var variable1 = variable2 = "Este texto es por que esta reasignado doble y puedes acceder globalmente"
}

helloWorld2()
console.log(variable2)