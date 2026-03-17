"use strict"; //Esto hace que el código sea más seguro y evita errores  (por ejemplo, usar variables sin declararlas).

export function clamp(value, min, max) { //Define y exporta una función llamada clamp.Sirve para limitar un valor dentro de un rango (min a max).
  if (
    !Number.isFinite(value) ||
    !Number.isFinite(min) ||
    !Number.isFinite(max)
  ) { //Verifica que todos los argumentos sean números válidos (no NaN, Infinity, etc.).
    throw new TypeError("Todos los argumentos deben ser números finitos."); //Si alguno no es válido, lanza un error.
  }

  if (min > max) { //Si el mínimo es mayor que el máximo (error lógico):
    return Math.min(Math.max(value, max), min); // retorna
    // el valor minimo si el valor es menor al minimo
    // o el valor maximo si el valor es mayor al maximo
  }
}

// redondear  a digitos decimales

export function roundTo(value, decimals) { //Define una función para redondear a cierta cantidad de decimales.
    if (!Number.isFinite(value) || !Number.isFinite(decimals)) { //Verifica que ambos sean números.
        throw new TypeError("Todos los argumentos deben ser números finitos."); //Error si no lo son.
    }

    if (decimals < 0) { //No permite decimales negativos.
        throw new Error("Los decimales deben ser un número no negativo.");
    }

    return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals); //Multiplica el número por 10^decimals-
    // Lo redondea con Math.round-Lo divide otra vez para volver a su escala
}

// redondear a digitops decimales

export function roundTo(value, digits= 2){  //se declara otra funcion con el mismo nombre En JavaScript, la segunda sobrescribe la primera
    if (!Number.isFinite(value) || !Number.isFinite(digits)) {
        throw new TypeError("Todos los argumentos deben ser números finitos.");
    }

    if (digits < 0) {
        throw new Error("Los decimales deben ser un número no negativo.");
    }

    return Math.round(value * Math.pow(10, digits)) / Math.pow(10, digits); // retorna
    // el valor redondeado a la cantidad de decimales especificada

}

// funcion que retorna un numero aleatorio entre min y max

export function random(min, max) {
    if (!Number.isFinite(min) || !Number.isFinite(max)) {
        throw new TypeError("Todos los argumentos deben ser números finitos.");
    }

    if (min > max) { //Evita rangos inválidos.
        throw new Error("El mínimo debe ser menor o igual al máximo.");
    }

    return Math.random() * (max - min) + min; // retorna
    // un número aleatorio entre min y max
} //Math.random() → número entre 0 y 1(max - min) → tamaño del rango+ min → desplaza al rango correcto