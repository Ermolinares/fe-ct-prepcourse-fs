function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:

// Verifica que ambos argumentos sean strings
if (typeof str1 !== 'string' || typeof str2 !== 'string') {
  return "Error: Ingresa dos strings como argumentos";
}

// Elimina los espacios en blanco y convierte todo a minúsculas para hacer la comparación sin considerar mayúsculas ni espacios
const texto1 = str1.toLowerCase().replace(/\s/g, '');
const texto2 = str2.toLowerCase().replace(/\s/g, '');

// Verifica si ambos textos tienen la misma cantidad de cada letra
return ordenarString(texto1) === ordenarString(texto2);
}

// Función para ordenar los caracteres de un string
function ordenarString(texto) {
return texto.split('').sort().join('');
}

// Función para ordenar los caracteres de un string
function ordenarString(texto) {
  return texto.split('').sort().join('');
}

module.exports = esAnagrama;

// Ejemplos de uso:
console.log(esAnagrama("listen", "silent"));              // true
console.log(esAnagrama("hello", "world"));                // false
console.log(esAnagrama("Anagram", "Nag a ram"));          // true
console.log(esAnagrama("123", "321"));                    // true
console.log(esAnagrama("Anagram", "Not an anagram"));     // false
console.log(esAnagrama("Anagram", 123));                  // "Error: Ingresa dos strings como argumentos"
