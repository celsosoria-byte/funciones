function validarContraseña(contraseña) {
  if (contraseña.lenght >= 8 && contraseña !== "") {
    return true;
  } else {
    return false;
  }
}
console.log(validarContrasena("hola"));
console.log(validarContraseña("miClave123"));
console.log(validarContraseña(""));
g;
