let ataqueJugador
let ataqueEnemigo
let resultado
let vidasMemes = 3
let vidasMemeEnemigo = 3

function iniciarJuego() {
    let sectionSeleccionAtaques = document.getElementById('seleccionar-ataque')
    sectionSeleccionAtaques.style.display = 'none'

    let botonMemeJugador = document.getElementById('boton-meme')
    botonMemeJugador.addEventListener('click', seleccionarMemeJugador)

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

    let botonYaoMing = document.getElementById('boton-yaoming')
    botonYaoMing.addEventListener('click', ataqueYaoMing)
    let botonTrollFace = document.getElementById('boton-trollface')
    botonTrollFace.addEventListener('click', ataqueTrollFace)
    let botonMeGusta = document.getElementById('boton-megusta')
    botonMeGusta.addEventListener('click', ataqueMeGusta)
    
    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)


}

function seleccionarMemeJugador() {
    let sectionSeleccionMeme = document.getElementById('seleccionar-meme')
    sectionSeleccionMeme.style.display = 'none'

    let sectionSeleccionAtaques = document.getElementById('seleccionar-ataque')
    sectionSeleccionAtaques.style.display = 'flex'

    let inputYaoMing = document.getElementById('yaoming')
    let inputTrollFace = document.getElementById('trollface')
    let inputMeGusta = document.getElementById('megusta')
    let spanMascotaJugador = document.getElementById('meme-jugador')
    
    if (inputYaoMing.checked) {
        spanMascotaJugador.innerHTML = 'yaoming'
    } else if (inputTrollFace.checked) {
        spanMascotaJugador.innerHTML = 'trollface'
    } else if (inputMeGusta.checked) {
        spanMascotaJugador.innerHTML = 'megusta'
    } else {
        alert('Seleccione un meme')
    }

    seleccionarMemeEnemigo()

}

function seleccionarMemeEnemigo() {
    let memeAleatoria = aleatorio(1,3)
    let spanMemeEnemigo = document.getElementById('meme-enemigo')

    if (memeAleatoria == 1) {
        spanMemeEnemigo.innerHTML = 'yaoming'
    } else if (memeAleatoria == 2) {
        spanMemeEnemigo.innerHTML = 'trollface'
    } else {
        spanMemeEnemigo.innerHTML = 'megusta'
    }
}

function ataqueYaoMing() {
    ataqueJugador = 'SER YAO'
    ataqueAleatorioEnemigo()
}
function ataqueTrollFace() {
    ataqueJugador = 'TROLEAR'
    ataqueAleatorioEnemigo()
}
function ataqueMeGusta() {
    ataqueJugador = 'I LIKE IT'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'SER YAO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'TROLEAR'
    } else {
        ataqueEnemigo = 'I LIKE IT'
    }

    Duelo()    
}

function Duelo() {

    let spanMeme = document.getElementById('vida-meme')
    let spankMemeEnemigo = document.getElementById('vida-meme-enemigo')

        if (ataqueJugador == ataqueEnemigo) {
            crearMensaje('EMPATARON')
        } else if ((ataqueJugador == 'SER YAO' && ataqueEnemigo == 'TROLEAR') || (ataqueJugador == 'AGUA' && ataqueEnemigo == 'I LIKE IT') || (ataqueJugador == 'I LIKE IT' && ataqueEnemigo == 'SER YAO')) {
            crearMensaje('GANASTE!')
            vidasMemeEnemigo--
            spankMemeEnemigo.innerHTML = vidasMemeEnemigo
        } else {
            crearMensaje('PERDISTE!')
            vidasMemes--
            spanMeme.innerHTML = vidasMemes
        }
        vidasMokepones()
}

function vidasMokepones(){
    if (vidasMemes == 0){
        resultadoFinal(alert('Perdiste!!'))
    }else if (vidasMemeEnemigo == 0){ 
        resultadoFinal(alert('Ganaste!!'))
    }

}

function crearMensaje(resultado) {

    let sectionMensajes = document.getElementById('mensajes')
    
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu meme uso: ' + ataqueJugador + ', el meme del enemigo uso: ' + ataqueEnemigo + ' - ' + resultado

    sectionMensajes.appendChild(parrafo)
}
 function resultadoFinal(final) {
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'

    let botonYaoMing = document.getElementById('boton-yaoming')    
    botonYaoMing.disabled = true
    let botonTrollFace = document.getElementById('boton-trollface')   
    botonTrollFace.disabled = true
    let botonMeGusta = document.getElementById('boton-megusta')
    botonMeGusta.disabled = true
    
}


function reiniciarJuego(){
    location.reload();
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)
