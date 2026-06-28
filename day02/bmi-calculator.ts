// day02/bmi-calculator.ts

function calculateBMI(weightKg: number, heightM: number):string {

    if (heightM <= 0 || weightKg <=0 ){

        return 'Invalid input: Weight and Must be positive values and non-zero';
    }

    const bmi:number = weightKg/(heightM*heightM);
    const rounded:number = Math.round(bmi*10)/10;

    let category:string;
    if (bmi < 18.5) category = 'Underweight';
    else if (bmi < 25) category = 'Normal weight';
    else if (bmi < 30) category = 'Over weight';
    else category = 'Obese';

    return `BMI: ${rounded} - ${category}`;

}

console.log(calculateBMI(76, 5.8));    // BMI: 22.9 — Normal weight
console.log(calculateBMI(90, 1.70));    // BMI: 31.1 — Obese
console.log(calculateBMI(-5, 1.70));    // Invalid input