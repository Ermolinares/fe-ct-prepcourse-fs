function saludo(idioma) {
  // Retornar un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!".
  // Si "idioma" es "mandarin", devuelve "Ni Hao!".
  // Si "idioma" es "ingles", devuelve "Hello!".
  // Si "idioma" no es ninguno de los anteriores o es `undefined`, devuelve "Hola!".
  // Tu código:
  switch (idioma) {
    case "aleman":
      return "Guten Tag!";
    case "mandarin":
      return "Ni Hao!";
    case "ingles":
      return "Hello!";
    default:
      return "Hola!";
  }
}

module.exports = saludo;

// Ejemplos de uso:
console.log(saludo("aleman"));    // "Guten Tag!"
console.log(saludo("mandarin"));  // "Ni Hao!"
console.log(saludo("ingles"));    // "Hello!"
console.log(saludo("frances"));   // "Hola!"
console.log(saludo());             // "Hola!" (cuando el idioma es `undefined`)
