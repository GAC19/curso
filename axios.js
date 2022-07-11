const getUser = async () => {
    try {
        const res = await axios('https://jsonplaceholder.typicode.com/users')
        const users = await res.data
        console.log(users)

        for (user of users) {
            document.body.innerHTML += `
            <ul>
                <li> 
                    Id: ${user.id} <br>
                    Nombre: ${user.name} <br>
                    Fono: ${user.phone} <br>
                    Web: ${user.website} <br>
                    Ciudad: ${user.address['city']}<br>
                    ${user.address.geo['lat']}<br>
                    ${user.address.geo['lng']}<br>
                </li>
            </ul>
            `
        }

        // foreach funciona en laravel mediante el controlador que lo llama y con el foreach 
        // lo ingresas al HTML


    } catch (error) {
        console.log(error)
    } finally {
        console.log("Proceso Terminado")
    }
}
getUser()


