import { preguntes } from "./data/data.js"
import { infoJugadores } from "./data/data.js"


// DOM
const dado = document.querySelector("#dado")
let divA = document.querySelector(".jugadorA")
let divB = document.querySelector(".jugadorB")
let numDado = document.querySelectorAll(".numDado")
let final = document.querySelector("#final")
let reiniciarBtn = document.querySelector("#reiniciarBtn")
let turnoTxt = document.querySelector(".turnoTxt")


let pierdeTurno = false
let puedeTirar = true
let turno = "A"


let tablero = [
    { A: { x: 35, y: 695 }, B: { x: 91, y: 690 }   }, // 0
    { A: { x: 37, y: 630 }, B: { x: 85, y: 620 }   }, // 1
    { A: { x: 37, y: 535 }, B: { x: 85, y: 505 },   mover: function(jugador, div){jugador.posicion = 21; div.style.setProperty("--x", tablero[jugador.posicion][jugador.id].x + "px"); div.style.setProperty("--y", tablero[jugador.posicion][jugador.id].y + "px")} }, 
    { A: { x: 37, y: 415 }, B: { x: 85, y: 435 }   },
    { A: { x: 37, y: 325 }, B: { x: 85, y: 335 }   },
    { A: { x: 37, y: 185 }, B: { x: 85, y: 235 },   pierdeTurno: function(){pierdeTurno = true} },
    { A: { x: 37, y: 85 }, B: { x: 85, y: 105 }    },
    { A: { x: 181, y: 45 }, B: { x: 181, y: 105 },  mover: function(jugador, div){jugador.posicion = 11; div.style.setProperty("--x", tablero[jugador.posicion][jugador.id].x + "px"); div.style.setProperty("--y", tablero[jugador.posicion][jugador.id].y + "px")}},
    { A: { x: 291, y: 45 }, B: { x: 281, y: 105 }  },
    { A: { x: 381, y: 45 }, B: { x: 391, y: 105 }  } ,
    { A: { x: 465, y: 45 }, B: { x: 465, y: 105 }  },
    { A: { x: 585, y: 45 }, B: { x: 565, y: 105 }  },
    { A: { x: 685, y: 45 }, B: { x: 655, y: 105 },  mover: function(jugador, div){jugador.posicion = 0; div.style.setProperty("--x", tablero[jugador.posicion][jugador.id].x + "px"); div.style.setProperty("--y", tablero[jugador.posicion][jugador.id].y + "px")}} ,
    { A: { x: 705, y: 195 }, B: { x: 660, y: 245 } },
    { A: { x: 705, y: 365 }, B: { x: 660, y: 315 }, mover: function(jugador, div){jugador.posicion = 24; div.style.setProperty("--x", tablero[jugador.posicion][jugador.id].x + "px"); div.style.setProperty("--y", tablero[jugador.posicion][jugador.id].y + "px")}}, // 14
    { A: { x: 705, y: 495 }, B: { x: 660, y: 455 } },
    { A: { x: 655, y: 625 }, B: { x: 675, y: 570 } },
    { A: { x: 545, y: 645 }, B: { x: 565, y: 580 } },
    { A: { x: 465, y: 645 }, B: { x: 445, y: 580 }, pierdeTurno: function(){pierdeTurno = true}}, // 18
    { A: { x: 325, y: 645 }, B: { x: 315, y: 580 } },
    { A: { x: 225, y: 645 }, B: { x: 215, y: 580 } },
    { A: { x: 155, y: 545 }, B: { x: 180, y: 495 } },
    { A: { x: 155, y: 415 }, B: { x: 180, y: 365 }, mover: function(jugador, div){jugador.posicion = 24; div.style.setProperty("--x", tablero[jugador.posicion][jugador.id].x + "px"); div.style.setProperty("--y", tablero[jugador.posicion][jugador.id].y + "px")}}, // 22
    { A: { x: 155, y: 205 }, B: { x: 195, y: 275 } },
    { A: { x: 275, y: 185 }, B: { x: 265, y: 235 } },
    { A: { x: 385, y: 185 }, B: { x: 355, y: 235 }, mover: function(jugador, div){jugador.posicion = 9; div.style.setProperty("--x", tablero[jugador.posicion][jugador.id].x + "px"); div.style.setProperty("--y", tablero[jugador.posicion][jugador.id].y + "px")}}, // 25
    { A: { x: 480, y: 185 }, B: { x: 455, y: 235 } },
    { A: { x: 585, y: 185 }, B: { x: 545, y: 235 } },
    { A: { x: 595, y: 285 }, B: { x: 545, y: 305 } },
    { A: { x: 595, y: 385 }, B: { x: 545, y: 375 } },
    { A: { x: 595, y: 505 }, B: { x: 545, y: 465 }, mover: function(jugador, div){jugador.posicion = 27; div.style.setProperty("--x", tablero[jugador.posicion][jugador.id].x + "px"); div.style.setProperty("--y", tablero[jugador.posicion][jugador.id].y + "px")}}, // 30
    { A: { x: 455, y: 505 }, B: { x: 475, y: 455 }, miturno: function(){turno = turno === "A" ? "B" : "A" } }, 
    { A: { x: 355, y: 505 }, B: { x: 375, y: 455 } }, 
    { A: { x: 265, y: 505 }, B: { x: 285, y: 455 }, mover: function(jugador, div){jugador.posicion = 20; div.style.setProperty("--x", tablero[jugador.posicion][jugador.id].x + "px"); div.style.setProperty("--y", tablero[jugador.posicion][jugador.id].y + "px")}}, // 33
    { A: { x: 265, y: 315 }, B: { x: 285, y: 375 } }, 
    { A: { x: 365, y: 315 }, B: { x: 365, y: 375 } }, 
    { A: { x: 465, y: 355 }, B: { x: 465, y: 355 } }, 
];



