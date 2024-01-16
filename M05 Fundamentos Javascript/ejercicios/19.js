function esPositivo(num) {
  // La función recibe un entero. Devuelve como resultado un string que indica si el número
  // es positivo o negativo.
  // Si el número es positivo ---> "Es positivo".
  // Si el número es negativo ---> "Es negativo".
  // Si el número es 0, devuelve false.
  // Tu código:

    // Verificamos si el número es positivo.
    if (num > 0) {
      return "Es positivo";
    } else if (num < 0) {
      // Si no es positivo, verificamos si es negativo.
      return "Es negativo";
    } else {
      // Si el número es 0, devolvemos false.
      return false;
    }
  }


module.exports = esPositivo;