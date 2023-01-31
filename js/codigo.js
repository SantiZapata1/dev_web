function aleatorio(min,max){
    return Math.floor(Math.random()*(max - min + 1)+ min)
}
function eleccion(jugada){
    let resultado=""
    if(jugada==1){
        resultado="piedra"
    }else if(jugada==2){
        resultado="papel"
    }else if(jugada==3){
        resultado="tijera"
    }else{
        resultado="mal elegido"
    }
    return resultado

}

let pc = 0
let jugador = 0
let triunfos=0
let derrotas=0

while(triunfos<3 && derrotas<3){
    
    pc = aleatorio(1,3)
    jugador = prompt("elije 1-piedra, 2-papel, 3-tijera    van: " +triunfos+" a "+derrotas);

    alert("elegiste: "+ eleccion(jugador));
    alert("la pc eligio: "+ eleccion(pc));

    if(pc==jugador){
        alert("empate");
    }else if(jugador==1 && pc==2||jugador==2 && pc==3|| jugador==3 && pc ==1){
        alert("perdiste");
        derrotas=derrotas+1
    }else if(pc==1 && jugador==2||pc==2 && jugador==3||pc==3 && jugador ==1){
        alert("ganaste");
        triunfos=triunfos+1
    }else{
        alert("valores nulos, pc:" +pc + " y jugador: "+jugador );
    }
}
if(triunfos>2){
    alert("ganaste: "+ triunfos+ "-" + derrotas);
}else if(derrotas>2){
    alert("perdiste: "+ triunfos+ "-" + derrotas);
}
