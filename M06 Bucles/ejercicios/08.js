function esPositivoOInferiorA10(a) {
   // La función recibe un número "a" por parámetro.
   // Retorna true si es positivo y menor que 10.
   // Retorna false en caso contrario.
   // Tu código:
   return a > 0 && a < 10;
}

module.exports = esPositivoOInferiorA10;

// Ejemplos de uso:
console.log(esPositivoOInferiorA10(5));   // true (positivo y menor que 10)
console.log(esPositivoOInferiorA10(-3));  // false (negativo)
console.log(esPositivoOInferiorA10(12));  // false (mayor que 10)
console.log(esPositivoOInferiorA10(0));   // false (no es positivo)
