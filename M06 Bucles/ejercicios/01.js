function esIgualYNegativo(a, b) {
  // La función recibe dos argumentos "a" y "b" que son números.
  // Determina si son iguales y son ambos negativos.
  // De ser así, retorna true, de lo contrario, retorna false.
  // Tu código:

  return a === b && a < 0

}

module.exports = esIgualYNegativo;

// Ejemplos de uso:
console.log(esIgualYNegativo(-3, -3)); // true
console.log(esIgualYNegativo(-5, -3)); // false
console.log(esIgualYNegativo(0, 0));   // false
