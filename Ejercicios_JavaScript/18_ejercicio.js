let numero = 1;
let suma = 0;
let contador = 0;

while (suma < 100) {
    console.log("Sumando:", numero);
    suma += numero;
    contador++;
    numero++;
}
console.log("Suma final:", suma);
console.log("Números necesarios:", contador);