"use strict";

function solveEquation(a, b, c) {
  let arr;
  let discr = b ** 2 - 4 * a * c;
  if (discr < 0) {
    arr = [];
  } else if (discr === 0) {
    let x = -b / (2 * a);
    arr = [x];
  } else {
    let x1 = (-b + Math.sqrt(discr) ) / (2 * a);
    let x2 = (-b - Math.sqrt(discr) ) / (2 * a);
    arr = [x1, x2]
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let creditPriod;
  let credit;
  let monthlyCharge
  let err;

  if (isNaN(Number(percent))) {
    err = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
    return err;
  }
  
  if (isNaN(Number(contribution))) {
    err = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
    return err;
  }

  if (isNaN(Number(amount))) {
    err = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
    return err;
  }

  credit = amount - contribution;

  let now = new Date();

  if (date.getFullYear() === now.getFullYear()) {
    creditPriod = date.getMonth() - now.getMonth()
  }

  if (date.getFullYear() > now.getFullYear()) {
    creditPriod = (date.getFullYear() - now.getFullYear()) * 12;
  }

  if (date.getFullYear() < now.getFullYear()) {
    calert(`Введен некорректный срок кредитования`)
  }

  let P = percent / 12 / 100;
  monthlyCharge = credit * (P + P / (((1 + P) ** creditPriod) - 1)) ;
  totalAmount = monthlyCharge * creditPriod;
  return +totalAmount.toFixed(2);
}
