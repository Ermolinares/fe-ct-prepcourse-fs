function fizzBuzz(num) {
  // Si "num" es divisible entre 3, retorna "fizz".
  // Si "num" es divisible entre 5, retorna "buzz".
  // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
  // De lo contrario, retorna false.
  // Tu código:
  if (num % 3 === 0 && num % 5 === 0) {
    return "fizzbuzz";
  } else if (num % 3 === 0) {
    return "fizz";
  } else if (num % 5 === 0) {
    return "buzz";
  } else {
    return false;
  }

}

module.exports = fizzBuzz;

// Ejemplos de uso:
console.log(fizzBuzz(9));   // "fizz" (divisible por 3)
console.log(fizzBuzz(10));  // "buzz" (divisible por 5)
console.log(fizzBuzz(15));  // "fizzbuzz" (divisible por ambos)
console.log(fizzBuzz(7));   // false (no es divisible ni por 3 ni por 5)
