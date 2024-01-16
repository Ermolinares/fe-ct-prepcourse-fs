function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
  const date = fecha instanceof Date ? fecha : new Date(fecha);
  return !isNaN(date) &&
    date.getDate() === parseInt(fecha.split('-')[2], 10) &&
    date.getMonth() + 1 === parseInt(fecha.split('-')[1], 10) &&
    date.getFullYear() === parseInt(fecha.split('-')[0], 10);
}

module.exports = esFechaValida;