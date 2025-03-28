console.log("hello world, js fo react")
/*
console.log("---------|||||||||||||||||---------")
console.log("Funciones en JS")
console.log("---------|||||||||||||||||---------")
console.log("")
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

console.log("---------------**********-----------")
console.log("---------------**********-----------")

console.log("---------|||||||||||||||||---------")
console.log("Objetos en JS")
console.log("---------|||||||||||||||||---------")
//los objetos se definen como lo que esta dentro de unas llaves {}
//tienen estructura llave valor eje:
//{
//  llave: valor
//}
//si se van a tener varios atributos se separan por ,
//se pueden almacenar por ejemplo en constantes o varaibles


const user = {
    name:"Joselito",
    lastName:"Perez",
    age:38,
    addres:{
        country: "Colombia",
        street: "quety 15",
        number: "importa number 7-22"
    },
    friends: ["luna","antonella","dante","Niño"],
    active: true,
    sendEmail: function(){
        return "sending email..."
    }
}
console.log(user)

//como acceder a llaves especificas de un objeto ?
//console.log(user.name)
console.log("el nombre del usuario es: "+ user.name)
console.log("el usuario vive en: "+ user.addres.country)

console.log("-----------------------------------")
console.log("---------------**********-----------")
console.log("---------------**********-----------")

console.log("---------|||||||||||||||||---------")
console.log("shorthand property names")
console.log("---------|||||||||||||||||---------")
//se puede acortar la definicion y asignación de un objeto

const name = "laptop"
const price = 3000

//dentro de un objeto como el siguiente newProduct es igual
// que newProduct1 ya que para la JS es la misma sintaxis
//const newProduct = {
//    name: name,
//    price: price
//}
//console.log(newProduct)

const newProduct1= {
    name,
    price
}
console.log(newProduct1)

console.log("-----------------------------------")
console.log("---------------**********-----------")
console.log("---------------**********-----------")
*/

console.log("---------|||||||||||||||||---------")
console.log("DOM y su manipulación")
console.log("---------|||||||||||||||||---------")
//DOM es Document Object Model (el archivo que se genera con el html)

const title= document.createElement('h1')
title.innerText = 'hola mundo desde JS'

const button= document.createElement('button')
button.innerText= 'click'

document.body.append(title)
document.body.append(button)

//event handlers - controlar acciones que puede hacer un objeto ?
button.addEventListener('click', function () {
    //console.log("hola mundo")
    title.innerText = 'Texto actualizado con JS'
    alert('se realizo un click')
})

console.log("-----------------------------------")
console.log("---------------**********-----------")
console.log("---------------**********-----------")