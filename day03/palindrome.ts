// day03/palindrome.ts

function isPalindrome(input: string): boolean {
  // Clean the string — remove spaces, punctuation, lowercase everything
  const cleaned: string = input.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversed: string = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}

// QA mindset — test positive, negative, and edge cases
const testCases: Array<{ input: string; expected: boolean }> = [
  { input: 'racecar',         expected: true  },
  { input: 'hello',           expected: false },
  { input: 'A man a plan a canal Panama', expected: true },
  { input: '12321',           expected: true  },
  { input: '',                expected: true  },   // edge case
  { input: 'a',               expected: true  },   // single char
];

for (const { input, expected } of testCases) {
  const result: boolean = isPalindrome(input);
  const status: string = result === expected ? '✓ PASS' : '✗ FAIL';
  console.log(`${status} | "${input}" → ${result}`);
}