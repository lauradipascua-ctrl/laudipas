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
for (let i = 1; i <= 10; i++) {
  console.log(i + "->" + parOImpar(i));
}

//Ejercicio 4
function mayorDeTres(num1, num2, num3) {
  let mayor = num1;
  if (num2 > mayor) {
    mayor = num2;
  }
  if (num3 > mayor) {
    mayor = num3;
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
    const aleatorio = Math.floor(Math.random() * caracteres.length);
    contraseña += caracteres[aleatorio];
  }
  return contraseña;
}
console.log(gernerarContraseña(8));
