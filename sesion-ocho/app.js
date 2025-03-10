const botonComment = document.querySelector("button");
const boxComments = document.querySelector(".comentarios");
const inputNombre = document.getElementById("inputNombre");
const inputComment = document.getElementById("inputComentario");

const comentar = (event) => {
    event.preventDefault();

    if (inputNombre.value.trim() === "" || inputComment.value.trim() === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    const nuevoComentario = document.createElement("li");
    const fechaHora = new Date().toLocaleString();

    nuevoComentario.innerHTML = `
        <strong>${inputNombre.value}</strong>
        <span>${inputComment.value}</span> 
        <small>${fechaHora}</small>
        <button class="eliminar">X</button>
    `;

    boxComments.appendChild(nuevoComentario);
    inputNombre.value = "";
    inputComment.value = "";

    nuevoComentario.querySelector(".eliminar").addEventListener("click", () => {
        nuevoComentario.remove();
    });
};

botonComment.addEventListener("click", comentar);

