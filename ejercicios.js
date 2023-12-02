// Ejercicio 5

const $titulo = document.getElementById("mititulo")
const $btnTitulo = document.getElementById("miboton")

$btnTitulo.addEventListener("click",e=> {
    $titulo.innerHTML = "Titulo cambiado desde Javascript"
})

// Ejercicio 6

const $empezarJuego = document.getElementById("btnPreguntas")
$empezarJuego.addEventListener("click",e =>{
    let puntaje = 0
    let controlador = 0
    let preguntas = [
        {0:"¿En qué país se usó por primera vez la bomba atómica? \n 1-Alemania  \n 2-Irán \n 3-Japón "},
        {1:"¿En que año se inventó la imprenta? \n 1-1685  \n 2-1440 \n 3-1534 "},
        {2:"¿Cúal es el planeta rojo? \n 1-Marte  \n 2-Mercurio \n 3-Venus "},
        {3:"¿Por dónde absorven agua las plantas? \n 1-Por las hojas  \n 2-Por los troncos \n 3-Por las raices "},
        {4:"¿Cúal es el hueso más largo del cuerpo humano? \n 1-Tibia  \n 2-Femur \n 3-Isquiotibial "}
    ];
    
    let respuestas = {
        0: 3,
        1: 2,
        2: 1,
        3: 3,
        4: 2
    }
    while (controlador < preguntas.length) {
        for (const i in preguntas) {
                let respuesta = prompt(preguntas[i][i])
            if (respuesta == respuestas[i]) {
                puntaje += 10
            }else {
                alert(`Te equivocaste, la respuesta correcta era la opción ${respuestas[i]}`)
            }
            controlador++
        }
    }
    alert(`Felicitaciones !! Tu puntaje fue de ${puntaje} puntos`)
})



//Ejercicio 1 

const misFrutas1 = ["Anana", "Manzana", "Pera", "Banana", "Naranja"];

// console.log(misFrutas1[2]);

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

const revertirPalabra = (palabra) => {
    palabraDividida = palabra.split("")
    let resultado = ""
for(let i = palabraDividida.length-1 ;i >= 0;i--) {
    resultado += palabraDividida[i]
}
console.log(resultado);
}




const revertirPalabra2 = (palabra) => {
    let palabraDividida = palabra.split(" ")
    let resultado = []
    for(let i = palabraDividida.length-1; i >= 0; i--) {
        resultado.push(palabraDividida[i]) 
    }
    resultado = resultado.join(" ")
    console.log(resultado);

}

