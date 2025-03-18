// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


//Aquí se busca hacer la variable para listar los amigos, crear el array amigos
const amigos = [];
//Aquí se busca hacer la variable para el amigoSorteado
let amigoSorteado = sortearAmigo();

//Función para asignarle valores a un elemento del html
function asignarValorElemento (elemento,valor){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = valor;
    return;
}

//Función para que la persona agregue un nombre al hacer click en el botón
function agregarAmigo(){
    let nombreDeAmigo = document.getElementById ('amigo').value;
    console.log(nombreDeAmigo);

    //La idea es comparar aquí si nombreDeAmigo es vacío o no, para sacar un alert
    if (nombreDeAmigo == ''){
        alert('Por favor, inserte un nombre');
    } else {
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#amigo');
    valorCaja.value = '';
}

//Función para sortear amigo
function sortearAmigo() {
    //Debo crear una acción de randomizar los valores de entre la lista de amigos

    //Mostrar el nombre elegido en un alert
    return;
}

//Ejecuta la función de asignar un valor al hacer click
asignarValorElemento ('onclick','Primero');
