// funcion toNonEmptyString , funcion que permite validar si un string no esta vacio
// si esta vacio lanza un error

//funcion titleCase, funcion que permite convertir un string a titulo
//funcion slugify, funcion que permite convertir un string a slug ejemplo:
// "hola mundo" - "hola-mundo"

// Función que valida que un string no esté vacío
function toNonEmptyString(value, fieldName = "valor") { 
  if (typeof value !== "string" || value.trim() === "") { // Verifica si no es string o está vacío
    throw new Error(`El ${fieldName} no puede estar vacío`); // Lanza error si falla la validación
  }
  return value.trim(); // Devuelve el string sin espacios al inicio o final
}

// Función que convierte un string a Title Case
function titleCase(str) {
  toNonEmptyString(str, "texto"); // Valida que el string no esté vacío

  return str
    .toLowerCase() // Pasa todo a minúsculas
    .split(" ") // Separa por espacios en palabras
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitaliza la primera letra de cada palabra
    .join(" "); // Une las palabras de nuevo con espacios
}

// Función que convierte un string a slug
function slugify(str) {
  toNonEmptyString(str, "texto"); // Valida que el string no esté vacío

  return str
    .toLowerCase() // Pasa todo a minúsculas
    .trim() // Elimina espacios al inicio y final
    .normalize("NFD") // Normaliza el texto (separa acentos de letras)
    .replace(/[\u0300-\u036f]/g, "") // Elimina los acentos
    .replace(/[^a-z0-9\s-]/g, "") // Elimina caracteres especiales
    .replace(/\s+/g, "-") // Reemplaza espacios por guiones
    .replace(/-+/g, "-"); // Evita guiones consecutivos
}

// EJEMPLO//
const texto = "hola mundo";

// Usando titleCase
const titulo = titleCase(texto); 
console.log(titulo); // Salida: "Hola Mundo"

// Usando slugify
const slug = slugify(texto);
console.log(slug); // Salida: "hola-mundo"