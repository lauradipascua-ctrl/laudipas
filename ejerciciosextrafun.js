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
function mayorDeTres(a, b, c) {
  let mayor = a;
  if (b > mayor) {
    mayor = b;
  }
  if (c > mayor) {
    mayor = c;
  }
  return mayor;
}
console.log(mayorDeTres(3, 7, 2));
//Ejercicio 5
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
function gernerarContraseña(longitud) {
  let contraseña = "";
  for (let i = 0; i < longitud; i++) {
    let indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    contraseña = contraseña + caracteres[indiceAleatorio];
  }
  return contraseña;
}
console.log(gernerarContraseña(8));
