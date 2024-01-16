function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:

  // Verificamos si la entrada es un string de un solo caracter.
  if (typeof letra === 'string' && letra.length === 1) {
    // Convertimos la letra a minúscula para asegurarnos de manejar tanto mayúsculas como minúsculas.
    const letraMinuscula = letra.toLowerCase();
    
    // Verificamos si la letra es una vocal.
    if (letraMinuscula === 'a' || letraMinuscula === 'e' || letraMinuscula === 'i' || letraMinuscula === 'o' || letraMinuscula === 'u') {
      return "Es vocal";
    } else {
      return "Dato incorrecto";
    }
  } else {
    return "Dato incorrecto";
  }

}

module.exports = esVocal;
