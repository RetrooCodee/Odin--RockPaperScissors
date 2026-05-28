/* Declaracion de variables para el seguimiento de puntuacion de los jugadores*/
let humanScore = 0;
let computerScore = 0;
let ronda = 0;
let humanSelection = 0;
let computerSelection = 0;


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


/* Funcion para elegir opcion del juego por parte del humano*/

function getHumanChoice() {

    /* Utilizamos el metodo Prompt para solicitar la respuesta por parte del usuario*/
    return prompt("¿Piedra, Papel o Tijeras?").toLocaleUpperCase()
}

/* Funcion de juego */
function playRound (humanChoice, computerChoice) {

    /* Mostramos la decicion de los jugadores*/
    console.log(`Jugador: ${humanChoice}`);
    console.log(`Computadora: ${computerChoice}`);
    
    /* Opciones de empate */
    if (humanChoice == "PIEDRA" && computerChoice == "PIEDRA" || humanChoice == "PAPEL" && computerChoice == "PAPEL" || humanChoice == "TIJERAS" && computerChoice == "TIJERAS") {
        
        console.log("Esto es un empate")
    
    /* Opciones de victoria para jugador*/
    } else if (humanChoice == "PIEDRA" && computerChoice == "TIJERAS" || humanChoice == "PAPEL" && computerChoice == "PIEDRA" || humanChoice == "TIJERAS" && computerChoice == "PAPEL") {
        
        console.log("----------------------------------------")
        console.log("!! JUGADOR GANA ¡¡");
        console.log(`${humanChoice} vence ${computerChoice}`)
        console.log("----------------------------------------")
        humanScore += 1;
        ronda += 1;
    
    /* Opciones de victoria para computadora */
    } else if (humanChoice == "TIJERAS" && computerChoice == "PIEDRA" || humanChoice == "PIEDRA" && computerChoice == "PAPEL" || humanChoice == "PAPEL" && computerChoice == "TIJERAS") {
        
        console.log("----------------------------------------")
        console.log(`!! COMPUTADORA GANA ¡¡`);
        console.log(`${computerChoice} vence ${humanChoice}`)
        console.log("----------------------------------------")
        computerScore += 1;
        ronda += 1;
    }
}

/* Funcion del juego completo */
function playGame() {
    
    do {

        console.log(` - RONDA ${ronda + 1} -`)
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    } while (ronda < 5)

    console.log("----------------------------------------")

    if(humanScore > computerScore) {
        console.log("JUGADOR GANA EL JUEGO");       
    } else {
        console.log("COMPUTADORA GANA EL JUEGO");  
    }
    console.log("----------------------------------------")
    console.log(`Victorias jugador: ${humanScore}`)
    console.log(`Victorias computadora: ${computerScore}`)
    console.log("----------------------------------------")
}

playGame();