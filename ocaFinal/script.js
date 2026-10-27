import { preguntes } from "./data.js"

const dado = document.querySelector("#dado")
let divA = document.querySelector(".jugadorA")
let divB = document.querySelector(".jugadorB")


let numDado = document.querySelectorAll(".numDado")

const tablero = [
    { A: { x: 30, y: 690 }, B: { x: 86, y: 685 } }, 
    { A: { x: 32, y: 625 }, B: { x: 80, y: 615 } }, 
    { A: { x: 32, y: 530 }, B: { x: 80, y: 500 } }, 
    { A: { x: 32, y: 410 }, B: { x: 80, y: 430 } },
    { A: { x: 32, y: 320 }, B: { x: 80, y: 330 } },
    { A: { x: 32, y: 180 }, B: { x: 80, y: 230 } },
    { A: { x: 32, y: 80 }, B: { x: 80, y: 100 } },
    { A: { x: 176, y: 40 }, B: { x: 176, y: 100 }, mover: function(jugador, div){moverFicha(4 ,div, jugador)}},
    { A: { x: 286, y: 40 }, B: { x: 276, y: 100 } },
    { A: { x: 376, y: 40 }, B: { x: 386, y: 100 } },
    { A: { x: 460, y: 40 }, B: { x: 460, y: 100 } },
    { A: { x: 580, y: 40 }, B: { x: 560, y: 100 } },
    { A: { x: 680, y: 40 }, B: { x: 650, y: 100 }} ,
    { A: { x: 700, y: 190 }, B: { x: 655, y: 240 } },
    { A: { x: 700, y: 360 }, B: { x: 655, y: 310 }, miturno: function(){turno = turno === "A" ? "B" : "A" }},
    { A: { x: 700, y: 490 }, B: { x: 655, y: 450 } },
    { A: { x: 650, y: 620 }, B: { x: 670, y: 565 } },
    { A: { x: 540, y: 640 }, B: { x: 560, y: 575 } },
    { A: { x: 460, y: 640 }, B: { x: 440, y: 575 } },
    { A: { x: 320, y: 640 }, B: { x: 310, y: 575 } },

];

//  pregunta: function(posicioneAvanzada ,div, jugador){cargarPregunta(posicioneAvanzada, div, jugador)}}

const infoJugadores = {
    A: { id: "A", posicion: 0 },
    B: { id: "B", posicion: 0},
};

let turno = "A"






// FUNCION CARGAR PREGUNTA

let divPregunta = document.querySelector("#divPregunta")
function cargarPregunta(posicioneAvanzada, div, jugador){
    let numero = Math.floor(Math.random() * preguntes.length + 1)
    dado.style.display = "none"
    divPregunta.innerHTML = `
    <form id="formPregunta">
        <h2>${preguntes[numero - 1].pregunta}</h2>
        <ul>
            <li>${preguntes[numero - 1].opciones[0]}</li>
            <li>${preguntes[numero - 1].opciones[1]}</li>
            <li>${preguntes[numero - 1].opciones[2]}</li>
        </ul>
        <input type="text" name="Opcion" id="option" focus>
        <input type="submit">
        <p id="mensajeRespuesta"></p>
    </form>`


    let formPregunta = document.querySelector("#formPregunta")
    let option = document.querySelector("#option")

    formPregunta.addEventListener("submit", (e) =>{
        e.preventDefault()
    
        if(option.value.trim().toUpperCase() === preguntes[numero - 1].correcta){
            divPregunta.innerHTML = ""
        }else{
            divPregunta.innerHTML = ""
            jugador.posicion -= posicioneAvanzada
            moverFicha(div, jugador)
        }
        dado.style.display = "block"
    })
}





// CLICK DADO

dado.addEventListener("click", function(){
    let numero = Math.floor(Math.random() * 6 + 1 )
    let jugador = turno === "A" ? infoJugadores.A : infoJugadores.B
    let div = turno === "A" ? divA : divB

    numDado.forEach(element => {
        element.style.display = "none"
    });
    numDado[numero-1].style.display = "block"


    moverFicha(numero ,div, jugador)
    turno = turno === "A" ? "B" : "A" 
})





// MOVER FICHA

function moverFicha(numero ,div, jugador){
    let paso = 0
    let tiempo = setInterval(() => {
        paso++
        if(paso <= numero){
            jugador.posicion++
            div.style.setProperty("--x", tablero[jugador.posicion][jugador.id].x + "px")
            div.style.setProperty("--y", tablero[jugador.posicion][jugador.id].y + "px") 
        }else{
            if(tablero[jugador.posicion].mover){
                tablero[jugador.posicion].mover(jugador, div)
                console.log("mover")
            }
            clearInterval(tiempo)
        }
    }, 250)
}








const click = document.querySelector("#img")
click.addEventListener("click", function(e){
    console.log(e.clientX)
    console.log(e.clientY)
})

