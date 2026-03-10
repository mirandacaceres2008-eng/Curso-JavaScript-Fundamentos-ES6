// // formas de declarar funciones en javascript

// function sumar(a, b) {
//   return a + b;
// }

// console.log(sumar(5, 3)); // Imprime 8

// const multiplicar = function (a, b) {
//   return a * b;
// };

// console.log(multiplicar(5, 3)); // Imprime 15

// const clamp = (num, min, max) => {
//   return Math.min(Math.max(num, min), max); // clamp a un rango entre min y max
// };
// console.log(clamp(10, 0, 5)); // Imprime 5 (clamp a 5)

// // Parametros por defecto, rest y guard clauses

// function greet(name = "Invitado") {
//   if (!name.trim())
//     // trim elimina espacios en blanco al inicio y al final de la cadena
//     return "Hola, Invitado!";
//   return `Hola, ${name}!`;
// }

// console.log(greet()); // Imprime "Hola, Invitado!"
// console.log(greet("Alice"));

// // Arrays y metodos claves

// const numeros = [1, 2, 3, 4, 5];
// const cuadrados = numeros.map((num) => num * 2); // map crea un nuevo array con los resultados de la función aplicada a cada elemento
// console.log(cuadrados); // Imprime [1, 4, 9, 16, 25]

// const expenses = [
//   { amount: 50, category: "food" },
//   { amount: 20, category: "transport" },
//   { amount: 30, category: "food" },
// ];
// // filter 

// const foodExpenses = expenses.filter((expense) => expense.category === "food"); 
// // filter crea un nuevo array con los elementos que cumplen la condición
// console.log(foodExpenses); // Imprime [{ amount: 50, category: "food" }, { amount: 30, category: "food" }]

// const totalFoodExpense = foodExpenses.reduce((total, expense) => total + expense.amount, 0);
// // reduce acumula un valor a través de los elementos del array, en este caso sumando los montos de los gastos de comida
// console.log(totalFoodExpense); // Imprime 80

// // map filter reduce son métodos muy poderosos para trabajar con arrays de manera funcional y evitar mutaciones.
// // ejemplo de map y filter juntos
// const numbers = [1, 2, 3, 4, 5];
// const evenSquares = numbers
//   .filter((num) => num % 2 === 0) // Filtra los números pares
//   .map((num) => num * num); // Luego mapea esos números al cuadrado
// console.log(evenSquares); // Imprime [4, 16]


// EJEMPLOS DE MAP//

// CONVERTIR PRECIOS A DÓLARES
const preciosPesos = [10000, 20000, 30000];
const preciosDolares = preciosPesos.map(precio => precio / 4000);
console.log("Precios en dólares:", preciosDolares);

// PASAR NOMBRES A MAYÚSCULAS
const nombres = ["ana", "carlos", "maria"];
const nombresMayus = nombres.map(nombre => nombre.toUpperCase());
console.log("Nombres en mayúsculas:", nombresMayus);

// CALCULAR EDADES EN 5 AÑOS
const edades = [15, 18, 20];
const edadesEn5Anios = edades.map(edad => edad + 5);
console.log("Edades en 5 años:", edadesEn5Anios);

// CALCULAR NOTAS CON BONO
const notas = [3.0, 4.0, 2.5];
const notasConBono = notas.map(nota => nota + 0.5);
console.log("Notas con bono:", notasConBono);

// OBTENER NOMBRES DE PRODUCTOS
const productos = [
  { nombre: "Pan", precio: 2000 },
  { nombre: "Leche", precio: 3000 }
];

const nombresProductos = productos.map(p => p.nombre);
console.log("Nombres de productos:", nombresProductos);


// EJEMPLOS DE FILTER// 


// MAYORES DE EDAD
const edadesFiltro = [12, 18, 25, 15];
const mayores = edadesFiltro.filter(edad => edad >= 18);
console.log("Mayores de edad:", mayores);

// NÚMEROS PARES
const numeros = [1, 2, 3, 4, 5, 6];
const pares = numeros.filter(num => num % 2 === 0);
console.log("Números pares:", pares);

// ARTÍCULOS BARATOS
const articulos = [
  { nombre: "Pan", precio: 2000 },
  { nombre: "Carne", precio: 15000 }
];

const baratos = articulos.filter(p => p.precio < 5000);
console.log("Artículos baratos:", baratos);

// ESTUDIANTES APROBADOS
const resultados = [2.5, 3.5, 4.0, 2.0];
const aprobados = resultados.filter(nota => nota >= 3);
console.log("Aprobados:", aprobados);

// MENSAJES IMPORTANTES
const mensajes = [
  { texto: "Hola", importante: false },
  { texto: "Reunión hoy", importante: true }
];

const importantes = mensajes.filter(m => m.importante);
console.log("Mensajes importantes:", importantes);



// EJEMPLOS DE REDUCE//



// SUMAR GASTOS
const gastos = [10000, 20000, 15000];
const monto = gastos.reduce((acum, gasto) => acum + gasto, 0);
console.log("Total gastos:", monto);

// CONTAR ESTUDIANTES
const estudiantes = ["Ana", "Luis", "Pedro"];
const totalEstudiantes = estudiantes.reduce((acum) => acum + 1, 0);
console.log("Total estudiantes:", totalEstudiantes);

// CONTAR FRUTAS
const frutas = ["manzana", "pera", "uva"];
const cantidad = frutas.reduce((acum) => acum + 1, 0);
console.log("Cantidad de frutas:", cantidad);

// OBTENER NÚMERO MAYOR
const numerosMayor = [5, 10, 3, 20];
const mayor = numerosMayor.reduce((max, num) => num > max ? num : max);
console.log("Número mayor:", mayor);

// CONVERTIR LETRAS EN PALABRA
const letras = ["H", "O", "L", "A"];
const palabra = letras.reduce((acum, letra) => acum + letra);
console.log("Palabra formada:", palabra);
