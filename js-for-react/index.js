console.log("hello world, js fo react")

console.log("Funcion hello")
function hello(userName){
    return "hola " + userName
}

console.log(hello('Alejandro'))
console.log("-----------------------------------")

console.log("Funcion add")
function add(num1,num2){
    return num1+num2
}

console.log(add(5,2))
console.log("-----------------------------------")

console.log("que es NaN")
// es cuando se le pasa un parametro que no existe a una funcion para que opere
console.log(add(3))
//es lo mismo que console.log(add(3,undefined))
console.log("-----------------------------------")

console.log("Funcion add contra NaN")
function addNotNaN(num1,num2){
    if(num1 === undefined ){
        num1=0 
    }
    if(num2 === undefined){
        num2=0 
    }
    return num1+num2
}
console.log(addNotNaN(3))
console.log("-----------------------------------")

console.log("Funcion add mejorada")
//valores por default en caso que los valores no sean definidos
function addUpgraded(num1=0,num2=0){
    return num1+num2
}
console.log(addNotNaN(3))
console.log("-----------------------------------")