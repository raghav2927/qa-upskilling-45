// day02/temperature-converter.ts

function celsiusToFahrenheit(c: number): number {
  return Math.round((c * 9/5 + 32) * 10) / 10;
}

function fahrenheitToCelsius(f: number): number {
  return Math.round(((f - 32) * 5/9) * 10) / 10;
}

// test boundaries and edge cases
console.log(`0°C = ${celsiusToFahrenheit(0)}°F`);      // 32
console.log(`100°C = ${celsiusToFahrenheit(100)}°F`);  // 212
console.log(`-40°C = ${celsiusToFahrenheit(-40)}°F`);  // -40 (same in both!)
console.log(`98.6°F = ${fahrenheitToCelsius(98.6)}°C`);// 37