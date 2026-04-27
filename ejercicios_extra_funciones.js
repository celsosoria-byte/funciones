// ===== EJERCICIO 1: Calcular propina =====

function calcularPropina(totalCuenta, porcentaje) {
  return (totalCuenta * porcentaje) / 100;
}

function totalConPropina(totalCuenta, porcentaje) {
  return totalCuenta + calcularPropina(totalCuenta, porcentaje);
}

// Ejemplos de uso Ejercicio 1:
console.log("=== EJERCICIO 1: Calcular propina ===");
console.log(calcularPropina(1000, 10)); // 100
console.log(totalConPropina(1000, 10)); // 1100
console.log(totalConPropina(850, 15)); // 977.5

// ===== EJERCICIO 2: Validar contraseña =====

function validarContrasena(contrasena) {
  return contrasena.length >= 8 && contrasena !== "";
}

// Ejemplos de uso Ejercicio 2:
console.log("\n=== EJERCICIO 2: Validar contraseña ===");
console.log(validarContrasena("hola")); // false (menos de 8 caracteres)
console.log(validarContrasena("miClave123")); // true
console.log(validarContrasena("")); // false

// ===== EJERCICIO 3: Número par o impar =====

function parOImpar(numero) {
  return numero % 2 === 0 ? "par" : "impar";
}

// Usar dentro de un for loop para imprimir del 1 al 10
console.log("\n=== EJERCICIO 3: Número par o impar ===");
for (let i = 1; i <= 10; i++) {
  console.log(`${i} → ${parOImpar(i)}`);
}

// ===== EJERCICIO 4: Mayor de tres =====

function mayorDeTres(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}

// Ejemplos de uso Ejercicio 4:
console.log("\n=== EJERCICIO 4: Mayor de tres ===");
console.log(mayorDeTres(3, 7, 2)); // 7
console.log(mayorDeTres(10, 10, 5)); // 10
console.log(mayorDeTres(1, 1, 1)); // 1

// ===== EJERCICIO 5: Generador de contraseñas =====

function generarContrasena(longitud) {
  const caracteres = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];

  let contrasena = "";
  for (let i = 0; i < longitud; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    contrasena += caracteres[indiceAleatorio];
  }
  return contrasena;
}

// Ejemplos de uso Ejercicio 5:
console.log("\n=== EJERCICIO 5: Generador de contraseñas ===");
console.log(generarContrasena(8)); // algo como "k3rb9mxa"
console.log(generarContrasena(12)); // algo como "t7yq2nfp08lc"
