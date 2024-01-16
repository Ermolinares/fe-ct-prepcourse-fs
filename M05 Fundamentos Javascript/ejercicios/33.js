function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:

  if (numero <= 1) {
    return false;
  }

  // Iteramos desde 2 hasta la raíz cuadrada del número para comprobar si es divisible.
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    
    // Si el número es divisible por algún valor entre 2 y su raíz cuadrada, no es primo.
    if (numero % i === 0) {
      return false;
    }
  }

  // Si no se encontraron divisores, el número es primo.
  return true;

}

module.exports = esNumeroPrimo;
