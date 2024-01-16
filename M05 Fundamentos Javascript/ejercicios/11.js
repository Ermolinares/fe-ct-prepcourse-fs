function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:

  // Obtenemos la fecha actual.
  const fechaActual = new Date();

  // Creamos un objeto Date a partir de la fecha de nacimiento proporcionada.
  const fechaNac = new Date(fechaNacimiento);
 
  // Calculamos la edad restando el año actual menos el año de nacimiento.
  const edad = fechaActual.getFullYear() - fechaNac.getFullYear();
  
  // Comprobamos si la persona tiene 18 años o más.
  return edad >= 18;

}

module.exports = esMayorDeEdad;