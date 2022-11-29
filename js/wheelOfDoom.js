var canvas;
var contexto;
const fps=60;


 // En este arreglo o vector agregamos los nombres de los coders a sacrificar
var sacrificio = [];


 // Cargamos el vector en el DOM
document.onload = function(){
    document.sacrificio = [];
}


// Con esta función vamoa a añadir coders a la lista
function agregarAlma(){
    var nuevaalma = document.getElementById('alma').value;  // Captura el nombre del coder desde una caja de texto
    var longitud = sacrificio.length;                       // Hallamos la longitud del arreglo
    var contador=0;                                         // Variable auxiliar para contar si se repite un nombre

    for(let i=0; i<longitud; i++){                          // Este ciclo va de 0 a la longitud para revisar si el coder a ingresar está o no está
        if(sacrificio[i] === nuevaalma){                    // Este condicional evalua si se repite con todos los coders de la lista
            contador = contador + 1;                        // Si se repite, suma 1 a la variable auxiliar
        }
    }
    if(contador==0){                                         // Si el contador está en 0, el coder se agrega a la lista
        sacrificio.push(nuevaalma);
    }
    else{                                                   // Si el contador no está en 0, el coder no puede ser ingresado en la lista y muestra una alerta
        alert("Esta alma ya existe");
    }

    
}

// Con esta función vemos la lista de coders que existen en el arreglo
function mostrarAlma(){
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    for(const nuevaalma of sacrificio){
        var datoParrafo = document.createElement('p');
        datoParrafo.innerText = nuevaalma;

        resultado.appendChild(datoParrafo);
    }
}


// COn esta función borramos a un coder de la lista, lo salvamos del sacrificio
function borrarAlma(){ 
    var salvaralma = prompt("Ingrese el alma que desear salvar", "alma anónima");   // Captura el nombre de un prompt
    var longitud = sacrificio.length;                                               // Hallamos la longitud del arreglo

    for(let i=0; i<longitud; i++){                                                  // Con ete ciclo recorremos la lista buscando el coder a salvar
        if(sacrificio[i] == salvaralma){                                            // Cuando una posición de la lista sea igual al coder ingresado, lo salvamos
            alert("Va a salvar esta alma");

            sacrificio.splice(i,1);                                                 // Borramos al coder indicado de la lista de sacrificios
        }
        else{                                                                       // Si el coder no está, mostramos una alerta informando
            alert("Dicha alma no está condenada");
            break;
        }
    }
}


// Con esta función elegimos aleatoriamente un lugar de la lista de coders
function elegirAlma(){
    var accion = document.getElementById('btn-siguiente'); 

    var valor1 = sacrificio.length + 1;                                             // A la longitud del vecotr le sumamos 1, para poder aplicar bien la función ramdon

    var valor2 = Math.floor(Math.random*valor1);                                    // Hallamos un valor aleatorio entre 0 y la variable valor1, y la volvemos un entero

    for(let j=0; j<sacrificio.length; j++){                                         // En este ciclo vamos a buscar la posición valor2 dentro del arreglo
        if(valor2 == j){                                                            // Cuando la posición se encuentre, pasamoa eliminar    
            var almacondenada = sacrificio[j];                                      // Guardamos el nombre del coder de la posición encontrada    

            alert(almacondenada);                                                   // Se puede cambiar este mensaje por otro y agregar la animación del agua
        }
    }
}


// Con esta función vamos a eliminar al coder encontrado en la función anterior 
function empujarAlma(){
    var accion = document.getElementById('btn-empujar');

    sacrificio.splice[valor2,1];                                                    // Eliminamos el lugar valor2 del arreglo, que corresponde al coder sacrificado      
}

function iniciarJuego(){                                                            // Dibujamos el canvas
    canvas = document.getElementById('wheelOfDoom');
    contexto = canvas.getContext('2d');

    setInterval(function(){
        principal();
    },fps);
}

