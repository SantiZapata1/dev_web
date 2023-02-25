let ataqueJugador
let ataqueEnemigo


//mediante este metodo del navegador, recien ejecutamos las funciones cuando el html haya cargado
window.addEventListener("load",iniciarJuego)

function iniciarJuego(){
    //guardamos en una variable lo que almacene el boton con ese id
    let botonMascotaJugador = document.getElementById("boton-mascota")
    //especificamos cual es el evento que nos interesa usar y que va a pasar cuando eso suceda
    botonMascotaJugador.addEventListener("click",seleccionarMascotaJugador)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click",ataqueFuego)

    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click",ataqueAgua)

    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click",ataqueTierra)



}

//en esta funcion, evaluamos que input esta seleccionado
function seleccionarMascotaJugador(){

    let inputHipodoge=document.getElementById("hipodoge")
    let inputCapipepo=document.getElementById("capipepo")
    let inputRatigueya=document.getElementById("ratigueya")
    let spanMascotaJugador=document.getElementById("mascota-jugador")

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML="Hipodogue"
    } else if(inputCapipepo.checked) {
        spanMascotaJugador.innerHTML="Capipepo"
    } else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML="Ratigueya"
    }else{
        alert("selecciona una mascota")
    }

    seleccionarMascotaEnemigo()

}

function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if(mascotaAleatorio==1){
        spanMascotaEnemigo.innerHTML= "hipogoque"

    }else if(mascotaAleatorio==2){
        spanMascotaEnemigo.innerHTML= "capipepo"

    }else {
        spanMascotaEnemigo.innerHTML= "ratigueya"


    }

}

function aleatorio(min,max){
    return Math.floor(Math.random()*(max - min + 1)+ min)
}

function ataqueFuego(){
    ataqueJugador="fuego"
    ataqueAleatorioEnemigo()

}
function ataqueAgua(){
    ataqueJugador="agua"
    ataqueAleatorioEnemigo()

}
function ataqueTierra(){
    ataqueJugador="tierra"
    ataqueAleatorioEnemigo()

}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)

    if(ataqueAleatorio==1){
        ataqueEnemigo= "fuego"
    }else if(ataqueAleatorio==2){
        ataqueEnemigo= "agua"
    }else{
        ataqueEnemigo="tierra"

    }

    combate()


}
function combate(){

    if(ataqueJugador==ataqueEnemigo){
        crearMensaje("empate");
    }else if(ataqueEnemigo=="fuego" && ataqueJugador=="agua"||ataqueEnemigo=="agua" && ataqueJugador=="tierra"|| ataqueEnemigo=="tierra" && ataqueJugador =="fuego"){
        crearMensaje("ganaste");
    }else if(ataqueJugador=="fuego" && ataqueEnemigo=="agua"||ataqueJugador=="agua" && ataqueEnemigo=="tierra"||ataqueJugador=="tierra" && ataqueEnemigo =="fuego"){
        crearMensaje("perdiste");
    }

}

function crearMensaje(resultado){

    let seccionMensajes=document.getElementById("mensajes")
    let parrafo = document.createElement("p")
    parrafo.innerHTML="tu mascota ataco con " + ataqueJugador + " y tu enemigo con "+ ataqueEnemigo + "-" + resultado

    seccionMensajes.appendChild(parrafo)

}




