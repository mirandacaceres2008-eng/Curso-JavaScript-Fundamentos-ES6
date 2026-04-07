const palabras = ["hola", "mundo", "js"]; 
const totalLetras = palabras.reduce((acumulador,palabra) => {return acumulador + palabra.length;
}, 0);
console.log(totalLetras);