console.log(10 === 10);
console.log("5" === 5);
console.log(8 !== 8);
console.log(15 >= 20);
console.log("hola" !== "chau");
console.log(0 === false);
//ejercicio 2
let edad = 70;
if (edad < 5) {
  console.log("Entrada gratis");
} else if (edad >= 5 && edad <= 11) {
  console.log("Entrada infantil");
} else if (edad >= 12 && edad <= 64) {
  console.log("entrada general");
} else if (edad > 65) {
  console.log("entrada jubilado");
}
//ejercicio 3
let mes = 12;
if (12 || 1 || 2) {
  console.log("verano");
}
//ejercicio 4
let num1 = 10;
let num2 = 5;
let operacion = "dividir";

if (operacion === "sumar") {
  console.log(num1 + num2);
} else if (operacion === "restar") {
  console.log(num1 - num2);
} else if (operacion === "multiplicar") {
  console.log(num1 * num2);
} else if (operacion === "dividir") {
  if (num2 !== 0) {
    console.log(num1 / num2);
  } else {
    console.log("no se puede dividir por 0");
  }
}
//PARTE 4 ejercicio 1
const frutas = ["manzana", "naranja", "banana"];
// console.log(frutas[1]);
// console.log(frutas.length);
// console.log(frutas[frutas.length - 1]);
// console.log(frutas.push("fresa"));
// console.log(frutas.pop("naranja"));
// console.log(frutas.unshift("guayaba"));
frutas.shift();
console.log(frutas);
console.log(frutas.join(","));
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}
for (const fruta of frutas) {
  console.log(fruta);
}
