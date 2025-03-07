const addButton = document.querySelector("#addButton")

let e = false

function agregarCarrito(){
    console.log(addButton.classList);
    console.log(Array.from(addButton.classList)) ;
    //console.log([...addButton.classList]);

    /*addButton.classList.add("btn-green")
    addButton.classList.remove("btn-blue")
    addButton.textContent = "agregado"*/

    addButton.classList.toggle("btn-green")

    if (e){
        addButton.textContent = "Add"
        e = false
    }else {
        addButton.textContent = "agregado"
        e = true
    }
}

addButton.addEventListener("click", agregarCarrito)