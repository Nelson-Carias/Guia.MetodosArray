//EJERCICIO 5
const Usuarios = [
    {
        name : "Rafael Perez",
        email : "rafael@gmail.com"
    },
    {
        name : "Rosario Perez",
        email : "rosario@gmail.com"
    },
    {
        name : "Rodrigo Avila",
        email : "rodrigo@gmail.com"
    },
    {
        name : "Alberto Campos",
        email : "alberto@gmail.com"
    },
    ];

    const result = Usuarios.filter((x) => x.email === "rosario@gmail.com")

    console.log(result)