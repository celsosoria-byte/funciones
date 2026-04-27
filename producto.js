// Ejercicio 3: Construir y modificar

const producto = {
  nombre: "Laptop",
  precio: 1000,
  stock: 5,
  disponible: true,
};

// a) Imprimir el precio original
console.log("a) Precio original:", producto.precio);

// b) Aplicar un descuento del 20% al precio y actualizar la propiedad
const descuento = producto.precio * 0.2;
producto.precio = producto.precio - descuento;
console.log("b) Precio con descuento del 20%:", producto.precio);

// c) Si el stock es 0, cambiar disponible a false
if (producto.stock === 0) {
  producto.disponible = false;
}

// d) Agregar una propiedad nueva: categoria
producto.categoria = "Electrónica";

// e) Imprimir el objeto final completo
console.log("e) Objeto final completo:");
console.log(producto);
