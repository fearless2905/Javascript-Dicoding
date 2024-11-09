function fibonacci(n) {
  if (n <= 1) return n; // Basis: jika n <= 1, kembalikan n
  return fibonacci(n - 1) + fibonacci(n - 2); // Rekursi
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
