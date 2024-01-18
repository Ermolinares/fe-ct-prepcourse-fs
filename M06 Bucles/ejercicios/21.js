function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:

  // Verifica que el número sea un entero positivo
  if (!Number.isInteger(numero) || numero <= 0) {
    return false;
  }

  // Mientras el número sea divisible por 2
  while (numero > 1 && numero % 2 === 0) {
    numero /= 2;
  }

  // Si al final el resultado es 1, es una potencia de 2
  return numero === 1;
}

module.exports = esPotenciaDeDos;

// Ejemplos de uso:
console.log(esPotenciaDeDos(8));    // true (2^3 = 8)
console.log(esPotenciaDeDos(16));   // true (2^4 = 16)
console.log(esPotenciaDeDos(5));    // false
console.log(esPotenciaDeDos(32));   // true (2^5 = 32)
console.log(esPotenciaDeDos(0.5));  // false
console.log(esPotenciaDeDos(-4));   // false
