var canvas;
var contexto;
const fps=60;

var sacrificio = [];

document.onload = function(){
    document.sacrificio = [];
}
function agregarAlma(){
    var nuevaalma = document.getElementById('alma').value;
    var longitud = sacrificio.length;
    var contador=0;

    for(let i=0; i<longitud; i++){
        if(sacrificio[i] === nuevaalma){
            contador = contador + 1;    
        }
    }
    if(contador==0){
        sacrificio.push(nuevaalma);
    }
    else{
        alert("Esta alma ya existe");
    }

    
}

function mostrarAlma(){
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    for(const nuevaalma of sacrificio){
        var datoParrafo = document.createElement('p');
        datoParrafo.innerText = nuevaalma;

        resultado.appendChild(datoParrafo);
    }
}

function iniciarJuego(){
    canvas = document.getElementById('wheelOfDoom');
    contexto = canvas.getContext('2d');

    setInterval(function(){
        principal();
    },fps);
}

