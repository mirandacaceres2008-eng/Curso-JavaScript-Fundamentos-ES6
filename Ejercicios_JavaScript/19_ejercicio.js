const numeros = [3, 8, 15, 20, 7, 12, 1, 30];
const resultado = numeros
  .filter(num => num > 10)  //  mayores a 10
  .map(num => num * 2);     // multiplica cada número  por 2

console.log(resultado);
//  Números mayores que 10
// Multiplicarlos por 2 usando map
