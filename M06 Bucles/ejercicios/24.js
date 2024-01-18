function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:

// Verifica que el argumento sea un string
if (typeof texto !== 'string') {
  return "Error: Ingresa un string";
}

// Convierte el string en un array de caracteres, invierte el orden y luego une de nuevo en un string
return texto.split('').reverse().join('');
}

module.exports = invertirTexto;

// Ejemplos de uso:
console.log(invertirTexto("Hola"));        // "aloH"
console.log(invertirTexto("JavaScript"));   // "tpircSavaJ"
console.log(invertirTexto(123));            // "Error: Ingresa un string"
console.log(invertirTexto(""));             // ""