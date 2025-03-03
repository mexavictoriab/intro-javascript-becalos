/*const saludame = () => {
    alert("Hola mundo")
}

//1. captura de elementos en variables
const parrafo = document.getElementById("txt")

//2. creacion de funciones

const modificar = () => {
    parrafo.innerText = "Javascript Dom" 
    parrafo.style.color = "tomato"
    parrafo.style.fontSize = "2rem"
    parrafo.style.fontStyle = "italic"
}

//captura de elementos por tag
const listaElementos = document.getElementsByTagName("li")*/

/*const inputComment = document.getElementById("inputComentario")

const botonComment= document.getElementsByTagName("button")[0]

const boxComments = document.getElementsByClassName("comentarios")[0]

const comentar = (event) => {
    event.preventDefault()
    console.log(inputComment.value)
    boxComments.innerHTML += `<li>${inputComment.value}</li>`
    inputComment.value = ""
}

botonComment.addEventListener("click", comentar)*/


const inputComment = document.getElementById("inputComentario");
const botonComment = document.querySelector("button");
const boxComments = document.querySelector(".comentarios");

const comentar = (event) => {
    event.preventDefault();

    if (inputComment.value.trim() === "") return; // Evitar comentarios vacíos

    const nuevoComentario = document.createElement("li");
    const fechaHora = new Date().toLocaleString(); // Obtener fecha y hora

    nuevoComentario.innerHTML = `
        <span>${inputComment.value}</span> 
        <small>${fechaHora}</small>
        <button class="eliminar">X</button>
    `;

    boxComments.appendChild(nuevoComentario);
    inputComment.value = "";

    // Agregar evento para eliminar comentario
    nuevoComentario.querySelector(".eliminar").addEventListener("click", () => {
        nuevoComentario.remove();
    });
};

botonComment.addEventListener("click", comentar);