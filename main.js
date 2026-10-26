const nomJugador = "Sergio"
let MAX_TIRADES = 3

let profileInfo = document.querySelector("#profile-info")

profileInfo.innerHTML = `Jugador ${nomJugador} Tiradas ${MAX_TIRADES}`


function sumar(a, b){
    return(a+b)
}

function multiplicar(a, b){
    return(a*b)
}

let inputUno = document.querySelector("#input-uno")
let inputDos = document.querySelector("#input-dos")

let sumarButton = document.querySelector("#sumar-button")
let multiplicarButton = document.querySelector("#multiplicar-button")
let resultado = document.querySelector("#resultado")

sumarButton.addEventListener("click", function(){
    resultado.innerHTML = `${sumar(Number(inputUno.value), Number(inputDos.value))}`
})

multiplicarButton.addEventListener("click", function(){
    resultado.innerHTML = `${multiplicar(Number(inputUno.value), Number(inputDos.value))}`
})


let inputNumero = document.querySelector("#inputNumero")

inputNumero.addEventListener("input", function() {
    resultado.innerHTML = ""
    if (inputNumero.value <= 0) {
        resultado.innerHTML = `El número ha de ser mayor a 0.`
    } else if (inputNumero.value > 10) {
        resultado.innerHTML = `El número ha de ser menor a 10.`
    } else if (inputNumero.value <= 10) {
        for (let i = 1; i < 10; i++) {
            resultado.innerHTML += `${inputNumero.value} * ${i} = ${inputNumero.value * i}<br>`
        }
    }
})


let estat = document.querySelector("#estado-select")
let mensaje = "No hay mensaje aun!"
let estadoMensaje = document.querySelector("#estadoMensaje")

estat.addEventListener("change", function(){
    
    switch (estat.value){
        case "inici":
            mensaje = "Es el inici de la partida!"
            break;
        case "turnoA":
            mensaje = "Es el torn del jugador A"
            break;
        case "turnoB":
            mensaje = "Es el torn del jugador B"
            break;
        case "final":
            mensaje = "Es el torn del final de la partida!"
            break;
        default:
            break;
    }
    estadoMensaje.innerHTML = `${mensaje}`
})

let texto = document.querySelector("#texto")
texto.textContent = "Texto resaltado"
let resaltadoButton = document.querySelector("#resaltar-button")


resaltadoButton.addEventListener("click", function(){
    texto.classList.add("destacado")  
})


let lanzarButton = document.querySelector("#lanzar-button")
let textoNumeroDado = document.querySelector("#textoNumeroDado")
let turno = "A"
let numeroDado = 0

lanzarButton.addEventListener("click", function(){
    numeroDado = Math.round(Math.random()*6)
    if(turno == "A"){
        textoNumeroDado.textContent = `Ha salido el nuermo: ${numeroDado} para A`
        turno = "B"
    }else if(turno == "B"){
        textoNumeroDado.textContent = `Ha salido el nuermo: ${numeroDado} para B`
        turno = "A"
    }
})



let formPlayer = document.querySelector("#formPlayer")
let namePlayer = document.querySelector("#namePlayer")
let nameTextPlayer = document.querySelector("#nameTextPlayer")

formPlayer.addEventListener("submit", function(e){
    e.preventDefault()
    nameTextPlayer.textContent = `Tu nombre es ${namePlayer.value}`
})



const caselles = ["Start", "Poble", "Pont", "Casa", "Bosc", "Mola", "Final"];
let nomCasella = document.querySelector("#nomCasella")

lanzarButton.addEventListener("click", function(){
    nomCasella.textContent = `Has caigut a: ${caselles[numeroDado]}`
})

let preguntes = [
    {pregunta: "¿Qué selección ha ganado más Mundiales?", opciones: ["1) Francia", "2) Argentina", "3) Brasil"], correcta: 2},
    {pregunta: "¿Cuántos jugadores tiene un equipo de fútbol en el campo al comenzar un partido?", opciones: ["1) 10", "2) 11", "3) 12"], correcta: 1},
    {pregunta: "¿Qué jugador es conocido como “La Pulga”?", opciones: ["1) Cristiano Ronaldo", "2) Lionel Messi", "3) Neymar"], correcta: 1},
]

let sectionPregunta = document.querySelector("#section-Pregunta")
let formularioUsuarioOpcion = document.querySelector("#formularioUsuarioOpcion")
let inputUsuarioOpcion = document.querySelector("#option")
let mensajeRespuesta = document.querySelector("#mensajeRespuesta")
let nuemroDePregunta = 0

