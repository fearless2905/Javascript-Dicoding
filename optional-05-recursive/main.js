import factorial from "./factorial.js";
import fibonacci from "./fibonacci.js";

const numberForFactorial = 5;
console.log(
  `Faktorial dari ${numberForFactorial} adalah ${factorial(numberForFactorial)}`
);
/**
 * Output yang diharapkan:
 * Faktorial dari 5 adalah 120
 */

const numberForFibonacci = 10;
console.log(`Deret Fibonacci hingga elemen ${numberForFibonacci} adalah:`);

// Array untuk menyimpan nilai Fibonacci
let fibonacciSeries = [];

// Loop untuk menghitung deret Fibonacci dan menyimpan hasilnya
for (let i = 0; i <= numberForFibonacci; i++) {
  fibonacciSeries.push(fibonacci(i)); // Menambahkan setiap elemen Fibonacci ke array
  console.log(fibonacciSeries); // Mencetak array Fibonacci saat ini
}

/**
 * Output yang diharapkan:
 * Deret Fibonacci hingga elemen  10 adalah:
 * [ 0 ]
 * [ 0, 1 ]
 * [ 0, 1, 1 ]
 * [ 0, 1, 1, 2 ]
 * [ 0, 1, 1, 2, 3 ]
 * [ 0, 1, 1, 2, 3, 5 ]
 * [ 0, 1, 1, 2, 3, 5, 8 ]
 * [ 0, 1, 1, 2, 3, 5, 8, 13 ]
 * [ 0, 1, 1, 2, 3, 5, 8, 13, 21 ]
 * [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]
 * [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]
 */