function saludo(hora) {
  let saludofinal;

  if (hora >= 6 && hora <= 11) {
    saludofinal = "buenos dias";
  } else if (hora >= 12 && hora <= 19) {
    saludofinal = "buenas tardes";
  } else {
    saludofinal = "buenas noches";
  }
  return saludofinal;
}
console.log(saludo(14));
