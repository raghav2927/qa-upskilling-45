// day03/factorial.ts

// Iterative approach — preferred in interviews (no stack overflow risk)
function factorialIterative(n: number): number {
  if (n < 0) throw new Error('Factorial undefined for negative numbers');
  if (n === 0 || n === 1) return 1;

  let result: number = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Recursive approach — elegant but risky for large n
function factorialRecursive(n: number): number {
  if (n < 0) throw new Error('Factorial undefined for negative numbers');
  if (n === 0 || n === 1) return 1;
  return n * factorialRecursive(n - 1);
}

console.log(factorialIterative(5));   // 120
console.log(factorialIterative(10));  // 3628800
console.log(factorialRecursive(6));   // 720

// QA mindset — always test edge cases
console.log(factorialIterative(0));   // 1
console.log(factorialIterative(1));   // 1
try {
  factorialIterative(-1);
} catch (e) {
  console.log((e as Error).message);  // Factorial undefined for negative numbers
}