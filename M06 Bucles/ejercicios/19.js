function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
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
    }
  
    return suma;
  }

module.exports = sumarHastaN;

// Ejemplos de uso:
console.log(sumarHastaN(5));   // 1 + 2 + 3 + 4 + 5 = 15
console.log(sumarHastaN(3));   // 1 + 2 + 3 = 6
console.log(sumarHastaN(-2));  // "Error: Ingresa un número entero positivo"
console.log(sumarHastaN(0));   // "Error: Ingresa un número entero positivo"
