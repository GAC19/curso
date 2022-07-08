// **********************************************
//TIMER Q SE REALIZA POR UNA SOLA VEZ

// const pantalla=document.querySelector('body')

// let retardo=setTimeout(()=>{
//     pantalla.style.backgroundColor='skyblue'
//     clearTimeout(retardo)
// },5000)


// **********************************************
// TIMER Q EFECTURA VARIAS VECES (se ve en consola)

let contador=0;

let newcontador=setInterval(()=>{

    contador>10 ? clearInterval(newcontador): console.log(contador++)

},1000)

// **********************************************

// REPETIR VARIAS VECES UNA FUNCION

// function holamundo(){
//     let saludo=window.requestAnimationFrame(holamundo)
//     console.log('hola mundo')
//     saludo>300 ? window.cancelAnimationFrame(saludo):null
// }
// holamundo()

// **************************************************