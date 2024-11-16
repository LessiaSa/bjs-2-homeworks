"use strict"
//ax2+bx+c = 0;
function solveEquation(a, b, c) {
  let arr = [];
  //(a * (Math.pow(x, 2)) + b * x + c) = 0;
  let d = (Math.pow(b, 2) - 4 * a * c);
  if (d > 0) {
     let x1 = Math.trunc((-b + Math.sqrt(d))/(2 * a));
     let x2 = Math.trunc((-b - Math.sqrt(d))/(2 * a));
     arr.push(x1, x2);
  } else if (d === 0) {
     x = Math.trunc(-b/(2 * a));
     arr.push(x);
  } else {
     arr = []; 
  }
  return arr;
}
console.log(solveEquation(1, 5, 4));
console.log(solveEquation(1, 2, 0));
console.log(solveEquation(2, 7, 10));
 
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentMonth = percent/100/12;
  let bodyLoan = amount - contribution;
  let s = bodyLoan;
  let p = percentMonth;
  let n = countMonths;
  if (isNaN(percentMonth) || percentMonth < 0) {
    return false;
  } else if (isNaN(bodyLoan) || bodyLoan < 0) {
    return false;
  } else if (isNaN(countMonths) || countMonths < 0) {
    return false;
  } else {
    let paymentMonth = s * (p + (p / (((1 + p)**n) - 1)));
    let totalAmount = Number((paymentMonth * countMonths).toFixed(2));
    return totalAmount;
  }
}
console.log(calculateTotalMortgage(10, 0, 50000, 12));
console.log(calculateTotalMortgage(10, 1000, 50000, 12));
console.log(calculateTotalMortgage(10, 0, 20000, 24));
console.log(calculateTotalMortgage(10, 1000, 20000,24));
console.log(calculateTotalMortgage(10, 20000,20000, 24));
console.log(calculateTotalMortgage(10, 0, 10000, 36));
console.log(calculateTotalMortgage(15, 0, 10000, 36));