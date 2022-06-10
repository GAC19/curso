/*
onblur(): cuando precionas fuera del explorador se hable una ventana
onchange(): al modificar el valor del componente
onbeforeunload(): se lanza al intenter cerrar una ventana
onclick(): al hacer clic en un elemento
ondblclick(): al hacer un doble click
onerror(): si se produce un error al cargar un apaguina web
onfocus(): cuando selecciono o pulso donde quiero
onkeydown(): al pulsar cualquier tecla
onkeypress(): al pulsar una tecla corresondiente a un caracter
onkeyup(): al levantar cualquier una tecla
onload(): se produc al terminar de cargarse la pagina web
onmousedown():al presionar un boton del raton
onmousemove(): se ha movido el raton
onmouseout(): el curso del raton sale del area ocupada
onmouseover(): el curso del raton entra al area ocupada
onmouseup(): al dejar de presionar un boton del raton
onresize(): al redimensionar un ventana o frame
onselect(): cuando se seleciona un texto
onunload(): al salir de la paguina web
*/

const google=document.querySelector('#google')
const youtube=document.querySelector('#youtube')
const cambio=document.querySelector('#cambio')
const cambio2=document.querySelector('#cambio2')
const cuerpo=document.querySelector('body')
const formulario=document.querySelector('#formulario')
const boton=document.querySelector('#pulsar')

    
google.addEventListener('click',()=>{
    window.open('https://www.google.com')
})

youtube.addEventListener('click',()=>{
    window.open('https://www.youtube.com')
})

cambio.addEventListener('click',()=>{
    cuerpo.style.backgroundColor='green'
    cambio.style.backgroundColor='green'
    cambio.style.color='yellow'
})

cambio2.addEventListener('click',()=>{
    cuerpo.style.backgroundColor='blue'
    // alert('has cambiado el fondo de color azul')
})

window.addEventListener('blur',(e)=>{
    cuerpo.style.backgroundColor='orange'
    // alert('has redimensionado la ventana')
})

formulario.addEventListener('keydown',(e)=>{
    formulario.style.backgroundColor='orangered'
    boton.style.backgroundColor='red'

})