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

console.log("---------|||||||||||||||||---------")
console.log("Destructuring")
console.log("---------|||||||||||||||||---------")

const user = {
    name :'Joel',
    age : 30
}

//usar un objeto como parametro
function printInfo(user){
    //return '<h1>Hola '+user['name']+'</h1>'
    return '<h1>Hola '+user.name+'</h1>'
}


//destructuracion
function printInfo1({name}){
    return '<h1>Hola '+name+'</h1>'
}

function printInfo2(usuario){
    const {name,age} = user
    console.log(name,age)
    return '<h1>Hola '+name+'</h1>'
}

console.log(printInfo(user))

document.body.innerHTML = printInfo2(user)

console.log("-----------------------------------")
console.log("---------------**********-----------")
console.log("---------------**********-----------")


console.log("---------|||||||||||||||||---------")
console.log("Funciones anonimas")
console.log("---------|||||||||||||||||---------")
//definición de una función anonima
// function(){
//    hacer algo
//}

//ejemplo 1
// Crear y mostrar una funcion normalmente
function start(){
    return 'Starting...'
}
console.log(start())

//como una función anonima
//function(){
//    return 'Starting...'
//} //para tener como retorno toda la funcion

//como se puede usar
console.log(function(){
    return 'Starting...'
//}) //para tener como retorno toda la funcion
}()) //para tener como retorno lo que retorne la funcion

//ejemplo 2
const button = document.createElement('button')
button.innerText= 'Clickeame'

//opcion 1 sin usar funciones anonimas
//function handleClick(){
//    alert('clickeado')
//}

//butoon.addEventListener('click',handleClick())

//opcion 2A usando la funcion dentro del mismo addEventListener
//button.addEventListener('click',function handleClick(){
//    alert('clickeado')
//})

//opcion 2B usando funciones anonimas
button.addEventListener('click',function(){
    alert('clickeado')
})

document.body.append(button)

console.log("-----------------------------------")
console.log("---------------**********-----------")
console.log("---------------**********-----------")

console.log("---------|||||||||||||||||---------")
console.log("Funciones flecha/arrow functions")
console.log("---------|||||||||||||||||---------")
//funcion normal
//function add(x,y){
//    return x+y
//}

//funcion flecha
//const add = (x,y) => {
//    x+y
//}

const button = document.createElement('button')
button.innerText='Click me'
button.addEventListener('click', () =>{
    alert('clicked')
})
document.body.append(button)

//funciones flecha de una sola linea
const showText = () => 'hola mundo'
const showNumber = () => 22
const showBoolean = () => true
const showArray = () => [1,2,'Joel',3,4]

//las funciones flecha para objetos tienen una sintaxis diferente
//para no escribir toda la funcion con el fin que siga siendo una funcion de una linea
//como la siguiente
//const showObject = () => {
//    return { name : 'Joel'}
//} 

//se escribe () => ({llave:valor})
const showObject = () => ({name:'Joel'})


console.log(showText())
console.log(showNumber())
console.log(showBoolean())
console.log(showArray())
console.log(showObject()) //console.log(showObject().name) para ver un atributo del objeto

console.log("-----------------------------------")
console.log("---------------**********-----------")
console.log("---------------**********-----------")
*/
console.log("---------|||||||||||||||||---------")
console.log("manejo del return")
console.log("---------|||||||||||||||||---------")

const button = document.createElement('button')
button.innerText ='click me'

const isAuthorized = true

//en vez de usar
//button.addEventListener('click', () => {
//    if(isAuthorized){
//        alert('esta autorizado')
//    }else{
//        alert('no esta autorizado')
//    }
//})

//por legibilidad y buenas practicas se puede suar
button.addEventListener('click', () => {
    if(isAuthorized){
        return alert('esta autorizado')
    }
    alert('no esta autorizado')
})

document.body.append(button)

console.log("-----------------------------------")
console.log("---------------**********-----------")
console.log("---------------**********-----------")

/*
console.log("---------|||||||||||||||||---------")
console.log("Funciones flecha/arrow functions")
console.log("---------|||||||||||||||||---------")

console.log("-----------------------------------")
console.log("---------------**********-----------")
console.log("---------------**********-----------")
*/