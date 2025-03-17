// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

//Función para asignarle valores a un elemento del html
function asignarValorElemento (elemento,valor){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = valor;
}


//Función para que la persona agregue un nombre al hacer click en el botón
function agregarAmigo(){
    alert('Click desde el botón');
}

//Ejecuta la función de asignar un valor al hacer click
asignarValorElemento ('onclick','Primero');
