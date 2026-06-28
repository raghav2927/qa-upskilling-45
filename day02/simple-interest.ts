// day02/simple-interest.ts

interface LoanDetails {
  principal: number;
  ratePercent: number;
  years: number;
}

function calculateSimpleInterest(loan: LoanDetails): string {
  const { principal, ratePercent, years } = loan;   // destructuring
  const interest: number = (principal * ratePercent * years) / 100;
  const total: number = principal + interest;

  return `
    Principal : ₹${principal.toLocaleString('en-IN')}
    Interest  : ₹${interest.toLocaleString('en-IN')}
    Total     : ₹${total.toLocaleString('en-IN')}
  `;
}

console.log(calculateSimpleInterest({ principal: 10000, ratePercent: 8, years: 3 }));