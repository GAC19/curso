//FUNCIONES DECLARADA 
//FUNCIONES EXPRESADA
//FUNCIONES FECHA
//FUNCIONES AUTOEJECUTABLE ANONIMAS O NO ANONIMAS

(()=>{console.log('AUTOEJECUTABLE MODERNA')})() //AUTOEJECUTABLE MODERNA

//FUNCIONES DECLARADA
function saludo(saludo){
    document.write(saludo)
}

saludo('hola');


function usuario(nombre,apellido){
    document.write(nombre, apellido)
    console.log('mi nombre es', nombre, apellido)
}

usuario('gustavo','acevedo')


//FUNCIONES EXPRESADA

const saltar=function(){
    console.log('estoy saltando')
}
saltar();

//FUNCIONES FLECHAS

const suma=(num1,num2)=>{
    console.log(num1+num2)
}
suma(2,9)

const resta=(num1,num2)=>console.log(num1-num2)
resta(2,9)

//AUTOEJECUTABLE
let saludo2=(()=>{console.log('buenas noches')})()