var canvas;
var contexto;
const fps=60;


 // En este arreglo o vector agregamos los nombres de los coders a sacrificar
// var sacrificio = [];
var sacrificio = [];

let imagenPrueba;

let anchoCuadro = 50;
let altoCuadro = 50;


// Cargamos el vector en el DOM
document.onload = function(){
    //document.sacrificio = [];
};


// Con esta función vamoa a añadir coders a la lista
function agregarAlma(){
    var nuevaalma = document.getElementById('alma').value;  // Captura el nombre del coder desde una caja de texto
    var longitud = sacrificio.length;                       // Hallamos la longitud del arreglo
    var contador=0;                                         // Variable auxiliar para contar si se repite un nombre

    for(let i=0; i<longitud; i++){                           // Este ciclo va de 0 a la longitud para revisar si el coder a ingresar está o no está
        if(sacrificio[i] === nuevaalma){                    // Este condicional evalua si se repite con todos los coders de la lista
            contador = contador + 1;                        // Si se repite, suma 1 a la variable auxiliar
        }
    }
    if(contador==0){                                         // Si el contador está en 0, el coder se agrega a la lista
        sacrificio.push(nuevaalma);

        guardarEnStorage(sacrificio);
    }
    else{                                                   // Si el contador no está en 0, el coder no puede ser ingresado en la lista y muestra una alerta
        document.getElementById('xyz').play();              // Si el contador no está en 0, el coder no puede ser ingresado en la lista y muestra una alerta
        Swal.fire({
            icon:'error',
            title:'Opss',
            text: 'Esta alma ya existe'
        });
    }

    
};

// Con esta función vemos la lista de coders que existen en el arreglo
function mostrarAlma(){
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    
    for(const nuevaalma of sacrificio){
        var datoParrafo = document.createElement('p');
        datoParrafo.innerText = nuevaalma;

        resultado.appendChild(datoParrafo);
    }
};


// COn esta función borramos a un coder de la lista, lo salvamos del sacrificio
function borrarAlma(){ 
    var ignoraralma = prompt("Ingrese el alma que desear salvar", "alma anónima");   // Captura el nombre de un prompt
    var longitud = sacrificio.length;                                                // Hallamos la longitud del arreglo

    for(let i=0; i<longitud; i++){                                                    // Con ete ciclo recorremos la lista buscando el coder a salvar
        if(sacrificio[i] == ignoraralma){                                            // Cuando una posición de la lista sea igual al coder ingresado, lo salvamos
            Swal.fire("Va a salvar esta alma "+ignoraralma);

            sacrificio.splice(i,1);                                                  // Borramos al coder indicado de la lista de sacrificios
        }
        else{
            document.getElementById('decide').play();                                                                        // Si el coder no está, mostramos una alerta informando
            Swal.fire("Dicha alma no está condenada");
            i=20000;
        }
    }
}

function prompt() {
    Swal
        .fire({
            title: "Ingrese el alma que desear salvar",
            input: "text",
            showCancelButton: true,
            confirmButtonText: "Guardar",
            cancelButtonText: "Cancelar",
        })
        .then(resultado => {
            if (resultado.value) {
                let nombre = resultado.value;
                console.log("Hola, " + nombre);
            }
        });
}

function guardarEnStorage(sacrificio){
    var listaSacrificio = sacrificio;

    localStorage.setItem("listaUsuarios", JSON.stringify(listaSacrificio));
}