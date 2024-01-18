function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  
  if (!Number.isInteger(a) || !Number.isInteger(b) || b < a) {
    return "Error: Ingresa números enteros y asegúrate de que b sea mayor o igual a a";
  }

  // Inicializa la variable para almacenar el producto
  let producto = 1;

  // Calcula el producto de los números entre a y b
  for (let i = a; i <= b; i++) {
    producto *= i;
  }

  return producto;
}

module.exports = productoEntreNúmeros;

// Ejemplos de uso:
console.log(productoEntreNúmeros(2, 5));    // 2 * 3 * 4 * 5 = 120
console.log(productoEntreNúmeros(1, 3));    // 1 * 2 * 3 = 6
console.log(productoEntreNúmeros(5, 2));    // "Error: Ingresa números enteros y asegúrate de que b sea mayor o igual a a"
console.log(productoEntreNúmeros(3.5, 7));  // "Error: Ingresa números enteros y asegúrate de que b sea mayor o igual a a"