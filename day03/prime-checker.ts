// day03/prime-checker.ts
function isPrime(n: number): boolean {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  // Only check up to square root — a key optimisation interviewers look for
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

// Find all primes up to 50
const primesUpTo50: number[] = [];
for (let i = 2; i <= 50; i++) {
  if (isPrime(i)) primesUpTo50.push(i);
}

console.log(`Primes up to 50: ${primesUpTo50.join(', ')}`);
console.log(`Is 97 prime? ${isPrime(97)}`);    // true
console.log(`Is 100 prime? ${isPrime(100)}`);  // false