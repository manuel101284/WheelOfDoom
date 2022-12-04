var sacrificio = JSON.parse(localStorage.getItem("listaUsuarios"));

var listaDeSacrificio = sacrificio;

//var listaDeSalida = [];

var almaCondenada = "";

var cantidadAlmas;
var indiceAlmaElegida;

document.onload = function(){
    //document.sacrificio = [];
};

let sonidoCoderElegido = new Audio('../assets/music/decide.mp3');

// Con esta función elegimos aleatoriamente un lugar de la lista de coders
function siguienteAlma(){
    cantidadAlmas = listaDeSacrificio.length + 1;                       // A la longitud del vector le sumamos 1, para poder aplicar bien la función ramdon

    indiceAlmaElegida = Math.floor(Math.random()*cantidadAlmas);        // Hallamos un valor aleatorio entre 0 y la variable valor1, y la volvemos un entero

    console.log(indiceAlmaElegida);

    for(let j=0; j<listaDeSacrificio.length; j++){                      // En este ciclo vamos a buscar la posición indiceAlmaElegida dentro del arreglo
        if(indiceAlmaElegida == j){                                     // Cuando la posición se encuentre, pasamoa eliminar    
            almaCondenada = listaDeSacrificio[j];                       // Guardamos el nombre del coder de la posición encontrada    
            
            console.log(almaCondenada);

            Swal.fire("El alma afortunada es "+almaCondenada);          // Se puede cambiar este mensaje por otro y agregar la animación del agua

            //alert(almaCondenada);                                     // Se puede cambiar este mensaje por otro y agregar la animación del agua


            sonidoCoderElegido.play();                                  // Al elegir un jugador, se activa un sonido anunciado un ganador

            //empujarAlma(indiceAlmaElegida);

            //listaDeSalida.push(almaCondenada);
        }
    }

    //empujarAlma(indiceAlmaElegida);
    //empujarAlma(almaCondenada);
};

let sonidoCaida = new Audio("../assets/music/scream-water.mp3");

// Con esta función vamos a eliminar al coder encontrado en la función anterior 
function empujarAlma(indiceAlmaElegida, almaCondenada){

    // $('#imagen-caida-gif').show(); // Muestra la imagen, como una consulta para empezar
    // $.ajax({
    //     url: '..',
    //     type: '..',
    //     complete: function(){
    //         // Consulta completa
    //         $('imagen-caida-gif').hide();
    //     }
        
    // });
    
    var almaMuerta = almaCondenada;

    sonidoCaida.play();                                                 // Al caer el jugador al agua, se activa un sonido

    // alert(almaCondenada);
    Swal.fire(almaMuerta+" ha caido :C");

    listaDeSacrificio.splice(indiceAlmaElegida,1);
    setTimeout(finDelJuego(), 5000);
};

// Función principal
// function iniciarJuego(){                                            // Dibujamos el canvas
//     canvas = document.getElementById('wheelOfDoom');
//     contexto = canvas.getContext('2d');

//     // imagenPrueba = new Image();

//     // imagenPrueba.src = "/assets/img/img-mario.png";

//     setInterval(function(){
//         principal();
//     },fps);
// };

function finDelJuego(){
    
    if(listaDeSacrificio.length == 0){
        document.getElementById('ohno').play();
        Swal.fire("Ya no hay más almas para sacrificar"), 2000;
        window.location.href='/index.html';
        
    }
}

// function borrarCanvas(){
//     canvas.width = 200;
//     canvas.height = 200;
// };

function mostrarAlma(){
    var resultado1 = document.getElementById('resultado1');
    resultado1.innerHTML = '';
    
    for(const alma of listaDeSacrificio){
        var datoParrafo = document.createElement('p');
        datoParrafo.innerText = alma;

        resultado1.appendChild(datoParrafo);
    }
};

empujar = document.getElementById('btn-empujar');
empujar.addEventListener('click', empujarAlma(x));

siguiente = document.getElementById('btn-siguiente');
siguiente.addEventListener('click', siguienteAlma());

mostrar = document.getElementById('btn-mostrar');
mostrar.addEventListener('click', mostrarAlma());

// function principal(){
//     //borrarCanvas();

//     //imagenMario.dibuja();
// }


// PARA BORRAR LOS DATOS DEL LOCALSTORAGE
// localStorage.removeItem("Lo-Que-Sea-Que-Haya-Guardado");