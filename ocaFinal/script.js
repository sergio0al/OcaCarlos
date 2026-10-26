const dado = document.querySelector("#dado")
let divA = document.querySelector(".jugadorA")
let divB = document.querySelector(".jugadorB")
const turnoTxt = document.querySelector("#turnoTxt")

const tablero = [
    { A: { x: 26, y: 630 }, B: { x: 80, y: 600 } }, 
    { A: { x: 26, y: 530 }, B: { x: 80, y: 500 } }, 
    { A: { x: 26, y: 410 }, B: { x: 80, y: 430 } },
    { A: { x: 26, y: 320 }, B: { x: 80, y: 310 }, funcion: function(jugador, div){jugador.posicion = 7;moverFicha(div, jugador);}},
    { A: { x: 26, y: 180 }, B: { x: 80, y: 200 } },
    { A: { x: 26, y: 80 }, B: { x: 80, y: 100 } },
    { A: { x: 176, y: 40 }, B: { x: 176, y: 100 } },
    { A: { x: 286, y: 40 }, B: { x: 276, y: 100 } },
    { A: { x: 356, y: 40 }, B: { x: 366, y: 100 } },
    { A: { x: 460, y: 40 }, B: { x: 450, y: 100 } },
    { A: { x: 460, y: 40 }, B: { x: 450, y: 100 } },

];
const infoJugadores = {
    A: { posicion: 0 },
    B: { posicion: 0},
};
let turno = "A"


let preguntes = [
    {pregunta: "¿Qué selección ha ganado más Mundiales?", opciones: ["A) Francia", "B) Argentina", "C) Brasil"], correcta: "C"},
    {pregunta: "¿Cuántos jugadores tiene un equipo de fútbol en el campo al comenzar un partido?", opciones: ["A) 10", "B) 11", "C) 12"], correcta: "B"},
    {pregunta: "¿Qué jugador es conocido como “La Pulga”?", opciones: ["A) Cristiano Ronaldo", "B) Lionel Messi", "C) Neymar"], correcta: "B"},
    {pregunta: "¿Qué país ganó el Mundial de 2010?", opciones: ["A) España", "B) Países Bajos", "C) Alemania"], correcta: "A"},
    {pregunta: "¿Cuánto dura un partido de fútbol sin contar la prórroga?", opciones: ["A) 80 minutos", "B) 90 minutos", "C) 100 minutos"], correcta: "B"},
    {pregunta: "¿En qué país se celebró el Mundial de 2014?", opciones: ["A) Sudáfrica", "B) Rusia", "C) Brasil"], correcta: "C"},
    {pregunta: "¿Qué equipo ha ganado más Champions League?", opciones: ["A) Real Madrid", "B) AC Milan", "C) FC Barcelona"], correcta: "A"},
    {pregunta: "¿Cómo se llama el estadio del FC Barcelona?", opciones: ["A) Santiago Bernabéu", "B) Camp Nou", "C) Metropolitano"], correcta: "B"},
    {pregunta: "¿Qué país ganó el Mundial de 2022?", opciones: ["A) Francia", "B) Croacia", "C) Argentina"], correcta: "C"},
    {pregunta: "¿Qué color de tarjeta significa expulsión?", opciones: ["A) Amarilla", "B) Roja", "C) Azul"], correcta: "B"},
    {pregunta: "¿Cuántos jugadores hay en el campo por equipo en un partido de fútbol 11?", opciones: ["A) 9", "B) 10", "C) 11"], correcta: "C"},
    {pregunta: "¿Qué jugador ganó el Balón de Oro en 2008?", opciones: ["A) Cristiano Ronaldo", "B) Kaká", "C) Lionel Messi"], correcta: "A"},
    {pregunta: "¿Cómo se llama el trofeo que recibe el campeón del mundo?", opciones: ["A) Copa del Mundo FIFA", "B) Copa América", "C) Copa Libertadores"], correcta: "A"},
    {pregunta: "¿Qué selección es conocida como “La Roja”?", opciones: ["A) Portugal", "B) España", "C) Bélgica"], correcta: "B"},
    {pregunta: "¿Qué posición juega el jugador que puede usar las manos dentro de su área?", opciones: ["A) Defensa", "B) Delantero", "C) Portero"], correcta: "C"},
]




let preguntaOn = false
let divPregunta = document.querySelector("#divPregunta")
function cargarPregunta(posicioneAvanzada, div, jugador){
    preguntaOn = true
    let numero = Math.floor(Math.random() * preguntes.length)


    divPregunta.innerHTML = `
    <form id="formPregunta">
        <h2>${preguntes[numero - 1].pregunta}</h2>
        <ul>
            <li>${preguntes[numero - 1].opciones[0]}</li>
            <li>${preguntes[numero - 1].opciones[1]}</li>
            <li>${preguntes[numero - 1].opciones[2]}</li>
        </ul>
        <input type="text" name="Opcion" id="option">
        <input type="submit">
        <p id="mensajeRespuesta"></p>
    </form>`



    let formPregunta = document.querySelector("#formPregunta")
    let option = document.querySelector("#option")


    formPregunta.addEventListener("submit", (e) =>{
        e.preventDefault()
        option.value = option.value.trim().toUpperCase();
        if(option.value === preguntes[numero - 1].correcta){
            jugador.posicion += posicioneAvanzada
            moverFicha(div, jugador)
            turno = turno === "A" ? "B" : "A" 
            divPregunta.innerHTML = ""
            preguntaOn = false

            const casilla = tablero[jugador.posicion]
            if(casilla.funcion){
                casilla.funcion(jugador, div)
            }
        }else{
            moverFicha(div, jugador)
            turno = turno === "A" ? "B" : "A" 
            divPregunta.innerHTML = ""
            preguntaOn = false
        }
    })
}








dado.addEventListener("click", function(){
    if(!preguntaOn){
        let numero = Math.floor(Math.random() * 6 + 1 )
        dado.innerHTML = `<p>${numero}</p>`
        let jugador = turno === "A" ? infoJugadores.A : infoJugadores.B
        let div = turno === "A" ? divA : divB
        cargarPregunta(numero, div, jugador)
    }
})
function moverFicha(div, jugador){
    div.style.setProperty("--x", tablero[jugador.posicion][turno].x + "px")
    div.style.setProperty("--y", tablero[jugador.posicion][turno].y + "px")
}






const click = document.querySelector("#img")
click.addEventListener("click", function(e){
    console.log(e.clientX)
    console.log(e.clientY)
})