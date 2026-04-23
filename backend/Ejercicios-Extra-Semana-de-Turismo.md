# Ejercicios Extra — Semana de Turismo

### JavaScript — Condicionales, Operadores Lógicos, Loops y Arrays

> 💡 Esta guía tiene **conceptos clave** antes de cada sección para que puedas repasar antes de resolver. ¡Tomalo con calma!

---

## 🔵 Parte 1 — Comparadores y Condicionales

### 📖 Concepto clave

Los **comparadores** devuelven `true` o `false`.

| Operador | Significado               |
| -------- | ------------------------- |
| `===`    | Igual en valor **y** tipo |
| `!==`    | Distinto en valor o tipo  |
| `>`      | Mayor que                 |
| `<`      | Menor que                 |
| `>=`     | Mayor o igual             |
| `<=`     | Menor o igual             |

> ⚠️ Siempre preferí `===` sobre `==`. El `==` hace conversiones automáticas de tipo que pueden dar resultados inesperados.

```js
// Estructura de un if / else if / else:
if (condición) {
  // se ejecuta si la condición es true
} else if (otraCondición) {
  // se ejecuta si la primera fue false y esta es true
} else {
  // se ejecuta si ninguna condición anterior fue true
}
```

---

### Ejercicio 1 — Predecir sin ejecutar ⭐

Antes de correr el código, escribí en papel qué creés que devuelve cada línea. Luego verificá en consola.

```js
10 === 10;
"5" === 5;
8 !== 8;
15 >= 20;
"hola" !== "chau";
0 === false;
```

---

### Ejercicio 2 — Ticket de cine ⭐

Declará una variable `edad`. Usando `if / else if / else`, imprimí el tipo de entrada que le corresponde:

| Condición     | Resultado            |
| ------------- | -------------------- |
| Menor de 5    | `"Entrada gratuita"` |
| Entre 5 y 11  | `"Entrada infantil"` |
| Entre 12 y 64 | `"Entrada general"`  |
| 65 o más      | `"Entrada jubilado"` |

> 💡 Probá con los valores: `3`, `8`, `25` y `70` para cubrir todos los casos.

---

### Ejercicio 3 — Estaciones del año ⭐

Declará una variable `mes` (número del 1 al 12). Usando condicionales, imprimí la estación correspondiente (tomá como referencia el hemisferio sur 🇺🇾):

| Meses     | Estación      |
| --------- | ------------- |
| 12, 1, 2  | `"Verano"`    |
| 3, 4, 5   | `"Otoño"`     |
| 6, 7, 8   | `"Invierno"`  |
| 9, 10, 11 | `"Primavera"` |

> 💡 Necesitás usar `||` (OR) para comparar múltiples valores en una condición. Ejemplo: `mes === 12 || mes === 1`.

---

### Ejercicio 4 — Calculadora básica ⭐⭐

Declará tres variables: `num1`, `num2` y `operacion` (un string: `"sumar"`, `"restar"`, `"multiplicar"` o `"dividir"`).

Usando condicionales, calculá e imprimí el resultado. Considerá el caso de división por cero.

> 💡 Para división por cero podés anidar un `if` dentro del caso `"dividir"`.

---

## 🟡 Parte 2 — Truthy, Falsy y Operadores Lógicos

### 📖 Concepto clave

En JavaScript, un valor es **falsy** si se comporta como `false` dentro de un `if`. Los valores falsy son exactamente estos seis:

```js
false; // booleano falso
0; // número cero
(""); // string vacío
null; // ausencia de valor
undefined; // variable sin asignar
NaN; // Not a Number
```

**Todo lo demás es truthy**, incluso `[]` (array vacío), `{}` (objeto vacío) o `"false"` (string con texto).

---

### 📖 Operadores lógicos

| Operador | Nombre   | Resultado                                       |
| -------- | -------- | ----------------------------------------------- |
| `&&`     | AND (Y)  | `true` solo si **ambas** condiciones son `true` |
| `\|\|`   | OR (O)   | `true` si **al menos una** condición es `true`  |
| `!`      | NOT (No) | Invierte el valor booleano                      |

```js
// Ejemplos:
true && false; // → false (las dos deben ser true)
true || false; // → true  (basta con una)
!true; // → false
```

---

### Ejercicio 5 — ¿Truthy o falsy? ⭐

Sin ejecutar, predecí qué imprime cada bloque. Luego verificá.

```js
// a)
const nombre = "";
if (nombre) {
  console.log("Hay nombre");
} else {
  console.log("No hay nombre");
}

// b)
const lista = [];
if (lista) {
  console.log("La lista existe");
} else {
  console.log("No existe");
}

// c)
const cantidad = 0;
if (cantidad) {
  console.log("Hay items");
} else {
  console.log("No hay items");
}

// d)
const mensaje = "0";
if (mensaje) {
  console.log("Hay mensaje");
} else {
  console.log("No hay mensaje");
}
```

---

