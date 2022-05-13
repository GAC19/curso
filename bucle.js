let timer=0;

while(timer<=10){
    console.log('timer:'+timer)
    timer++;
}

let timer2=0;
do{
    timer2++;
    console.log('timer2:' + timer2)
}while(timer2<10);


for(let timer3=1;timer3<=10;timer3++){
    console.log('timer3:',timer3);
}



let frutas=['manzana','melon','platano']

for(let i=0;i<=frutas.length;i++){
    console.log(frutas[i]);
    document.write(frutas[i]+'\n')
}

for(const f of frutas){
    console.log(f);
}

const antecedentes={
    
}