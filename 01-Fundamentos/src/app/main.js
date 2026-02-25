// ===============================
// CONVERSOR DE UNIDADES - Node.js
// ===============================

// Capturamos argumentos desde la consola
const args = process.argv.slice(2);

// Esperamos: node index.js 100 c f
// args[0] = valor
// args[1] = from
// args[2] = to

const value = Number(args[0]);
const from = args[1]?.toLowerCase();
const to = args[2]?.toLowerCase();

// ===============================
// VALIDACIONES
// ===============================

// 1. Validar que el valor sea número finito
if (!Number.isFinite(value)) {
    console.log("Error: El valor debe ser un número finito.");
    process.exit(1);
}

// 2. Definir unidades permitidas
const temperatureUnits = ["c", "f", "k"]; //convercion de temperatura
const lengthUnits = ["m", "km", "cm"]; //convercion de longitud

// 3. Validar que las unidades existan
if (!from || !to) {
    console.log("Error: Debes indicar unidad de origen y destino.");
    process.exit(1);
}

if (
    !temperatureUnits.includes(from) && 
    !lengthUnits.includes(from)
) {
    console.log("Error: Unidad de origen no soportada.");
    process.exit(1);
}

if (
    !temperatureUnits.includes(to) &&
    !lengthUnits.includes(to)
) {
    console.log("Error: Unidad de destino no soportada.");
    process.exit(1);
}

// 4. Validar que no mezcle categorías
const isTempConversion =
    temperatureUnits.includes(from) &&
    temperatureUnits.includes(to);

const isLengthConversion =
    lengthUnits.includes(from) &&
    lengthUnits.includes(to);

if (!isTempConversion && !isLengthConversion) {
    console.log("Error: No puedes convertir entre categorías distintas.");
    process.exit(1);
}

// ===============================
// FUNCIONES DE CONVERSIÓN
// ===============================

function convertTemperature(value, from, to) {
    if (from === to) return value;

    // Celsius a Fahrenheit
    if (from === "c" && to === "f") {
        return (value * 9 / 5) + 32;
    }

    // Fahrenheit a Celsius
    if (from === "f" && to === "c") {
        return (value - 32) * 5 / 9;
    }

    // Celsius a Kelvin
    if (from === "c" && to === "k") {
        return value + 273.15;
    }

    // Kelvin a Celsius
    if (from === "k" && to === "c") {
        return value - 273.15;
    }

    // Fahrenheit a Kelvin
    if (from === "f" && to === "k") {
        return (value - 32) * 5 / 9 + 273.15;
    }

    // Kelvin a Fahrenheit
    if (from === "k" && to === "f") {
        return (value - 273.15) * 9 / 5 + 32;
    }
}

function convertLength(value, from, to) {
    if (from === to) return value;

    // Metros a Kilómetros
    if (from === "m" && to === "km") {
        return value / 1000;
    }

    // Kilómetros a Metros
    if (from === "km" && to === "m") {
        return value * 1000;
    }

    // Centímetros a Metros
    if (from === "cm" && to === "m") {
        return value / 100;
    }

    // Metros a Centímetros
    if (from === "m" && to === "cm") {
        return value * 100;
    }

    // Kilómetros a Centímetros
    if (from === "km" && to === "cm") {
        return value * 100000;
    }

    // Centímetros a Kilómetros
    if (from === "cm" && to === "km") {
        return value / 100000;
    }
}

// ===============================
// EJECUCIÓN
// ===============================

let result;

if (isTempConversion) {
    result = convertTemperature(value, from, to);
}

if (isLengthConversion) {
    result = convertLength(value, from, to);
}

console.log(`${result.toFixed(2)} ${to.toUpperCase()}`);




// PARA PODER RESOLVERLO EN LA TERMINAL SE PONE ASI:

//PARA LA CONVERSIÓN:
// node main.js 100 c f

// DETECTA EL ERROR:
//node main.js hola c f

//EL PROGRAMA REVISA QUE PERTENEZCA A LA MISMA CATEGORIA SI SON DIFERENTES APARECE ERROR:
//node main.js 100 c km

// CONFIRMA QUE INFINITY NO ES FINITO:
// node main.js Infifinity c f