//LocalStorage
let BD = JSON.parse(localStorage.getItem("infoJugadores")) ?? JSON.parse(JSON.stringify(infoJugadores))
divA.style.setProperty("--x", tablero[BD.A.posicion]["A"].x + "px"); divA.style.setProperty("--y", tablero[BD.A.posicion]["A"].y + "px")
divB.style.setProperty("--x", tablero[BD.B.posicion]["B"].x + "px"); divB.style.setProperty("--y", tablero[BD.B.posicion]["B"].y + "px")
function guardarLocalStorage(){
    localStorage.setItem("infoJugadores", JSON.stringify(BD))
}
guardarLocalStorage()




// CLICK DADO
dado.addEventListener("click", function(){

    if(puedeTirar){
        let numero = Math.floor(Math.random() * 6 + 1 )
        let jugador = turno === "A" ? BD.A : BD.B
        let div = turno === "A" ? divA : divB
        puedeTirar = false

        // Imagenes Dado
        numDado.forEach(element => {
            element.style.display = "none"
            element.style.transform = "rotate(0deg)"
        });
        numDado[numero-1].style.display = "block"
        numDado[numero-1].style.transform = "rotate(360deg)"


        // Pierde Turno
        if(pierdeTurno){
            turno = turno === "A" ? "A" : "B" 
            pierdeTurno = false
        }else{
            turno = turno === "A" ? "B" : "A" 
        }
        moverFicha(numero ,div, jugador)
    }else{
        console.log("no puedes tirar")
    }
})




// MOVER FICHA

function moverFicha(numero ,div, jugador){
    let paso = 0
    let valor = 1

    let tiempo = setInterval(() => {
        paso++

        if(paso <= numero){

            // Volver Atras Final
            if(jugador.posicion == tablero.length - 1){
                valor = -1
            }

            jugador.posicion += valor
            div.style.setProperty("--x", tablero[jugador.posicion][jugador.id].x + "px")
            div.style.setProperty("--y", tablero[jugador.posicion][jugador.id].y + "px") 
        }else{
            if(tablero[jugador.posicion].mover){
                tablero[jugador.posicion].mover(jugador, div)
                console.log("mover")
                puedeTirar = true
                turnoTxt.textContent = `Turno de ${turno}`
            }else if(tablero[jugador.posicion].miturno){
                tablero[jugador.posicion].miturno()
                puedeTirar = true
                turnoTxt.textContent = `Turno de ${turno}`
            }else if(tablero[jugador.posicion].pierdeTurno){
                tablero[jugador.posicion].pierdeTurno()
                puedeTirar = true
                turnoTxt.textContent = `Turno de ${turno}`
            }else{
                cargarPregunta(numero, div,jugador)
            }
            guardarLocalStorage()
            clearInterval(tiempo)
        }
    }, 250)
}






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
            guardarLocalStorage()
            puedeTirar = true
            turnoTxt.textContent = `Turno de ${turno}`
            //Final 
            if(jugador.posicion === tablero.length - 1){
                dado.style.display = "none"
                final.style.display = "block"
                turnoTxt,style.display = "none"
            }else{
                dado.style.display = "block"
            }
        }else{
            divPregunta.innerHTML = ""
            jugador.posicion -= 1
            div.style.setProperty("--x", tablero[jugador.posicion][jugador.id].x + "px"); div.style.setProperty("--y", tablero[jugador.posicion][jugador.id].y + "px") 
            guardarLocalStorage()
            puedeTirar = true
            dado.style.display = "block"
            turnoTxt.textContent = `Turno de ${turno}`
        }
    })
}




// Reiniciar Partida
reiniciarBtn.addEventListener("click", () =>{
    BD.A.posicion = 0
    BD.B.posicion = 0
    guardarLocalStorage()
    divA.style.setProperty("--x", tablero[BD.A.posicion]["A"].x + "px"); divA.style.setProperty("--y", tablero[BD.A.posicion]["A"].y + "px")
    divB.style.setProperty("--x", tablero[BD.B.posicion]["B"].x + "px"); divB.style.setProperty("--y", tablero[BD.B.posicion]["B"].y + "px")
    final.style.display = "none"
    dado.style.display = "block"
})



