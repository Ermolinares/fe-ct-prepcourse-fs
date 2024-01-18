function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  // Utiliza un bucle do-while para aumentar el valor de num en 5 hasta un límite de 8 veces
  let contador = 0;

  // Utiliza un bucle do-while para aumentar el valor de num en 5 hasta un límite de 8 veces
  do {
    num += 5;
    contador++;
  } while (contador < 8);

  return num;
}

module.exports = doWhile;

// Ejemplo de uso:
console.log(doWhile(3));   // Aumenta 8 veces en 5: 3 + 5*8 = 43