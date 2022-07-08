function tiburon(nombre, cientifico){
    this.nombre=nombre
    this.cientifico=cientifico
}

// METODOS 
tiburon.prototype.atacar=function(){
    document.write('cuidado fuera del agua')
}

// INSTANCIA DE tiburon
const tintorera= new tiburon('tintorero', 'glauca')
console.log(tintorera.atacar())
console.log(tintorera)