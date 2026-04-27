const libro = {
  titulo: "Cien años de soledad",
  autor: "Gabriel Garcia Marquez",
  paginas: 471,
  leido: false,
};

// a) Imprimir el título usando dot notation
console.log("a) Título (dot notation):", libro.titulo);

// b) Imprimir las páginas usando bracket notation
console.log("b) Páginas (bracket notation):", libro["paginas"]);

// c) Imprimir el valor de una propiedad que no existe
console.log("c) Propiedad inexistente:", libro.editorial);

// d) Marcar el libro como leído e imprimir el objeto
libro.leido = true;
console.log("d) Libro marcado como leído:");
console.log(libro.);

