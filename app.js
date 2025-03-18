// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


//Aquí se busca hacer la variable para listar los amigos, crear el array amigos
let amigos = [];
//Aquí se busca hacer la variable para el amigoSorteado


//Función para que la persona agregue un nombre al hacer click en el botón
function agregarAmigo(){
    let nombreDeAmigo = document.getElementById ('amigo').value;
    
    //La idea es comparar aquí si nombreDeAmigo es vacío o no, para sacar un alert
    if (nombreDeAmigo == ''){
        alert('Por favor, inserte un nombre');
        return;
    } 
    amigos.push(nombreDeAmigo);
    limpiarCaja();
    actualizarListaAmigos();
    console.log(amigos);
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#amigo');
    valorCaja.value = '';
}

function actualizarListaAmigos(){
    let listaNombres = document.getElementById('listaAmigos');
    listaNombres.innerHTML = '';
    for (let i = 0; i < amigos.length; i++){
        let li = document.createElement('li');
        li.textContent = amigos[i];
        listaNombres.appendChild (li);
        }
}

//Función para sortear amigo

    //Debo crear una acción de randomizar los valores de entre la lista de amigos

    //Mostrar el nombre elegido en un alert
