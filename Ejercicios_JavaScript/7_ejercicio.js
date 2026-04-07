const numeros = [5, 10, 15, 20]; 
const numerosSumados = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log(numerosSumados);