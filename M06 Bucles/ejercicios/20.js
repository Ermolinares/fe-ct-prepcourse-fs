function sumarHastaNConBreak(n) {
  // La función recibe un numero n por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Si la suma supera a 100, detén el bucle usando break.
  // Tu código:

  // Verifica que n sea un número entero positivo
  if (!Number.isInteger(n) || n <= 0) {
    return "Error: Ingresa un número entero positivo";
  }

  // Inicializa la variable para almacenar la suma
  let suma = 0;

  // Suma todos los números desde 1 hasta n
  for (let i = 1; i <= n; i++) {
    suma += i;

    // Si la suma supera a 100, detén el bucle
    if (suma > 100) {
      break;
    }
  }

  return suma;
}

module.exports = sumarHastaNConBreak;

// Ejemplos de uso:
console.log(sumarHastaNConBreak(5));   // 1 + 2 + 3 + 4 + 5 = 15 (no supera 100)
console.log(sumarHastaNConBreak(10));  // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55 (no supera 100)
console.log(sumarHastaNConBreak(15));  // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 + 14 + 15 = 120 (supera 100)
console.log(sumarHastaNConBreak(-2));  // "Error: Ingresa un número entero positivo"
console.log(sumarHastaNConBreak(0));   // "Error: Ingresa un número entero positivo"