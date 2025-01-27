// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let ListaSorteados=[];

function agregarAmigo() {                           
    let Nombre=document.getElementById('amigo').value; // ingresa el nombre ingresado en el elemento html a la variable Nombre //
    resultado.innerHTML='';  // limpia el resultado del sorteo //
    if (ListaSorteados.includes(Nombre)){  // verifica que el nombre no este repetido // 
     alert('El nombre ya esta en el sorteo');
     return;
    } else {
        if (!Nombre){
        alert('Ingrese un nombre para sortear');
    return
        }
    }
    ListaSorteados.push(Nombre); // ingresa el contenido de Nombre a la lista para el sorteo //
    console.log(ListaSorteados);
    let listaAmigos = document.getElementById('listaAmigos');   // ingresa la lista de sorteados //
    let nuevoNombre = document.createElement('li'); // crea un elemento para mostrar nombre por nombre de la lista //
    nuevoNombre.innerHTML = Nombre; // muestra cada nombre de manera individual //
    listaAmigos.appendChild(nuevoNombre); // agrega un nuevo elemento al final de una lista HTML //
    document.getElementById('amigo').value = ''; // limpia la caja donde se ingresan los nombres //
}

function sortearAmigo() {
    Max=ListaSorteados.length; // ingresa la longitud de la lista en una variable
    i=Math.floor(Math.random()*Max); // genera un numero aleotorio no mayor a la longitud de la lista //
    console.log(ListaSorteados[i]);
    Ganador=(ListaSorteados[i]); // ingresa en la variable Ganador el nombre sorteado mediante el uso del indice aleotorio//
    let resultado = document.getElementById('resultado'); // ingresa en la variable resultado el elemento conb id resultado //
    resultado.innerHTML = `El ganador es: ${Ganador}`; // muestra el resultado //
    listaAmigos.innerHTML = ''; // limpia la lista de amigos //
    ListaSorteados=[];   // limpia la lista de los sorteados //
}