### Ejercicio 6 — Validar usuario ⭐⭐

Declará las variables `nombreUsuario`, `email` y `edad`.

Mostrá `"Registro válido"` solo si se cumplen **las tres condiciones** al mismo tiempo:

- `nombreUsuario` no está vacío (truthy)
- `email` no está vacío (truthy)
- `edad` es mayor o igual a 18

En cualquier otro caso, mostrá `"Datos incompletos o inválidos"`.

> 💡 Usá `&&` para combinar las tres condiciones en una sola línea.

---

### Ejercicio 7 — Precio con descuento ⭐⭐

Declará `precio` y `tieneTarjetaSocio` (booleano). Aplicá las siguientes reglas:

- Si el precio es mayor a 500 **O** tiene tarjeta de socio → 20% de descuento
- Si el precio es mayor a 200 **Y** tiene tarjeta de socio → 30% de descuento (este caso va primero)
- En cualquier otro caso → sin descuento

Imprimí el precio final.

---

## 🟠 Parte 3 — For Loops

### 📖 Concepto clave

Un `for` repite un bloque de código una cantidad determinada de veces.

```js
// Estructura:
for (inicio; condición; actualización) {
  // código que se repite
}

// Ejemplo — imprime del 1 al 5:
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

- **Inicio**: dónde empieza el contador (`let i = 1`)
- **Condición**: hasta cuándo sigue (`i <= 5`)
- **Actualización**: cómo cambia el contador en cada vuelta (`i++` suma 1, `i--` resta 1, `i += 2` suma de a 2)

> 💡 El operador `%` (módulo) devuelve el **resto** de una división. Se usa mucho para saber si un número es par o múltiplo de algo:
>
> ```js
> 10 % 2 === 0; // true → 10 es par
> 9 % 3 === 0; // true → 9 es múltiplo de 3
> ```

---

### Ejercicio 8 — Números pares ⭐

Escribí un `for` que imprima todos los números **pares** del 2 al 20.

**Resultado esperado:** `2  4  6  8  10  12  14  16  18  20`

> 💡 Opción A: empezá en 2 y aumentá de a `i += 2`. Opción B: dentro del loop, usá `if (i % 2 === 0)`.

---

### Ejercicio 9 — Tabla de multiplicar ⭐

Pedile al usuario un número (podés declararlo como variable) e imprimí su tabla de multiplicar del 1 al 10.

**Ejemplo con el número 7:**

```
7 x 1 = 7
7 x 2 = 14
...
7 x 10 = 70
```

> 💡 Podés armar el string así: ``console.log(`${num} x ${i} = ${num * i}`)``

---

### Ejercicio 10 — Cuenta regresiva ⭐

Escribí un `for` que imprima una cuenta regresiva del 10 al 1 y al final imprima `"¡Despegue!"`.

**Resultado esperado:** `10  9  8  7  6  5  4  3  2  1  ¡Despegue!`

---

### Ejercicio 11 — Suma de impares ⭐⭐

Usando un `for`, calculá la suma de todos los números **impares** del 1 al 50.

**Resultado esperado:** `625`

> 💡 Un número es impar si `numero % 2 !== 0`.

---

### Ejercicio 12 — Patrón de asteriscos ⭐⭐

Escribí un `for` que imprima el siguiente patrón:

```
*
**
***
****
*****
```

> 💡 Podés acumular asteriscos en una variable string dentro del loop: `let linea = ""; linea += "*";`

---

## 🔴 Parte 4 — Arrays

### 📖 Concepto clave

Un **array** es una lista ordenada de valores. Cada elemento tiene un **índice** que empieza en `0`.

```js
const frutas = ["manzana", "naranja", "banana"];
//                  [0]         [1]        [2]

