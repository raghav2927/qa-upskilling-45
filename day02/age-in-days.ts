// day02/age-in-days.ts

function ageInDays(birthDateStr: string): string {
  const birthDate = new Date(birthDateStr);
  const today = new Date();

  if (isNaN(birthDate.getTime())) {
    return 'Invalid date format. Use YYYY-MM-DD';
  }

  const diffMs: number = today.getTime() - birthDate.getTime();
  const days: number = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const years: number = Math.floor(days / 365);

  return `You are ${days.toLocaleString()} days old (approx. ${years} years)`;
}

console.log(ageInDays('1995-06-15'));
console.log(ageInDays('2000-01-01'));
console.log(ageInDays('invalid-date'));   // error case