import { test } from "node:test";
import assert from "node:assert";
import { sum } from "./index.js"; // Pastikan untuk mengimpor fungsi sum dari index.js

// Pengujian untuk menambahkan dua angka positif
test("sum function - adding two positive numbers", () => {
  assert.strictEqual(sum(2, 3), 5); // Menguji 2 + 3
});

// Pengujian untuk menambahkan dua angka negatif
test("sum function - adding two negative numbers", () => {
  assert.strictEqual(sum(-2, -3), -5); // Menguji -2 + -3
});

// Pengujian untuk menambahkan angka positif dan negatif
test("sum function - adding positive and negative numbers", () => {
  assert.strictEqual(sum(2, -3), -1); // Menguji 2 + -3
});

// Pengujian untuk menambahkan angka nol
test("sum function - adding zero", () => {
  assert.strictEqual(sum(0, 0), 0); // Menguji 0 + 0
  assert.strictEqual(sum(0, 5), 5); // Menguji 0 + 5
});

// Pengujian untuk menambahkan angka desimal
test("sum function - adding two decimal numbers", () => {
  assert.strictEqual(sum(1.5, 2.5), 4); // Menguji 1.5 + 2.5
});
