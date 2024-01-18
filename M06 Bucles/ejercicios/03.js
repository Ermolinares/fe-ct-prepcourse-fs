function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

module.exports = obtenerMayor;

// Ejemplos de uso:
console.log(obtenerMayor(5, 10));   // 10
console.log(obtenerMayor(-2, 0));   // 0
console.log(obtenerMayor(7, 7));    // 7 (son iguales)
