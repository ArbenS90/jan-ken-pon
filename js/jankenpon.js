
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
let ataqueJugador = []
let ataqueEnemigo = []
let resultado
let vidasPj = 3
let vidasPjEnemigo = 3
//
let opcionPjs
let pjJugador
let ataquesPj
let ataquesPjEnemigo
let inputOvidio
let inputConrado
let inputElvira
let botonPiedra
let botonPapel 
let botonTijera
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo




class Personaje {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let Ovidio = new Personaje('Don Ovidio', './img/don-ovidio.png', 3)
let Conrado = new Personaje('Conrado Horacio', './img/conrado-horacio.png', 3)
let Elvira = new Personaje('Clara Elvira', '/img/clara-elvira.png', 3)

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
            <input type="radio"  id= ${Personaje.nombre.replace(' ','')} name='${Personaje.nombre}' />
            <label class="pj" for= ${Personaje.nombre.replace(' ','')}>
            <p>${Personaje.nombre}</p>
            <img src=${Personaje.foto} alt= ${Personaje.nombre.replace(' ','')}>
            </label>
        `
    contenedorTarjetas.innerHTML += opcionPjs

        inputOvidio = document.getElementById('DonOvidio')
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
        spanPjJugador.innerHTML = inputOvidio.name
        pjJugador = inputOvidio.name
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
            <button id=${ataque.id} class="boton-ataque btnAtaque" >${ataque.nombre}</button>
        `

        contenedorAtaques.innerHTML += ataquesPj
    })

    botonPiedra = document.getElementById('boton-piedra')
    botonPapel = document.getElementById('boton-papel')
    botonTijera = document.getElementById('boton-tijera')

    botones = document.querySelectorAll('.btnAtaque')

}

function secuenciaAtaque() {
    botones.forEach((boton) =>{
        boton.addEventListener('click', (e) =>{
            if (e.target.textContent === '🪨') {
                ataqueJugador.push('PIEDRA')
                console.log(ataqueJugador)
                boton.style.background = 'GRAY'
            }else if (e.target.textContent === '📜') {
                    ataqueJugador.push('PAPEL')
                    console.log(ataqueJugador)
                    boton.style.background = 'GRAY'
                }else{
                    ataqueJugador.push('TIJERA')
                    console.log(ataqueJugador)
                    boton.style.background = 'GRAY'
                }
                ataqueAleatorioEnemigo()                
        })
    })
    
}

function seleccionarPjEnemigo() {
    let pjAleatorio = aleatorio(0, personajes.length -1)

    spanPjEnemigo.innerHTML = personajes[pjAleatorio].nombre
    ataquesPjEnemigo = personajes[pjAleatorio].ataques
    secuenciaAtaque()
}


function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(0,ataquePjEnemigo.length -1)
    
    if (ataqueAleatorio == 0) {
        ataqueEnemigo.push('PIEDRA')
    } else if (ataqueAleatorio == 1) {
        ataqueEnemigo.push('PAPEL')
    } else {
        ataqueEnemigo.push('TIJERA')
    }
    console.log(ataqueEnemigo);
    iniciarPelea()
}

function iniciarPelea() {
    if (ataqueJugador.length === 3) {
        Duelo() 
    }
}

function indexAmbosOponentes(jugador, enemigo) {
    indexAtaqueJugador = ataqueEnemigo[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function Duelo() {

    for (let index = 0; index < ataqueJugador.length; index++) {
        if (ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponentes(index, index)
            crearMensaje('EMPATARON')
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
    nuevoAtaquePj.innerHTML = indexAtaqueJugador
    nuevoAtaquePjEnemigo.innerHTML = indexAtaqueEnemigo
    
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
