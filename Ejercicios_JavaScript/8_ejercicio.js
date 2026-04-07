const numeros = [2, 3, 4]; 
const numerosMultiplicados = numeros.reduce((acumulador, valorActual) => acumulador * valorActual, 1);
console.log(numerosMultiplicados);