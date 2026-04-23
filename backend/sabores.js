//const sabores = ["vainilla", "chocolate", "frutilla", "limón", "dulce deleche"];
// console.log(sabores);
// console.log(sabores[0]);
// sabores[3] = "damasco";
// console.log(sabores);
// sabores.push("menta");
// console.log(sabores);
// sabores.pop();
//console.log(sabores.length - 1);
//console.log(sabores[2]);
//console.log(sabores[10]);
//ejercicio 15 sabores
//sabores[1] = "menta granizada";
//console.log(sabores);
//sabores.push("tramontana");
//console.log(sabores);
//sabores.unshift("crema americana");
//console.log(sabores);
//ejercicio 16 sabores
//const compras = [];
//console.log(compras);
//compras.push("mesa");
//console.log(compras);
//compras.push("silla");
//compras.push("sillon");
//compras.push("butaca");
//console.log(compras);
//compras.pop();
//console.log(compras);
//compras.join("|");
//console.log(compras);
//ejercicio 17
const colores = ["rojo", "verde", "azul", "amarillo", "violeta"];
for (const color of colores) {
  console.log(color);
}
//Ejercicio 18
const numeros = [3, -1, 7, -4, 0, 12, -9, 5];
for (let numero of numeros) {
  if (numero > 0) {
    console.log(numero);
  }
}
//Ejercicio 19
const precios = [150, 200, 75, 320, 100];
let sumaTotal = 0;
for (let index = 0; index < precios.length; index++) {
  sumaTotal = sumaTotal + precios[index];
}
console.log(sumaTotal);
//ejercicio
const palabras = [
  "sol",
  "computadora",
  "mar",
  "progrqmacion",
  "luz",
  "televisor",
];
for (const palabra of palabras) {
  if (palabra.length >= 5) {
    console.log(palabra);
  }
}
