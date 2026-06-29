// day03/multiplication-table.ts

function printMultiplicationTable(n: number, size: number = 10): void {
  console.log(`\nMultiplication table for ${n}:`);
  console.log('─'.repeat(25));

  for (let i = 1; i <= size; i++) {
    const product: number = n * i;
    // Pad numbers for alignment — useful string formatting technique
    console.log(`${String(n).padStart(2)} × ${String(i).padStart(2)} = ${String(product).padStart(4)}`);
  }
}

// Nested loop — print a full grid (shows you understand nesting)
function printFullGrid(size: number = 5): void {
  console.log('\nMultiplication grid:');
  for (let row = 1; row <= size; row++) {
    let line: string = '';
    for (let col = 1; col <= size; col++) {
      line += String(row * col).padStart(4);
    }
    console.log(line);
  }
}

printMultiplicationTable(7);
printMultiplicationTable(12, 5);
printFullGrid(5);