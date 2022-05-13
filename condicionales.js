document.write('CONDICIONALES')

let frio=true;

if(frio){
    console.log('me pondre un abrigo')
}
else{
    console.log('ocupare solo una polera')
}

let oferta;
let hora=11;

if(hora>=10 && hora<=8){
    console.log('el cafe esta en oferta')
}
else if(hora>10 && hora<=12){
    console.log('el helado esta en oferta')
}
else{
    console.log('no ahi oferta')
}

let edad=18;

switch(edad){
    case 18: 
    console.log('tienes 18 años')
    break;
    case 19: console.log('tienes 19 años')
    break;
    case 20: console.log('tienes 20 años')
    break;
    default: console.log('no tiene edad')
}