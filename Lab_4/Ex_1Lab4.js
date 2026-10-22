// Цикл for

'use strict';

function sum(...args) {     // Створення функції sum; ...args — це rest-параметр, який збирає всі передані sum аргументи в масив args
  let result = 0;
  for (let i = 0; i < args.length; i++) {
    result += args[i];     // Додаємо поточний елемент args[i] до result (скорочений запис result = result + args[i])
  }
  return result;
};

console.log(sum());     // При виклику console.log(sum()): args = [], args.length = 0
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));