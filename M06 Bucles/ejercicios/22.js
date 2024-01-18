function diasEnMes(mes) {
  // La función recibe un mes(número) por argumento.
  // Determine cúantos días tiene el mes correspondiente a ese número.
  // PISTA: Usa un bucle do-while para validar que el mes ingresado sea válido.
  // Tu código:

  // Validar que el mes sea un número entre 1 y 12
  if (!Number.isInteger(mes) || mes < 1 || mes > 12) {
    return "Error: Ingresa un número de mes válido (entre 1 y 12)";
  }

  let dias;

  // Determinar el número de días en el mes utilizando un bloque switch
  switch (mes) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
      dias = 31;
      break;
    case 4: case 6: case 9: case 11:
      dias = 30;
      break;
    case 2:
      // Verificar si el año es bisiesto para febrero
      dias = esBisiesto(new Date().getFullYear()) ? 29 : 28;
      break;
  }

  return dias;
}

// Función para determinar si un año es bisiesto
function esBisiesto(anio) {
  return (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
}

module.exports = diasEnMes;

// Ejemplos de uso:
console.log(diasEnMes(1));   // 31 (enero)
console.log(diasEnMes(4));   // 30 (abril)
console.log(diasEnMes(2));   // 28 o 29 (dependiendo de si es bisiesto)
console.log(diasEnMes(13));  // "Error: Ingresa un número de mes válido (entre 1 y 12)"
console.log(diasEnMes(-3));  // "Error: Ingresa un número de mes válido (entre 1 y 12)"
