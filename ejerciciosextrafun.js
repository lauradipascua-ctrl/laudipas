function calcularPropina(totalCuenta, porcentaje) {
  return totalCuenta / porcentaje;
}
function totalConPropina(totalCuenta, porcentaje) {
  return totalCuenta + calcularPropina(totalCuenta, porcentaje);
}
console.log(totalConPropina(2500, 15));

//Ejercicio 2
function validarContraseña(contraseña) {
  if (contraseña.length < 8) {
    return false;
  } else if (contraseña === "") {
    return false;
  } else {
    return true;
  }
}
console.log(validarContraseña("hola"));
console.log(validarContraseña("miclave123"));
console.log(validarContraseña(""));

//Ejercicio 3
function parOImpar(numero) {
  if (numero % 2 === 0) {
    return "par";
  } else {
    return "impar";
  }
}
console.log(parOImpar(74));

//Ejercicio 4
