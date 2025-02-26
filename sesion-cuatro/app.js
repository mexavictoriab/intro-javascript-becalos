let librosLeidos = [

]

const agregarLibro = (tituloLibro) =>{
    librosLeidos.push(tituloLibro);
    console.log(`Libro agregado: ${tituloLibro}`)
}


const mostrarLibrosLeidos = (array) => {
    for(let i = 0; i < array.length ;i++){
        console.log(`Libro ${i + 1} : ${librosLeidos[i]}`);
    }
}



agregarLibro("El Principito")
agregarLibro("Ceniza en la boca")
agregarLibro("Casas vacías")
agregarLibro("Dios fulmine a la que escriba sobre mí")
agregarLibro("Anticitera, artefacto dentado")
mostrarLibrosLeidos(librosLeidos)