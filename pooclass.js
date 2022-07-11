class automovil{
    constructor(marca,modelo,color,tipo){
        this.marca=marca
        this.modelo=modelo
        this.color=color
        this.tipo=tipo
    }

    // GET/SET  SIEMPRE DEBEN IR JUNTOS
    // coger
    get getcolor(){
        return this.color
    }

    // poner
    set setcolor(color){
        this.color=color
    }

    // METODO

    velocidad(velocidad){
        if(velocidad>200){
            return "estas sobre la velocidad maxima"
        }else{
            return 'tu velocidad es de '+ velocidad + ' km/h te falta ' + (200-velocidad) + ' Km/h para sobrepasar el limite'
        }
    }
    
    // ESTATICO
    static ruedas(){
        return "las ruedas de serie"
    }
}

// INSTANCIA


const coche=new automovil('fiat','strada','plateado','camioneta')
console.log(coche)

coche.setcolor="verde"
console.log(coche)

console.log(coche.velocidad(100))
console.log("mi auto tiene "+ automovil.ruedas())