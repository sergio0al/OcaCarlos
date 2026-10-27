import { preguntes } from "./data.js"


const dado = document.querySelector("#dado")
let divA = document.querySelector(".jugadorA")
let divB = document.querySelector(".jugadorB")
let numDado = document.querySelectorAll(".numDado")
let pierdeTurno = false



const tablero = [
    { A: { x: 30, y: 690 }, B: { x: 86, y: 685 } }, // 0
    { A: { x: 32, y: 625 }, B: { x: 80, y: 615 } }, // 1
    { A: { x: 32, y: 530 }, B: { x: 80, y: 500 }, mover: function(jugador, div){jugador.posicion = 21; div.style.setProperty("--x", tablero[jugador.posicion][jugador.id].x + "px"); div.style.setProperty("--y", tablero[jugador.posicion][jugador.id].y + "px")} }, 
    { A: { x: 32, y: 410 }, B: { x: 80, y: 430 } },
    { A: { x: 32, y: 320 }, B: { x: 80, y: 330 } },
    { A: { x: 32, y: 180 }, B: { x: 80, y: 230 }, pierdeTurno: function(){pierdeTurno = true} },
    { A: { x: 32, y: 80 }, B: { x: 80, y: 100 } },
    { A: { x: 176, y: 40 }, B: { x: 176, y: 100 }, mover: function(jugador, div){jugador.posicion = 11; div.style.setProperty("--x", tablero[jugador.posicion][jugador.id].x + "px"); div.style.setProperty("--y", tablero[jugador.posicion][jugador.id].y + "px")}},
    { A: { x: 286, y: 40 }, B: { x: 276, y: 100 } },
    { A: { x: 376, y: 40 }, B: { x: 386, y: 100 } },
    { A: { x: 460, y: 40 }, B: { x: 460, y: 100 } },
    { A: { x: 580, y: 40 }, B: { x: 560, y: 100 } },
    { A: { x: 680, y: 40 }, B: { x: 650, y: 100 }, mover: function(jugador, div){jugador.posicion = 0; div.style.setProperty("--x", tablero[jugador.posicion][jugador.id].x + "px"); div.style.setProperty("--y", tablero[jugador.posicion][jugador.id].y + "px")}} ,
    { A: { x: 700, y: 190 }, B: { x: 655, y: 240 } },
    { A: { x: 700, y: 360 }, B: { x: 655, y: 310 }, mover: function(jugador, div){jugador.posicion = 24; div.style.setProperty("--x", tablero[jugador.posicion][jugador.id].x + "px"); div.style.setProperty("--y", tablero[jugador.posicion][jugador.id].y + "px")}}, // 14
    { A: { x: 700, y: 490 }, B: { x: 655, y: 450 } },
    { A: { x: 650, y: 620 }, B: { x: 670, y: 565 } },
    { A: { x: 540, y: 640 }, B: { x: 560, y: 575 } },
    { A: { x: 460, y: 640 }, B: { x: 440, y: 575 }, pierdeTurno: function(){pierdeTurno = true}}, // 18
    { A: { x: 320, y: 640 }, B: { x: 310, y: 575 } },
    { A: { x: 220, y: 640 }, B: { x: 210, y: 575 } },
    { A: { x: 150, y: 540 }, B: { x: 175, y: 490 } },
    { A: { x: 150, y: 410 }, B: { x: 175, y: 360 }, mover: function(jugador, div){jugador.posicion = 24; div.style.setProperty("--x", tablero[jugador.posicion][jugador.id].x + "px"); div.style.setProperty("--y", tablero[jugador.posicion][jugador.id].y + "px")}}, // 22
    { A: { x: 150, y: 200 }, B: { x: 190, y: 270 } },
    { A: { x: 270, y: 180 }, B: { x: 260, y: 230 } },
    { A: { x: 380, y: 180 }, B: { x: 350, y: 230 }, mover: function(jugador, div){jugador.posicion = 9; div.style.setProperty("--x", tablero[jugador.posicion][jugador.id].x + "px"); div.style.setProperty("--y", tablero[jugador.posicion][jugador.id].y + "px")}}, // 25
    { A: { x: 475, y: 180 }, B: { x: 450, y: 230 } },
    { A: { x: 580, y: 180 }, B: { x: 540, y: 230 } },
    { A: { x: 590, y: 280 }, B: { x: 540, y: 300 } },
    { A: { x: 590, y: 380 }, B: { x: 540, y: 370 } },
    { A: { x: 590, y: 500 }, B: { x: 540, y: 460 }, mover: function(jugador, div){jugador.posicion = 27; div.style.setProperty("--x", tablero[jugador.posicion][jugador.id].x + "px"); div.style.setProperty("--y", tablero[jugador.posicion][jugador.id].y + "px")}}, // 30
    { A: { x: 450, y: 500 }, B: { x: 470, y: 450 }, miturno: function(){turno = turno === "A" ? "B" : "A" } }, 
    { A: { x: 350, y: 500 }, B: { x: 370, y: 450 } }, 
    { A: { x: 260, y: 500 }, B: { x: 280, y: 450 }, mover: function(jugador, div){jugador.posicion = 20; div.style.setProperty("--x", tablero[jugador.posicion][jugador.id].x + "px"); div.style.setProperty("--y", tablero[jugador.posicion][jugador.id].y + "px")}}, // 33
    { A: { x: 260, y: 310 }, B: { x: 280, y: 370 } }, 
    { A: { x: 360, y: 310 }, B: { x: 360, y: 370 } }, 
    { A: { x: 460, y: 350 }, B: { x: 460, y: 350 } }, 
];




