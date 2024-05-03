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

    let inputDonOvidio = document.getElementById('DonOvidio')
    let inputConradoHoracio = document.getElementById('ConradoHoracio')
    let inputClaraElvira = document.getElementById('ClaraElvira')
    let spanPjJugador = document.getElementById('pj-jugador')
    
    if (inputDonOvidio.checked) {
        spanPjJugador.innerHTML = 'DonOvidio'
    } else if (inputConradoHoracio.checked) {
        spanPjJugador.innerHTML = 'ConradoHoracio'
    } else if (inputClaraElvira.checked) {
        spanPjJugador.innerHTML = 'ClaraElvira'
    } else {
        alert('Seleccione un Personaje')
    }

    seleccionarPjEnemigo()

}

function seleccionarPjEnemigo() {
    let pjAleatoria = aleatorio(1,3)
    let spanPjEnemigo = document.getElementById('meme-enemigo')

    if (pjAleatoria == 1) {
        spanPjEnemigo.innerHTML = 'DonOvidio'
    } else if (pjAleatoria == 2) {
        spanPjEnemigo.innerHTML = 'ConradoHoracio'
    } else {
        spanPjEnemigo.innerHTML = 'ClaraElvira'
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

    let spanpj = document.getElementById('vida-pj')
    let spankPjEnemigo = document.getElementById('vida-pj-enemigo')

        if (ataqueJugador == ataqueEnemigo) {
            crearMensaje('EMPATARON')
        } else if ((ataqueJugador == 'PAPEL' && ataqueEnemigo == 'PIEDRA') || (ataqueJugador == 'PIEDRA' && ataqueEnemigo == 'TIJERA') || (ataqueJugador == 'TIJERA' && ataqueEnemigo == 'PAPEL')) {
            crearMensaje('GANASTE!')
            vidasPjEnemigo--
            spankPjEnemigo.innerHTML = vidasPjEnemigo
        } else {
            crearMensaje('PERDISTE!')
            vidasPj--
            spanpj.innerHTML = vidasPj
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
    let ataquesPjEnemigo = document.getElementById('ataques-Pj-Enemigo')

    let nuevoAtaquePj = document.createElement('p')
    let nuevoAtaquePjEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaquePj.innerHTML = ataqueJugador
    nuevoAtaquePjEnemigo.innerHTML = ataqueJugador
    
    ataquePj.appendChild(nuevoAtaquePj)
    ataquesPjEnemigo.appendChild(nuevoAtaquePjEnemigo)
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
