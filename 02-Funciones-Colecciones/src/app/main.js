// "use strict";

// // Funciones setup + validaciones base

// function toNumeberString(value, label = "Valor") {
//   const n = Number(value);
//   if (!Number.isFinite(n)) {
//     throw new Error(`${label} debe ser un número válido`);
//   }
//   return n;
// }

// function assertNonNegative(value, label = "Valor") {
//   if (value < 0) {
//     throw new Error(`${label} debe ser un número no negativo`);
//   }
// }

// function toNonEmptyString(value, label = "Valor") {
//   const s = String(value).trim();
//   if (s.length === 0) {
//     throw new Error(`${label} no puede ser una cadena vacía`);
//   }
//   return s;
// }

// // paso  Dataset de ejemplo + normalizacion

// function nomalizeExpense(raw) {
//   const id = toNumeberString(raw.id, "ID");
//   const fecha = toNonEmptyString(raw.fecha, "Fecha");
//   const categoria = toNonEmptyString(raw.categoria, "Categoría");
//   const descripcion = toNonEmptyString(raw.descripcion, "Descripción");
//   const monto = toNumeberString(raw.monto, "Monto");
//   assertNonNegative(monto, "Monto");

//   return {
//     id,
//     fecha,
//     categoria,
//     descripcion,
//     monto,
//   };

//   const expenses = [
//     normalizeExpense({
//       id: "e1",
//       fecha: "2024-01-15",
//       categoria: "Alimentación",
//       descripcion: "Compra en supermercado",
//       monto: 8500000,
//     }),
//     normalizeExpense({
//       id: "e2",
//       fecha: "2024-01-20",
//       categoria: "Transporte",
//       descripcion: "Pasaje de bus",
//       monto: 150000,
//     }),
//     normalizeExpense({
//       id: "e3",
//       fecha: "2024-01-25",
//       categoria: "Entretenimiento",
//       descripcion: "Entrada al cine",
//       monto: 500000,
//     }),
//     nomalizeExpense({
//       id: "e4",
//       fecha: "2024-01-30",
//       categoria: "Salud",
//       descripcion: "Consulta médica",
//       monto: 2000000,
//     }),
//     nomalizeExpense({
//       id: "e5",
//       fecha: "2024-02-05",
//       categoria: "Educación",
//       descripcion: "Curso en línea",
//       monto: 1200000,
//     }),
//     nomalizeExpense({
//       id: "e6",
//       fecha: "2024-02-05",
//       categoria: "Educación",
//       descripcion: "Alimentacion",
//       monto: 1200000,
//     }),
//     nomalizeExpense({
//       id: "e6",
//       fecha: "2024-02-05",
//       categoria: "Salud",
//       descripcion: "medicamentos",
//       monto: 1200000,
//     }),
//     nomalizeExpense({
//       id: "e6",
//       fecha: "2024-02-05",
//       categoria: "Entretenimiento",
//       descripcion: "Parque de diversiones",
//       monto: 1200000,
//     }),
//   ];
// }

// // paso 3 estadisticas básicas

// function calStats(expenses) {
//   if (expenses.length === 0) {
//     return {
//       total: 0,
//       promedio: 0,
//       maximo: 0,
//       minimo: 0,
//     };
//   }

//   const values = expenses.map((e) => e.monto); //[montos]
//   const total = values.reduce((acc, n) => acc + n, 0);
//   const minimo = Math.min(...values);
//   const maximo = Math.max(...values);
//   const promedio = total / values.length;

//   return { total, promedio, maximo, minimo };
// }

// // totales por categoria

// function totalByCategory(expenses) {
//   return expenses.reduce((acc, e) => {
//     acc[e.categoria] = (acc[e.categoria] || 0) + e.monto;// si no existe la categoria, se inicializa en 0 y se le suma el monto del gasto actual
//     return acc;
//   }, {});
// }

// // Reporte en consola

// function formatCOP(value) {
//   return new Intl.NumberFormat("es-CO", {
//     style: "currency",
//     currency: "COP",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// function printReport(expenses) {
//   const stats = calStats(expenses);
//   const byCat = totalByCategory(expenses);

//   console.group("REPORTE - ANALIZADOR DE GASTOS");
//   console.log("Resumen: ");
//   console.table([
//     {
//       Total: formatCOP(stats.total),
//       Promedio: formatCOP(stats.promedio),
//       Minimo: formatCOP(stats.min),
//       Maximo: formatCOP(stats.maximo),
//       Registros: expenses.length,
//     },
//   ]);
// }



// Validaciones y utilidades
function validarNumero(valor, nombre = "Valor") { //validarNumero → asegura que el dato sea un número positivo.
  const numero = Number(valor);
  if (!Number.isFinite(numero))
    throw new Error(`${nombre} debe ser un número válido`);
  if (numero < 0) throw new Error(`${nombre} no puede ser negativo`);
  return numero;
}

function validarTexto(valor, nombre = "Valor") { //validarTexto → asegura que el texto no esté vacío.
  const texto = String(valor).trim();
  if (texto.length === 0) throw new Error(`${nombre} no puede estar vacío`);
  return texto;
}

// Formato moneda COP
function formatearCOP(valor) { //formatearCOP → convierte un número a formato de moneda colombiana.
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(valor);
}

