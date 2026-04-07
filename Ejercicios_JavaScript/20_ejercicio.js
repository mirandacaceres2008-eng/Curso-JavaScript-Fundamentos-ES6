const ventas = [
  { producto: "Mouse", cantidad: 3, precio: 50000 },
  { producto: "Teclado", cantidad: 2, precio: 120000 },
  { producto: "Monitor", cantidad: 1, precio: 800000 },
  { producto: "USB", cantidad: 5, precio: 30000 }
];

//  Filtrar productos con cantidad >= 2
const filtrados = ventas.filter(item => item.cantidad >= 2);
// item representa cada producto mientras filter revisa si cumple la condición
console.log("Filtrados:", filtrados);

//  Ordenar de mayor a menor según el precio
const ordenados = filtrados.sort((a, b) => b.precio - a.precio);
// a y b son dos productos que sort compara para organizar el array
console.log("Ordenados por precio:", ordenados);

//  Crear un nuevo arreglo con frases como "Producto - Total: XXXX"
const frases = ordenados.map(item => `${item.producto} - Total: ${item.cantidad * item.precio}`);
// item es cada producto que map usa para crear una nueva frase con el total
console.log("Frases:", frases);

//  Calcular el valor total de todas las ventas con reduce
const totalVentas = ordenados.reduce((acum, item) => acum + (item.cantidad * item.precio), 0);
// item es cada producto que reduce usa para sumar su total al acumulador
console.log("Valor total de ventas:", totalVentas);