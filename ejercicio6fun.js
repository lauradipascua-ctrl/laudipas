//function calcularDoble(n) {
//return n * 2;
//}

//const calcularDoble = (n) => {
//return n * 2;
//};

//function esMayorDeEdad(edad) {
//return edad >= 18;
//}
//const esMayorDeEdad = (edad) => {
//return edad >= 18;
//};
//ejercicio 7 Explorar Math
// console.log(Math.round(7.5));
// console.log(Math.floor(7.9));
// console.log(Math.abs(-42));
// console.log(Math.max(1, 5, 3, 9, 2));
// console.log(Math.min(1, 5, 3, 9, 2));
// console.log(Math.pow(2, 8));
// console.log(Math.sqrt(144));
// console.log(Math.round(7.4));
// console.log(Math.ceil(7.1));
// console.log(Math.abs(24));

//ejercicio 8
function tirarDado() {
  return Math.floor(Math.random() * 6) + 1;
}
console.log(tirarDado());
//ejercicio 9
function areaCirculo(radio) {
  return Math.PI * Math.pow(radio, 2);
}
console.log(areaCirculo(5));
console.log(areaCirculo(10));
//Ejercicio 10
const precios = [19.99, 4.5, 13.75, 8.2, 99.49];
for (const precio of precios) {
  console.log("original: " + precio);
  console.log("redondeo hacia arriba", Math.ceil(precio));
  console.log("redondeo hacia abajo", Math.floor(precio));
}
