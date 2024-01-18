function esParYDivisiblePorTres(a) {
  // La función recibe un número "a" por argumento.
  // Retorna true si este es par y divisible por tres a la vez.
  // Retorna false si no lo es.
  // Tu código:
  return a % 2 === 0 && a % 3 === 0
}

module.exports = esParYDivisiblePorTres;

// Ejemplos de uso:
console.log(esParYDivisiblePorTres(6));    // true (es par y divisible por 3)
console.log(esParYDivisiblePorTres(9));    // false (es impar aunque divisible por 3)
console.log(esParYDivisiblePorTres(12));   // true (es par y divisible por 3)
console.log(esParYDivisiblePorTres(7));    // false (es impar)