frutas[0]; // → "manzana"
frutas.length; // → 3
frutas[frutas.length - 1]; // → último elemento: "banana"
```

**Métodos esenciales:**

| Método        | ¿Qué hace?                        | Ejemplo                   |
| ------------- | --------------------------------- | ------------------------- |
| `push(x)`     | Agrega `x` al **final**           | `frutas.push("uva")`      |
| `pop()`       | Elimina y devuelve el **último**  | `frutas.pop()`            |
| `unshift(x)`  | Agrega `x` al **inicio**          | `frutas.unshift("fresa")` |
| `shift()`     | Elimina y devuelve el **primero** | `frutas.shift()`          |
| `join("sep")` | Une elementos en un string        | `frutas.join(", ")`       |

**Para recorrer arrays:**

```js
// for clásico (cuando necesitás el índice):
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// for...of (más limpio, cmuando solo necesitás el valor):
for (const fruta of frutas) {
  console.log(fruta);
}
```

---

### Ejercicio 13 — Acceder al array ⭐

```js
const paises = ["Argentina", "Uruguay", "Brasil", "Chile", "Paraguay"];
```

- a) Imprimí el primer país.
- b) Imprimí el último país usando `length` (sin escribir el índice directamente).
- c) Imprimí el país en la posición 3.
- d) ¿Qué devuelve `paises[10]`? ¿Por qué?
- e) ¿Cuántos países tiene el array?

---

### Ejercicio 14 — Modificar el array ⭐

Usando el array del ejercicio anterior:

- a) Reemplazá `"Brasil"` por `"Bolivia"`.
- b) Agregá `"Perú"` al final.
- c) Agregá `"Venezuela"` al inicio.
- d) Eliminá el último elemento e imprimí cuál fue.
- e) Imprimí el array completo después de cada cambio.

---

### Ejercicio 15 — Lista de tareas ⭐

Creá un array vacío llamado `tareas`. Usando `push`, agregá estas 5 tareas:
`"Estudiar JavaScript"`, `"Hacer ejercicio"`, `"Leer 30 minutos"`, `"Cocinar"`, `"Llamar a un amigo"`.

- a) Mostrá cuántas tareas hay.
- b) Mostrá la lista con `join` usando `"\n"` (salto de línea) como separador.
- c) Eliminá la última tarea con `pop` e imprimí cuál fue.
- d) Mostrá el array final.

---

### Ejercicio 16 — Recorrer con for...of ⭐

```js
const animales = ["perro", "gato", "conejo", "tortuga", "loro"];
```

Recorré el array con `for...of` e imprimí cada animal con su posición. Ejemplo:

```
1. perro
2. gato
3. conejo
...
```

> 💡 Para tener el número de posición usá una variable contadora fuera del loop: `let contador = 1;` y al final de cada vuelta hacé `contador++`.

---

### Ejercicio 17 — Filtrar negativos ⭐

```js
const temperaturas = [22, -3, 15, -8, 30, -1, 18, 7];
```

Recorré el array e imprimí solo las temperaturas **menores a 0**.

**Resultado esperado:** `-3  -8  -1`

---

### Ejercicio 18 — El mayor del grupo ⭐⭐

```js
const edades = [14, 32, 19, 45, 27, 8, 61, 23];
```

Usando un loop, encontrá la edad **más alta** del array sin usar métodos como `Math.max`.

> 💡 Creá una variable `mayor = 0` antes del loop. En cada vuelta, si el elemento actual es mayor que `mayor`, actualizá `mayor`.

**Resultado esperado:** `61`

---

### Ejercicio 19 — Construir array filtrado ⭐⭐

```js
const notas = [45, 78, 90, 55, 32, 88, 61, 70, 49, 95];
```

Creá un nuevo array vacío llamado `aprobados`. Recorré `notas` y agregá con `push` solo las notas mayores o iguales a 60.

Imprimí el array `aprobados` y cuántos hay.

**Resultado esperado:** `[78, 90, 88, 61, 70, 95]` — 6 aprobados

---

### Ejercicio 20 — Inventario de tienda ⭐⭐

```js
const stock = [
  "manzana",
  "banana",
  "naranja",
  "uva",
  "pera",
  "durazno",
  "kiwi",
];
```

- a) Imprimí solo las frutas cuyo nombre tenga **más de 5 letras**.
- b) Contá cuántas frutas tienen 5 letras o menos.
- c) Mostrá las frutas largas unidas en un string con `-` como separador.

> 💡 Recordá que `.length` funciona también en strings: `"hola".length` devuelve `4`.

---

## 🟣 Parte 5 — Desafíos finales (para los que quieran más 🚀)

### Ejercicio 21 — Invertir un array ⭐⭐⭐

```js
const original = [1, 2, 3, 4, 5];
```

Sin usar el método `.reverse()`, creá un nuevo array `invertido` que tenga los mismos elementos en orden opuesto.

**Resultado esperado:** `[5, 4, 3, 2, 1]`

> 💡 Recorré el array original del último al primero usando un `for` con `i--`, y hacé `push` a `invertido` en cada vuelta.

---

### Ejercicio 22 — Adivinar el número ⭐⭐⭐

Declará `numeroSecreto = 7` y un array de intentos:

```js
const intentos = [3, 9, 1, 7, 5];
```

Recorré el array. Si encontrás el número secreto, imprimí `"¡Encontrado en el intento número X!"` (donde X es la posición, empezando en 1) y dejá de recorrer.

Si no está, imprimí `"Número no encontrado"`.

> 💡 Para detener un loop antes de que termine, usá la palabra `break`.

---

### Ejercicio 23 — Palabras únicas ⭐⭐⭐

```js
const palabras = ["sol", "luna", "sol", "mar", "luna", "sol", "viento"];
```

Creá un nuevo array `unicas` que contenga solo palabras que no se repitan (la primera vez que aparecen).

**Resultado esperado:** `["sol", "luna", "mar", "viento"]`

> 💡 Antes de hacer `push`, verificá si la palabra ya está en `unicas`. Podés usar `.includes()`: `unicas.includes(palabra)` devuelve `true` si ya está.

---

_¡Buenas vacaciones y buena practica!_
