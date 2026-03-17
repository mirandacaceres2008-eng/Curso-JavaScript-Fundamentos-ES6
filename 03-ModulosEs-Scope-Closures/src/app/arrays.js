//funcion sumArray, funcion que permite sumar todos los elementos de un array
//funcion averageArray, funcion que permite calcular el promedio de todos los elementos de un array
// funcion groupArrayBy, funcion que permite agrupar los elementos de un array
// por una propiedad

// Función para sumar todos los elementos de un array
function sumArray(arr) { //arr → representa el arreglo de números que quieres sumar
  return arr.reduce((acc, current) => acc + current, 0);// suma todos los valores desde 0
}
//acc → lleva la suma acumulada
//current → es el número que estamos sumando en este momento.

// Función para calcular el promedio de un array
function averageArray(arr) { // recibe un array
  if (arr.length === 0) return 0; // si está vacío devuelve 0
  return sumArray(arr) / arr.length; // divide la suma entre la cantidad
}


// Función para agrupar elementos por una propiedad
function groupArrayBy(arr, property) { // recibe array y propiedad
  return arr.reduce((acc, item) => { // recorre acumulando en un objeto
    const key = item[property]; // obtiene el valor de la propiedad


    if (!acc[key]) { // si no existe ese grupo
      acc[key] = []; // crea un array para ese grupo
    }

    acc[key].push(item); // agrega el elemento al grupo
    return acc; // retorna el acumulador actualizado
  }, {}); // inicia con objeto vacío
}


//EJEMPLO DE USO
// sumArray
console.log(sumArray([1, 2, 3, 4])); // 10

// averageArray
console.log(averageArray([1, 2, 3, 4])); // 2.5

// groupArrayBy
const people = [
  { name: "Juan", age: 20 },
  { name: "Ana", age: 20 },
  { name: "Luis", age: 25 }
];

console.log(groupArrayBy(people, "age"));
/*
{
  20: [
    { name: "Juan", age: 20 },
    { name: "Ana", age: 20 }
  ],
  25: [
    { name: "Luis", age: 25 }
  ]
}
*/