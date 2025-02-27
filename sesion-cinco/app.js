/*Problema: Crear objeto a partir de un Libro
Crear un objeto libro que contenga varias propiedades y un método para imprimir la información básica del libro.

Instrucciones para resolver el problema:
Cada libro debe ser un objeto con las siguientes propiedades: titulo: (string) el título del libro, autor: (string) el autor del libro, anio: (number) el año de publicación, estado: (string) el estado del libro, que puede ser 'disponible' o 'prestado'.*/

class Libro{
    constructor(titulo, autor, anio, estado) {
        this.titulo = titulo 
        this.autor = autor
        this.anio = anio
        this.estado = estado
    }
/*También debe tener un método describirLibro: (method) método para imprimir la información básica del libro. Algo como 'Libro titulado [titulo], escrito por [autor] en el año [anio], el estado es: [estado].'*/

    informacionLibro(){
        console.log(`Libro titulado ${this.titulo}, escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`);
    }
}

let libroUno = new Libro("Pechos y Huevos", "Mieko Kawakami", 2019, "disponible")

libroUno.informacionLibro()