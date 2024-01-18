function estaEnRango(num) {
  // Retorna true si "num" es menor que 50 y mayor que 20.
  // De lo contrario, retornar false.
  // Tu código:
  return num > 20 && num < 50;
}

module.exports = estaEnRango;

// Ejemplos de uso:
console.log(estaEnRango(30));   // true
console.log(estaEnRango(15));   // false
console.log(estaEnRango(45));   // true
console.log(estaEnRango(55));   // false
