/*
onblur(): se pierde el foco
onchange(): al modificar el valor del componente
onbeforeunload(): se lanza al intenter cerrar una ventana
onclick(): al hacer clic en un elemento
ondblclick(): al hacer un doble click
onerror(): si se produce un error al cargar un apaguina web
onfocus(): cuando un componente obtiene un foco
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
    
google.addEventListener('click',()=>{
    window.open('https://www.google.com')
})
ñ
youtube.addEventListener('click',()=>{
    window.open('https://www.youtube.com')
})

cambio.addEventListener('click',()=>{
    cuerpo.style.backgroundColor='green'
})

cambio2.addEventListener('click',()=>{
    cuerpo.style.backgroundColor='blue'
})