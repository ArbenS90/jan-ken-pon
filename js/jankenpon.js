
//variables iniciar juego
const sectionSeleccionAtaques = document.getElementById('seleccionar-ataque')
const botonPj = document.getElementById('boton-pj')
const sectionReiniciar = document.getElementById('reiniciar')
const botonReiniciar = document.getElementById('boton-reiniciar')


//variables seleccionar PJ
const sectionSeleccionPj = document.getElementById('seleccionar-pj')
const spanPjJugador = document.getElementById('pj-jugador')

//variables seleccionar pj enemigo
const spanPjEnemigo = document.getElementById('pj-enemigo')

//variables duelo
const spanVidasPj = document.getElementById('vida-pj')
const spanVidasEnemigo = document.getElementById('vida-pj-enemigo')

//variables funcion crear mensaje
const sectionMensajes = document.getElementById('resultado')
const ataquePj = document.getElementById('ataque-Pj')
const ataquePjEnemigo =  document.getElementById('ataque-Pj-enemigo')

//variables traidas desde html
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')

//variables resultado (final) 

let personajes = []
let ataqueJugador
let ataqueEnemigo
let resultado
let vidasPj = 3
let vidasPjEnemigo = 3
//
let opcionPjs
let pjJugador
let ataquesPj
let inputOvidio
let inputConrado
let inputElvira
let botonPiedra
let botonPapel 
let botonTijera



class Personaje {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let Ovidio = new Personaje('Ovidio', './img/don-ovidio.png', 3)
let Conrado = new Personaje('Conrado', './img/conrado-horacio.png', 3)
let Elvira = new Personaje('Elvira', '/img/clara-elvira.png', 3)

//personajes.push(Ovidio,Conrado,Elvira)

Ovidio.ataques.push(
    { nombre: '🪨', id: 'boton-piedra'},
    { nombre: '📜', id: 'boton-papel'},
    { nombre: '✂️', id: 'boton-tijera'}
)

Conrado.ataques.push(
    { nombre: '🪨', id: 'boton-piedra'},
    { nombre: '📜', id: 'boton-papel'},
    { nombre: '✂️', id: 'boton-tijera'}
)

Elvira.ataques.push(
    { nombre: '🪨', id: 'boton-piedra'},
    { nombre: '📜', id: 'boton-papel'},
    { nombre: '✂️', id: 'boton-tijera'}
)

personajes.push(Ovidio,Conrado,Elvira)

function iniciarJuego() {

    sectionSeleccionAtaques.style.display = 'none'

    personajes.forEach((Personaje) => {
        opcionPjs = `
            <input type="radio" name="personajes" id= ${Personaje.nombre} />
            <label class="pj" for= ${Personaje.nombre}>
            <p>${Personaje.nombre}</p>
            <img src=${Personaje.foto} alt= ${Personaje.nombre}>
            </label>
        `
    contenedorTarjetas.innerHTML += opcionPjs

        inputOvidio = document.getElementById('Ovidio')
        inputConrado = document.getElementById('Conrado')
        inputElvira = document.getElementById('Elvira')
    })

    botonPj.addEventListener('click', seleccionarPj)
    sectionReiniciar.style.display = 'none'
    botonReiniciar.addEventListener('click', reiniciarJuego)

}

function seleccionarPj() {

    sectionSeleccionPj.style.display = 'none'
    sectionSeleccionAtaques.style.display = 'flex'

    if (inputOvidio.checked) {
        spanPjJugador.innerHTML = inputOvidio.id
        pjJugador = inputOvidio.id
    } else if (inputConrado.checked) {
        spanPjJugador.innerHTML = inputConrado.id
        pjJugador = inputConrado.id
    } else if (inputElvira.checked) {
        spanPjJugador.innerHTML = inputElvira.id
        pjJugador = inputElvira.id
    } else {
        alert('Seleccione un Personaje')
        return;
    }
    extraerAtaques(pjJugador)
    seleccionarPjEnemigo()
}

function extraerAtaques(pjJugador){
    let ataques
    for (let i = 0; i < personajes.length; i++) {
        if (pjJugador === personajes[i].nombre ) {
            ataques = personajes[i].ataques
        }
        
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){
    ataques.forEach((ataque) => {
        ataquesPj = `
            <button id=${ataque.id} class="boton-ataque" >${ataque.nombre}</button>
        `

        contenedorAtaques.innerHTML += ataquesPj
    })

    botonPiedra = document.getElementById('boton-piedra')
    botonPapel = document.getElementById('boton-papel')
    botonTijera = document.getElementById('boton-tijera')


    botonPiedra.addEventListener('click', ataquePiedra)
    botonPapel.addEventListener('click', ataquePapel)
    botonTijera.addEventListener('click', ataqueTijera)  

}

function seleccionarPjEnemigo() {
    let pjAleatorio = aleatorio(0, personajes.length -1)

    spanPjEnemigo.innerHTML = personajes[pjAleatorio].id
}

function ataquePiedra() {
    ataqueJugador = 'PIEDRA'
    ataqueAleatorioEnemigo()
}
function ataquePapel() {
    ataqueJugador = 'PAPEL'
    ataqueAleatorioEnemigo()
}
function ataqueTijera() {
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

    let nuevoAtaquePj = document.createElement('p')
    let nuevoAtaquePjEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaquePj.innerHTML = "Usaste: " + ataqueJugador
    nuevoAtaquePjEnemigo.innerHTML = "Uso: " + ataqueEnemigo
    
    ataquePj.appendChild(nuevoAtaquePj)
    ataquePjEnemigo.appendChild(nuevoAtaquePjEnemigo)
}

function resultadoFinal(final) {

    let parrafo = document.createElement( 'p' )
    sectionMensajes.innerHTML = final
    sectionReiniciar.style.display = 'block'
    botonOvidio.disabled = true
    botonConrado.disabled = true
    botonElvira.disabled = true
    
}


function reiniciarJuego(){
    location.reload();
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)
