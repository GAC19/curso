// APPEND: varias en un caracter Y 
// APPENDCHILD: solo uno


console.log(document.body)

let caja=document.createElement('div')
let caja2=document.createElement('div')

caja.style.width='100px'
caja.style.height='100px'
caja.style.backgroundColor='green'
caja.style.borderRadius='40px'

// document.body.appendChild(caja)

caja2.style.width='100px'
caja2.style.height='100px'
caja2.style.backgroundColor='red'
caja2.style.borderRadius='100px'

// document.body.appendChild(caja2)
document.body.append(caja,caja2)

//NOS DICE LA CODIFICACION DE CARACTER
console.log(document.characterSet)
 
//CUANTOS HIJO TIENE EL DOCUMENTO
console.log(document.childElementCount)

console.log(document.childNodes)



//SELECIONAR ELEMENTO
let subt=document.querySelector('#subt')
subt.style.color="red"

let subt2=document.querySelector('#subt2')
subt2.style.color='blue'