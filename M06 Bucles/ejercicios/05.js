function esVerdadero(valor) {
  // Si "valor" es verdadero, retorna "Soy verdadero".
  // Caso contrario, retorna "Soy falso".
  // Tu código:
  if (valor === true) {
    return "Soy verdadero";
  } else {
    return "Soy falso";
  }
}

module.exports = esVerdadero;

// Ejemplos de uso:
console.log(esVerdadero(true));    // "Soy verdadero"
console.log(esVerdadero(false));   // "Soy falso"
console.log(esVerdadero(5 > 2));   // "Soy verdadero" (ya que la expresión es true)