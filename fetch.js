// ----------------------------------------

// CON JSON QUE SE ENCUENTRA GUARDADO EN NUESTRO EQUIPO

// function cargaarchivo(){
//     fetch('./users.json')
//     .then(res=>res.json())
//     .then(res=>console.log(res))
// }
// cargaarchivo()

// ----------------------------------------

// CON JSON QUE ESTA EN UNA PAQUINA EXTERNA


// https://jsonplaceholder.typicode.com/users
// FETCH

const getUser=async()=>{
    try{
        const res=await fetch('https://jsonplaceholder.typicode.com/users')
        const users=await res.json()
        console.log(users)

        for(user of users){
            document.body.innerHTML+=`
            <ul>
                <li> 
                    ${user.id} <br>
                    ${user.name} <br>
                    ${user.website} <br>
                    ${user.address} <br>
            
                </li>
            </ul>
            `
        }

        // foreach funciona en laravel mediante el controlador que lo llama y con el foreach 
        // lo ingresas al HTML
        

    }catch(error){
        console.log(error)
    }finally{
        console.log("Proceso Terminado")
    }
}
getUser()







// ----------------------------------------