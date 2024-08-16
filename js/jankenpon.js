let ataqueJugador
let ataqueEnemigo
let resultado
let vidasPj = 3
let vidasPjEnemigo = 3

function iniciarJuego() {
    let sectionSeleccionAtaques = document.getElementById('seleccionar-ataque')
    sectionSeleccionAtaques.style.display = 'none'

    let botonPj = document.getElementById('boton-pj')
    botonPj.addEventListener('click', seleccionarPj)

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

    let botonDonOvidio = document.getElementById('boton-piedra')
    botonDonOvidio.addEventListener('click', ataqueDonOvidio)
    let botonConradoHoracio = document.getElementById('boton-papel')
    botonConradoHoracio.addEventListener('click', ataqueConradoHoracio)
    let botonClaraElvira = document.getElementById('boton-tijera')
    botonClaraElvira.addEventListener('click', ataqueClaraElvira)
    
    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)


}

function seleccionarPj() {
    let sectionSeleccionPj = document.getElementById('seleccionar-pj')
    sectionSeleccionPj.style.display = 'none'

    let sectionSeleccionAtaques = document.getElementById('seleccionar-ataque')
    sectionSeleccionAtaques.style.display = 'flex'

    let inputDonOvidio = document.getElementById('don-ovidio')
    let inputConradoHoracio = document.getElementById('conrado-horacio')
    let inputClaraElvira = document.getElementById('clara-elvira')
    let spanPjJugador = document.getElementById('pj-jugador')

    
    if (inputDonOvidio.checked) {
        spanPjJugador.innerHTML = 'don-ovidio'
    } else if (inputConradoHoracio.checked) {
        spanPjJugador.innerHTML = 'conrado-horacio'
    } else if (inputClaraElvira.checked) {
        spanPjJugador.innerHTML = 'clara-elvira'
    } else {
        alert('Seleccione un Personaje')
        return;
    }

    seleccionarPjEnemigo()

}

function seleccionarPjEnemigo() {
    let pjAleatoria = aleatorio(1,3)
    let spanPjEnemigo = document.getElementById('pj-enemigo')

    if (pjAleatoria == 1) {
        spanPjEnemigo.innerHTML = 'don-ovidio'
    } else if (pjAleatoria == 2) {
        spanPjEnemigo.innerHTML = 'conrado-horacio'
    } else {
        spanPjEnemigo.innerHTML = 'clara-elvira'
    }
}

function ataqueDonOvidio() {
    ataqueJugador = 'PIEDRA'
    ataqueAleatorioEnemigo()
}
function ataqueConradoHoracio() {
    ataqueJugador = 'PAPEL'
    ataqueAleatorioEnemigo()
}
function ataqueClaraElvira() {
    ataqueJugador = 'TIJERA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'PIEDRA'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'PAPEL'
    } else {
        ataqueEnemigo = 'TIJERA'
    }

    Duelo() 
}

function Duelo() {

    let spanVidasPj = document.getElementById('vida-pj')
    let spanVidasEnemigo = document.getElementById('vida-pj-enemigo')

        if (ataqueJugador == ataqueEnemigo) {
            crearMensaje('EMPATARON')
        } else if ((ataqueJugador == 'PAPEL' && ataqueEnemigo == 'PIEDRA') ||
                   (ataqueJugador == 'PIEDRA' && ataqueEnemigo == 'TIJERA') ||
                   (ataqueJugador == 'TIJERA' && ataqueEnemigo == 'PAPEL')) {
            crearMensaje('GANASTE!')
            vidasPjEnemigo--
            if (vidasPjEnemigo == 1) {
                spanVidasEnemigo.innerHTML = vidasPjEnemigo + " vida"
            }else{
                spanVidasEnemigo.innerHTML = vidasPjEnemigo + " vidas"
            }
            
        } else {
            crearMensaje('PERDISTE!')
            vidasPj--
            if (vidasPj == 1) {
                spanVidasPj.innerHTML = vidasPj + " vida"
            }else{
                spanVidasPj.innerHTML = vidasPj + " vidas"
            }
            
        }
        vidasPjs()
}

function vidasPjs(){
    if (vidasPj == 0){
        resultadoFinal('Haz Perdido!!')
    }else if (vidasPjEnemigo == 0){ 
        resultadoFinal('Haz Ganado!!')
    }

}

function crearMensaje(resultado) {

    let sectionMensajes = document.getElementById('resultado')
    let ataquePj = document.getElementById('ataque-Pj')
    let ataquePjEnemigo =  document.getElementById('ataque-Pj-enemigo')

    let nuevoAtaquePj = document.createElement('p')
    let nuevoAtaquePjEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaquePj.innerHTML = "Usaste: " + ataqueJugador
    nuevoAtaquePjEnemigo.innerHTML = "Uso: " + ataqueEnemigo
    
    ataquePj.appendChild(nuevoAtaquePj)
    ataquePjEnemigo.appendChild(nuevoAtaquePjEnemigo)
}

function resultadoFinal(final) {

    let sectionMensajes = document.getElementById('resultado')

    let parrafo = document.createElement( 'p' )
    sectionMensajes.innerHTML = final

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'

    let botonDonOvidio = document.getElementById('boton-piedra')    
    botonDonOvidio.disabled = true
    let botonConradoHoracio = document.getElementById('boton-papel')   
    botonConradoHoracio.disabled = true
    let botonClaraElvira = document.getElementById('boton-tijera')
    botonClaraElvira.disabled = true
    
}


function reiniciarJuego(){
    location.reload();
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)
