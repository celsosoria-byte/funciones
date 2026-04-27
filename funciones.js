function calcularPropina(totalcuenta, porcentaje) {
  return (totalcuenta * porcentaje) / 100;
}

function totalConPropina(totalcuenta, porcentaje) {
  const propina = calcularPropina(totalcuenta, porcentaje);
  return totalcuenta + propina;
}
console.log(calcularPropina(1000, 10));
console.log(calcularPropina(1000, 10));
console.log(calcularPropina(850, 15));
