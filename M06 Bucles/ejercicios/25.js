function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:

  // Verifica que el argumento sea un string
  if (typeof string !== 'string') {
    return "Error: Ingresa un string";
  }

  // Elimina los espacios en blanco y convierte todo a minúsculas para hacer la comparación sin considerar mayúsculas ni espacios
  const textoSinEspacios = string.toLowerCase().replace(/\s/g, '');

  // Invierte el string
  const textoInvertido = textoSinEspacios.split('').reverse().join('');

  // Compara el string original con su versión invertida
  return textoSinEspacios === textoInvertido;
}

module.exports = esPalindromo;

// Ejemplos de uso:
console.log(esPalindromo("Anita lava la tina"));    // true
console.log(esPalindromo("Hola mundo"));            // false
console.log(esPalindromo(123));                      // "Error: Ingresa un string"
console.log(esPalindromo("A man a plan a canal Panama")); // true
