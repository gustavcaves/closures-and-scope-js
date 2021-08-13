var helloVar = "Hello desde var"
var helloVar = "Hello 2do desde var" // Var permite definir nuevamente la variable
let helloLet = "Hello dede let"
let helloLet = "Hello 2do desde let" // Let no permite definir nuevamente la variable || SyntaxError: Identifier 'helloLet' has already been declared
const helloConst = "Hello desde const"

function printHellos(params) {
    console.log(helloVar)
    console.log(helloLet)
    console.log(helloConst)   
}

printHellos()

const helloWorld = () => {
    globalVar = "Hello desde Funtion Arrow sin asignar var let o const"
}