// Normalización de cada gasto
function crearGasto(raw) { //crearGasto → limpia y valida un gasto antes de usarlo.
  return {
    id: validarTexto(raw.id, "ID"),
    fecha: validarTexto(raw.fecha, "Fecha"),
    categoria: validarTexto(raw.categoria, "Categoría"),
    descripcion: validarTexto(raw.descripcion, "Descripción"),
    monto: validarNumero(raw.monto, "Monto"),
  };
}

//  Datos de ejemplo (puedes cambiarlos)
const gastos = [ //gastos → lista de gastos ya validados y listos para procesar.
  crearGasto({
    id: "1",
    fecha: "2024-01-15",
    categoria: "Alimentación",
    descripcion: "Supermercado",
    monto: 8500000,
  }),
  crearGasto({
    id: "2",
    fecha: "2024-01-20",
    categoria: "Transporte",
    descripcion: "Bus",
    monto: 150000,
  }),
  crearGasto({
    id: "3",
    fecha: "2024-01-25",
    categoria: "Entretenimiento",
    descripcion: "Cine",
    monto: 500000,
  }),
  crearGasto({
    id: "4",
    fecha: "2024-01-30",
    categoria: "Salud",
    descripcion: "Consulta médica",
    monto: 2000000,
  }),
  crearGasto({
    id: "5",
    fecha: "2024-02-05",
    categoria: "Educación",
    descripcion: "Curso online",
    monto: 1200000,
  }),
  crearGasto({
    id: "6",
    fecha: "2024-02-05",
    categoria: "Educación",
    descripcion: "Alimentación",
    monto: 1200000,
  }),
  crearGasto({
    id: "7",
    fecha: "2024-02-05",
    categoria: "Salud",
    descripcion: "Medicamentos",
    monto: 1200000,
  }),
  crearGasto({
    id: "8",
    fecha: "2024-02-05",
    categoria: "Entretenimiento",
    descripcion: "Parque",
    monto: 1200000,
  }),
];

//  Estadísticas generales
function calcularEstadisticas(listaGastos) { //calcularEstadisticas=calcula total, promedio, mínimo y máximo de los gastos.
  if (listaGastos.length === 0)
    return { total: 0, promedio: 0, maximo: 0, minimo: 0 };

  const montos = listaGastos.map((g) => g.monto);
  const total = montos.reduce((acc, n) => acc + n, 0);
  const maximo = Math.max(...montos);
  const minimo = Math.min(...montos);
  const promedio = total / listaGastos.length;

  return { total, promedio, maximo, minimo };
}

//  Totales por categoría
function totalesPorCategoria(listaGastos) { //totalesPorCategoria=suma los gastos por categoría y los ordena de mayor a menor.
  const acumulado = {};
  listaGastos.forEach((g) => {
    acumulado[g.categoria] = (acumulado[g.categoria] || 0) + g.monto;
  });
  // Convertir a array ordenado de mayor a menor
  return Object.entries(acumulado)
    .map(([categoria, total]) => ({ categoria, total }))
    .sort((a, b) => b.total - a.total);
}

//  Gasto más alto
function gastoMasAlto(listaGastos) { //gastoMasAlto → encuentra el gasto con el mayor monto.
  if (listaGastos.length === 0) return null;
  return listaGastos.reduce(
    (max, g) => (g.monto > max.monto ? g : max),
    listaGastos[0],
  );
}

//  Últimos gastos (por fecha descendente)
function ultimosGastos(listaGastos, cantidad = 3) { //ultimosGastos= toma los últimos 3 gastos por fecha (más recientes).
  return listaGastos
    .slice()
    .sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
    .slice(0, cantidad);
}

//  Función para mostrar todo el reporte
function mostrarReporte(listaGastos) { //mostrarReporte= imprime todo: estadísticas, totales por categoría, gasto más alto y últimos gastos, en consola de forma ordenada.
  const stats = calcularEstadisticas(listaGastos);
  const porCategoria = totalesPorCategoria(listaGastos);
  const max = gastoMasAlto(listaGastos);
  const ultimos = ultimosGastos(listaGastos);

  console.group(" REPORTE DE GASTOS");

  console.log(" Estadísticas generales:");
  console.table([
    {
      Total: formatearCOP(stats.total),
      Promedio: formatearCOP(stats.promedio),
      Mínimo: formatearCOP(stats.minimo),
      Máximo: formatearCOP(stats.maximo),
      Registros: listaGastos.length,
    },
  ]);

  console.log(" Totales por Categoría (mayor a menor):");
  porCategoria.forEach((c) =>
    console.log(`${c.categoria}: ${formatearCOP(c.total)}`),
  );

  console.log(" Gasto más alto:");
  if (max)
    console.table([
      {
        Fecha: max.fecha,
        Categoría: max.categoria,
        Descripción: max.descripcion,
        Monto: formatearCOP(max.monto),
      },
    ]);

  console.log(" Últimos 3 gastos:");
  ultimos.forEach((g) =>
    console.log(
      `${g.fecha} | ${g.categoria} | ${g.descripcion} | ${formatearCOP(g.monto)}`,
    ),
  );

  console.groupEnd();
}

//  Ejecutar reporte
mostrarReporte(gastos); //mostrarReporte(gastos) → ejecuta el reporte y lo muestra.
