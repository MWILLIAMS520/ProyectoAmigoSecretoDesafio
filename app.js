// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo(){
    const añadirAmigo = document.getElementById("amigo");
    const nombreAmigo = añadirAmigo.value.trim();

    if(nombreAmigo === ""){
        alert ("El campo Nombre no debe de estar vacio");
        return;
    }

    amigos.push(nombreAmigo)

    actualizarLista()


    añadirAmigo.value = "";
    añadirAmigo.focus();

}

function actualizarLista(){
    const listaAmigos = document.getElementById("listaAmigos")
    listaAmigos.innerHTML = "";

    amigos.forEach(amigo => {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaAmigos.appendChild(li);
    });
}

function sortearAmigo(){
    if(amigos.length === 0){
        alert("No hay amigos en el sorteo, ingrese mínimo 2 nombres para efectuar el sorteo..!!");
        return;
    }

    const indiceRandom = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceRandom];

    const resultSorteo = document.getElementById("resultado");
    resultSorteo.innerHTML = `<li> ${amigoSorteado}</li>`
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("btnAdicionar").addEventListener("click", agregarAmigo)
    document.getElementById("btnSortear").addEventListener("click", sortearAmigo)
})

console.log(amigos);