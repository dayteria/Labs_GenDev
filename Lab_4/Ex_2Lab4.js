// Цикл for...of

'use strict';

function sum(...args) {     // Створення функції sum; ...args — це rest-параметр, який збирає всі передані sum аргументи в масив args
  let result  = 0;
  for (const arg of args) {     // Перебираємо масив args; arg по черзі дорівнює кожному елементу 
    result += arg;     // Додаємо поточний елемент arg до result (скорочений запис result = result + arg)
  }
  return result;
};

console.log(sum());
console.log(sum(1,2,3,4,5,6,7,8,9,10));