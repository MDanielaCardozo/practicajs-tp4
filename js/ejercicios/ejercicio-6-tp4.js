/* 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. 
Crear el método mostrarLibro() para mostrar la información relativa al libro con el
siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.*/

class Libro {
    constructor(isbn, titulo, autor, nroDePaginas){
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.nroDePaginas = nroDePaginas;
    }

    mostrarLibro(){
        document.write(`<br>“El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene páginas ${this.nroDePaginas}”`)
    }

    get isbn (){
        return this.isbn;
    }

    set isbn (isbn){
        this.isbn = isbn;
    }

    get titulo (){
        return this.titulo;
    }

    set titulo (titulo){
        this.titulo = titulo;
    }

    get autor (){
        return this.autor;
    }

    set autor (autor){
        this.autor = autor;
    }

    get nroDePaginas(){
        return this.nroDePaginas;
    }

    set nroDePaginas(nroDePaginas){
        this.nroDePaginas = nroDePaginas;
    }

}

let elPrincipito = new Libro ("9780547260693", "The Little Prince", "Antoine de Saint-Exupéry", 150);
elPrincipito.mostrarLibro();

let rayuela = new Libro ("9788420465937", "Rayuela", "Julio Cortázar", 1200)
rayuela.mostrarLibro();

if (elPrincipito.nroDePaginas > rayuela.nroDePaginas){
    document.write(`<br>"El libro ${elPrincipito.titulo} tiene mayor cantidad de páginas(${elPrincipito.nroDePaginas})."`);
} else if (rayuela.nroDePaginas == elPrincipito.nroDePaginas) {
    document.write(`<br>"El libro ${elPrincipito.titulo} tiene la misma cantidad de páginas que el libro ${rayuela.titulo}."`);
} else {
    document.write(`<br>"El libro ${rayuela.titulo} tiene mayor cantidad de páginas (${rayuela.nroDePaginas})."`)
}
