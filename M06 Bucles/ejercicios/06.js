function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  return String(num).length === 3;
}

module.exports = tieneTresDigitos;

// Ejemplos de uso:
console.log(tieneTresDigitos(123));    // true
console.log(tieneTresDigitos(9876));   // false
console.log(tieneTresDigitos(42));     // false