let turno = "A"

let BD = (JSON.parse(localStorage.getItem("infoJugadores")) ? JSON.parse(localStorage.getItem("infoJugadores")) : JSON.parse(JSON.stringify(infoJugadores)))
function guardarInfo(){
    localStorage.setItem("infoJugadores", JSON.stringify(BD))
}
guardarInfo()
console.log(localStorage.getItem("infoJugadores"))


const infoJugadores = {
    A: { id: "A", posicion: 0},
    B: { id: "B", posicion: 0},
};


// FUNCION CARGAR PREGUNTA

let divPregunta = document.querySelector("#divPregunta")
function cargarPregunta(posicioneAvanzada, div, jugador){
    let numero = Math.floor(Math.random() * preguntes.length + 1)
    dado.style.display = "none"
    divPregunta.innerHTML = `
    <form id="formPregunta">
        <h2>${preguntes[numero - 1].pregunta}</h2>
        <input type="submit" value="${preguntes[numero - 1].opciones[0]}" class="${preguntes[numero - 1].correcta === 0 ? "correcta" : ""}">
        <input type="submit" value="${preguntes[numero - 1].opciones[1]}" class="${preguntes[numero - 1].correcta === 1 ? "correcta" : ""}">
        <input type="submit" value="${preguntes[numero - 1].opciones[2]}" class="${preguntes[numero - 1].correcta === 2 ? "correcta" : ""}">
    </form>`


    let formPregunta = document.querySelector("#formPregunta")

    formPregunta.addEventListener("click", (e) =>{
        if(e.target.classList.contains("correcta")){
            divPregunta.innerHTML = ""
            console.log("correct")
        }else{
            console.log("error")
            divPregunta.innerHTML = ""
            jugador.posicion -= 1
            div.style.setProperty("--x", tablero[jugador.posicion][jugador.id].x + "px")
            div.style.setProperty("--y", tablero[jugador.posicion][jugador.id].y + "px") 
        }
        dado.style.display = "block"
    })
}





// CLICK DADO

dado.addEventListener("click", function(){
    let numero = Math.floor(Math.random() * 6 + 1 )
    let jugador = turno === "A" ? infoJugadores.A : infoJugadores.B
    let div = turno === "A" ? divA : divB



    // Dado 
    numDado.forEach(element => {
        element.style.display = "none"
        element.style.transform = "rotate(0deg)"
    });
    numDado[numero-1].style.display = "block"
    numDado[numero-1].style.transform = "rotate(360deg)"



    if(pierdeTurno){
        turno = turno === "A" ? "A" : "B" 
        pierdeTurno = false
    }else{
        turno = turno === "A" ? "B" : "A" 
    }
    moverFicha(numero ,div, jugador)
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
            }else if(tablero[jugador.posicion].miturno){
                tablero[jugador.posicion].miturno()
            }else if(tablero[jugador.posicion].pierdeTurno){
                tablero[jugador.posicion].pierdeTurno()
            }else{
                cargarPregunta(numero, div,jugador)
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

