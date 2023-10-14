// EJERCICIO 1
// const numeros = [10, "5", "7", 9, 23, "17"]

// const result = numeros.map(x => Number(x)).map((x) => x * 4)

// console.log(result)





//EJERCICIO 2
// const frutas = ["Uva", "Cereza", "Banana", "Melon"]

// const result = frutas.filter((x) => x.length === 6)

// console.log(result)





// EJERCICIO 3
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// numeros.forEach(x => {
//     console.log(`7 X ${x} = ${x * 7}`)
// })





//EJERCICIO 4
// const frutas = ["manzana", "limon", "sandia", "pera", "toronja", "naranja"]
// const result = frutas.includes("sandia")

// console.log(result)




//EJERCICIO 5(A)
// const Usuarios = [
//     {
//         name : "Rafael Perez",
//         email : "rafael@gmail.com"
//     },
//     {
//         name : "Rosario Perez",
//         email : "rosario@gmail.com"
//     },
//     {
//         name : "Rodrigo Avila",
//         email : "rodrigo@gmail.com"
//     },
//     {
//         name : "Alberto Campos",
//         email : "alberto@gmail.com"
//     },
//     ];

//     const result = Usuarios.filter((x) => x.email === "rosario@gmail.com")

//     console.log(result)





//EJERCICIO 5(B)
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const result = numeros.reverse()

// console.log(result)





//EJERCICIO 6 
// const numeros = [1, 2, 3, 4, 5, 6, 7]

// const result = numeros.every(numeros => numeros > 5)

// console.log(result)





//EJERCICIO 7
// const arreglo1 = [1, 2, 3, 4, 5]
// const arreglo2 = ["Juan", "Perez", "Lopez"]
// const arreglo3 = [true, false]

// const result = arreglo1.concat(arreglo2, arreglo3)

// console.log(result)




//EJERCICIO 8
// const numeros = [1, 2, 3, 4, 5, 6 , 7, 8, 9, 10]

// const result = numeros.shift()

// console.log(numeros)





//EJERCICIO 9
// const numeros = [12, 6, 7, 8, 11, 10, 9, 5, 3, 43]

// const result = numeros.findIndex((x) => x === 5)

// console.log(result)





//EJERCICIO 10
const nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const result = nombres.slice(0, 10).map((x) => x * 3)

console.log(result)