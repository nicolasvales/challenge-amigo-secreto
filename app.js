// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let ListaSorteados=[];

function agregarAmigo() {
    let Nombre=document.getElementById('amigo').value;
    resultado.innerHTML='';  
    if (ListaSorteados.includes(Nombre)){
     alert('El nombre ya esta en el sorteo');
     return;
    } else {
        if (!Nombre){
        alert('Ingrese un nombre para sortear');
    return
        }
    }
    ListaSorteados.push(Nombre);
    console.log(ListaSorteados);
    let listaAmigos = document.getElementById('listaAmigos');  
    let nuevoNombre = document.createElement('li');
    nuevoNombre.innerHTML = Nombre;
    listaAmigos.appendChild(nuevoNombre);
    document.getElementById('amigo').value = '';
}

function sortearAmigo() {
    Max=ListaSorteados.length;
    i=Math.floor(Math.random()*Max);
    console.log(ListaSorteados[i]);
    Ganador=(ListaSorteados[i]);
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `El ganador es: ${Ganador}`;
    listaAmigos.innerHTML = '';
    ListaSorteados=[];    
}
