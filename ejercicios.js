//Ejercicio 1 

const misFrutas1 = ["Anana", "Manzana", "Pera", "Banana", "Naranja"];

console.log(misFrutas1[2]);

//Ejercicio 2

const saberEdadFutura = () => {
    let edad = prompt("¿Cuál es tu edad)?")
    edad =+(edad) + 10
    
console.log(`En 10 años tendras ${edad} años`);
}


//Ejercicio 3 

const edad = () => {
let edad = prompt("Inserta tu edad")
    
    if (edad < 18) {
        console.log("no puedes entrar al sistema");
    }
    if (edad >= 18 && edad < 21) {
        console.log("Necesitas verificación por tarjeta de crédito");
    }
    if (edad >= 21) {
        console.log("puedes ingresar sin problemas");
    }
}



const misFrutas2 = ["Anana", "Manzana", "Pera", "Banana", "Naranja","Uva","Sandia", "Melon"];

//Ejercicio 4

const cantidadDeFrutas = () => {
    misFrutas2.forEach((el)=> {
        console.log(el);
        })
}
