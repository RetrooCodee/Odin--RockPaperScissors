//Declaracion de contantes (DOM)
const $btnPiedra = document.querySelector("#PIEDRA");
const $btnPapel = document.querySelector("#PAPEL");
const $btnTijeras = document.querySelector("#TIJERAS");
const $eleccionJugador = document.querySelector("#EleccionJugador");
const $eleccionComputadora = document.querySelector("#EleccionComputadora");
const $btncontinuar = document.querySelector("#Continuar"); 
const $btnreiniciar = document.querySelector("#reiniciar");
const $Resultado = document.querySelector("#Resultado");
const $Descripcion = document.querySelector("#Descripcion");
const $Ronda = document.querySelector("#noRonda");
const $PuntuacionJug = document.querySelector("#puntuacionJugador");
const $PuntuacionCom = document.querySelector("#puntuacionComputadora");
const $notificacion = document.querySelector("#notificacion");

// Declaracion de variables
let jugador = "";
let computadora = "";
let ronda = 1;
let puntuacionJugador = 0;
let puntuacionComputadora = 0;


/* seleccion de opcion por parte del Jugador */

$btnPiedra.addEventListener("click", () => {
    jugador = $btnPiedra.value;
    seleccion(jugador);
})

$btnPapel.addEventListener("click", () => {
    jugador = $btnPapel.value;
    seleccion(jugador);
})

$btnTijeras.addEventListener("click", () => {
    jugador = $btnTijeras.value;
    seleccion(jugador);
})


/* Respuestas del juego */
$btncontinuar.addEventListener("click", () => {
    
    $eleccionJugador.textContent = jugador;

    /* llamada a la funcion para genenerar eleccion de la computadora*/
    computadora = getComputerChoice();
    $eleccionComputadora.textContent = computadora;
    
    //Desactivacion de opciones
    $btnPapel.classList.remove("opcionActivada");
    $btnPiedra.classList.remove("opcionActivada");
    $btnTijeras.classList.remove("opcionActivada");

    /* Inicio del juego */
    playRound(jugador, computadora);
    
    //Mostrar ronda
    ronda += 1;
    $Ronda.textContent = `Ronda ${ronda}`;

    //Habilitacion de btn Continuar
    $btncontinuar.setAttribute("disabled", true);

})

/*Reinicio del juego*/
$btnreiniciar.addEventListener("click", () => {
    //Ronda
    ronda = 0;
    $Ronda.textContent = "Ronda 0";
    
    // Puntajes
    puntuacionJugador = 0;
    puntuacionComputadora = 0;
    $PuntuacionJug.textContent = "0";
    $PuntuacionCom.textContent = "0"

    // Notificaciones 
    $notificacion.textContent = "Selecciona una opcion y presiona continuar"
    $notificacion.style.color = "grey"
    $notificacion.style.fontSize = "18px";

    // Resultados
    $eleccionJugador.textContent = "-";
    $eleccionComputadora.textContent = "-";
    $Resultado.textContent = "---"
    $Descripcion.textContent = "-"

    //Opciones
    $btnPapel.removeAttribute("disabled");
    $btnPiedra.removeAttribute("disabled");
    $btnTijeras.removeAttribute("disabled");



})



/* Funcion de juego */
function playRound (humanChoice, computerChoice) {

        /* Opciones de empate */
        if (humanChoice == "PIEDRA" && computerChoice == "PIEDRA" || humanChoice == "PAPEL" && computerChoice == "PAPEL" || humanChoice == "TIJERAS" && computerChoice == "TIJERAS") {
            
        $Resultado.textContent = "EMPATE";
        $Descripcion.textContent = "-MISMA ELECCION-";
        
        /* Opciones de victoria para jugador*/
        } else if (humanChoice == "PIEDRA" && computerChoice == "TIJERAS" || humanChoice == "PAPEL" && computerChoice == "PIEDRA" || humanChoice == "TIJERAS" && computerChoice == "PAPEL") {
            
            $Resultado.textContent = "GANASTE";
            $Descripcion.textContent = `-${humanChoice} VENCE ${computerChoice}-`;
            puntuacionJugador += 1;
            $PuntuacionJug.textContent = puntuacionJugador;

            if(puntuacionJugador === 5) {

                // Modificaciones si jugador gana (5 puntos)
                $notificacion.textContent = "- GANASTE -";
                $notificacion.style.color = "green";
                $notificacion.style.fontSize = "30px";
                $btncontinuar.setAttribute("disabled", false);
                $btnPapel.setAttribute("disabled", false);
                $btnPiedra.setAttribute("disabled", false);
                $btnTijeras.setAttribute("disabled", false);
            }
            

        /* Opciones de victoria para computadora */
        } else if (humanChoice == "TIJERAS" && computerChoice == "PIEDRA" || humanChoice == "PIEDRA" && computerChoice == "PAPEL" || humanChoice == "PAPEL" && computerChoice == "TIJERAS") {
            
            $Resultado.textContent = "PERDISTE";
            $Descripcion.textContent = `-${computerChoice} VENCE ${humanChoice}-`;
            puntuacionComputadora += 1;
            $PuntuacionCom.textContent = puntuacionComputadora;

            if(puntuacionComputadora === 5) {

                // Modificaciones si computadora gana (5 puntos)
                $notificacion.textContent = "- PERDISTE -"
                $notificacion.style.color = "red";
                $notificacion.style.fontSize = "30px";
                $btncontinuar.setAttribute("disabled", false);
                $btnPapel.setAttribute("disabled", false);
                $btnPiedra.setAttribute("disabled", false);
                $btnTijeras.setAttribute("disabled", false);
            }
        }
}



/* Funcion de seleccion de opcion por parte del jugador*/
function seleccion(jugador) {
    
    if(jugador === "PIEDRA") {

        $btncontinuar.removeAttribute("disabled");
        $btnPiedra.classList.add("opcionActivada");
        $btnPapel.classList.remove("opcionActivada");
        $btnTijeras.classList.remove("opcionActivada");

    } else if (jugador === "PAPEL") {

        $btncontinuar.removeAttribute("disabled");
        $btnPapel.classList.add("opcionActivada");
        $btnPiedra.classList.remove("opcionActivada");
        $btnTijeras.classList.remove("opcionActivada");

    } else if( jugador ===  "TIJERAS"){

        $btncontinuar.removeAttribute("disabled");
        $btnTijeras.classList.add("opcionActivada");
        $btnPiedra.classList.remove("opcionActivada");
        $btnPapel.classList.remove("opcionActivada");

    }
}



/* Funcion para elegir opcion del juego por parte de la computadora*/

function getComputerChoice() {
    
    /* Seleccion de opcion aleatoria utilizando el metodo Random*/
    let random = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    let decicionComputadora = "";
    
    switch (random) {
        case 1 : 
            decicionComputadora = "PIEDRA";
            break;
        case 2 :
            decicionComputadora = "PAPEL";
            break;
        case 3 :
            decicionComputadora = "TIJERAS"
            break;
        default:
            console.log("Se genero un error");
    }

    return decicionComputadora;
}
