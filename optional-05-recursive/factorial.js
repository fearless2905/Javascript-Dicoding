function factorial(n) {
  if (n <= 1) return 1; // Basis: jika n <= 1, kembalikan 1
  return n * factorial(n - 1); // Rekursi
}

// Jangan hapus kode di bawah ini!
export default factorial;
