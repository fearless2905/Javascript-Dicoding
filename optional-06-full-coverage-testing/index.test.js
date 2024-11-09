import test from "node:test";
import assert from "node:assert";
import sum from "./index.js"; // Pastikan path ini sesuai dengan lokasi file index.js

test("Uji fungsi sum", async (t) => {
  // Uji penjumlahan dua angka positif
  assert.strictEqual(sum(2, 3), 5, "2 + 3 harus sama dengan 5");

  // Uji penjumlahan dengan salah satu argumen negatif
  assert.strictEqual(
    sum(-1, 5),
    0,
    "Harus mengembalikan 0 jika ada argumen negatif"
  );
  assert.strictEqual(
    sum(3, -2),
    0,
    "Harus mengembalikan 0 jika ada argumen negatif"
  );

  // Uji penjumlahan dengan kedua argumen negatif
  assert.strictEqual(
    sum(-1, -1),
    0,
    "Harus mengembalikan 0 jika kedua argumen negatif"
  );

  // Uji penjumlahan dengan salah satu argumen bukan angka
  assert.strictEqual(
    sum("a", 5),
    0,
    "Harus mengembalikan 0 jika argumen bukan angka"
  );
  assert.strictEqual(
    sum(5, "b"),
    0,
    "Harus mengembalikan 0 jika argumen bukan angka"
  );

  // Uji penjumlahan dengan kedua argumen bukan angka
  assert.strictEqual(
    sum("a", "b"),
    0,
    "Harus mengembalikan 0 jika kedua argumen bukan angka"
  );

  // Uji penjumlahan dengan argumen 0
  assert.strictEqual(sum(0, 0), 0, "0 + 0 harus sama dengan 0");
  assert.strictEqual(sum(0, 5), 5, "0 + 5 harus sama dengan 5");
  assert.strictEqual(sum(5, 0), 5, "5 + 0 harus sama dengan 5");
});