function cargarPregunta(){
    sectionPregunta.innerHTML = `
    <h2>${preguntes[nuemroDePregunta].pregunta}</h2>
    <ul>
        <li>${preguntes[nuemroDePregunta].opciones[0]}</li>
        <li>${preguntes[nuemroDePregunta].opciones[1]}</li>
        <li>${preguntes[nuemroDePregunta].opciones[2]}</li>
    </ul>`
}

cargarPregunta()

formularioUsuarioOpcion.addEventListener("submit", function(e){
    e.preventDefault()

    if(Number(inputUsuarioOpcion.value) - 1 == preguntes[nuemroDePregunta].correcta){
        mensajeRespuesta.classList.add("correcto")
        mensajeRespuesta.classList.remove("error")
        mensajeRespuesta.textContent = `Perfecto la respuesta ha sido correcta!`
        inputUsuarioOpcion.value = ""
        nuemroDePregunta = nuemroDePregunta + 1
        cargarPregunta()
    }else{
        mensajeRespuesta.classList.add("error")
        mensajeRespuesta.classList.remove("correcto")
        mensajeRespuesta.textContent = `La respuesta es erronea :(`
    }

})


let casellesNombre = ["0: Salida (¡Empieza la partida!)", "1: Casilla normal", "2: Casilla normal", "3: La Oca (De oca a oca y tiro porque me toca. Avanzas a la 7)", "4: Casilla normal", "5: El Puente (De puente a puente y tiro porque me lleva la corriente. Avanzas a la 10)", "6: Casilla normal",
  "7: La Oca (De oca a oca y tiro porque me toca. Avanzas a la 11)",
  "8: La Posada (Estás cansado. Pierdes 1 turno sin jugar)",
  "9: Casilla normal",
  "10: El Puente (De puente a puente y tiro porque me lleva la corriente. Retrocedes a la 5)",
  "11: La Oca (De oca a oca y tiro porque me toca. Avanzas a la 15)",
  "12: Casilla normal",
  "13: El Pozo (Caes al pozo. No juegas hasta que otro jugador te rescate)",
  "14: Casilla normal",
  "15: La Oca (De oca a oca y tiro porque me toca. Avanzas directo a la meta)",
  "16: El Laberinto (Te pierdes. Retrocedes a la casilla 9)",
  "17: La Calavera (¡Oh, no! Muerte. Vuelves a la casilla 0 de Salida)",
  "18: Casilla normal",
  "19: ¡Meta! (Has llegado al Gran Jardín de la Oca. ¡Ganaste!)"
];


let casillasEspeciales = [[4, 9], [11, 1], [16, 16]]

let sectionTabla = document.querySelector("#tabla")

for(let i = 0; i < casellesNombre.length; i++){
    sectionTabla.innerHTML += `<p class="casilla">${casellesNombre[i]}<p>`
}

const jugadorA = {
  nom: "A",
  posicio: 0,
  activat: true,
};

const jugadorB = {
  nom: "B",
  posicio: 0,
  activat: false,
};


let datosJugador = document.querySelector("#datosJugador")

function mostrarDatos(jugadorMostrar){
    datosJugador.innerHTML = `<p>Nombre ${jugadorMostrar.nom}<p><p>Posicion ${jugadorMostrar.posicio}<p><p>${casellesNombre[jugadorMostrar.posicio]}</p>`
}

lanzarButton.addEventListener("click", function(){
    if(jugadorA.activat == true){
        jugadorA.activat = false
        jugadorA.posicio = jugadorA.posicio + numeroDado
        mostrarDatos(jugadorA)

        for (let especial of casillasEspeciales) {
            if (jugadorA.posicio == especial[0]) {
                datosJugador.innerHTML += `<p>Has caido en una casilla espcial</p>`
                console.log("Has caido en una casilla espcial")
                jugadorA.posicio = especial[1];
            }
        }



        jugadorB.activat = true
      

    }else if(jugadorB.activat == true){
        jugadorB.activat = false
        jugadorB.posicio = jugadorB.posicio + numeroDado

        jugadorA.activat = true
        mostrarDatos(jugadorB)
    }
})


const datosDado = document.querySelector("#datosDado")
lanzarButton.addEventListener("click", function(){
    const tirarDau = () => Math.floor(Math.random() * 6) + 1
    const missatge = `Jugador ${nomJugador} ha tret ${tirarDau()}`;
    datosDado.textContent = missatge.toLocaleUpperCase()
})


const fecha = new Date();
const fechaSection = document.querySelector("#fechaSection")
fechaSection.innerHTML = `${fecha} / ${fecha.getDate()} / ${fecha.getMonth()} / ${fecha.getFullYear()}`
fechaSection.innerHTML = `Partida iniciada: ${fecha.getDate()}/${fecha.getMonth()}/${fecha.getFullYear()}`