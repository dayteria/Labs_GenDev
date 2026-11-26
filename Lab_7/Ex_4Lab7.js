'use strict';

function difference(array1, array2) {   // Оголошення функції unique, яка приймає 2 масиви: array1 та array2
  const result = [];   // Створюємо порожній масив result для елементів, яких немає в array2, але є в array1
  
  for (const item of array1) {   // Перебираємо кожен елемент масиву array1
    if (!array2.includes(item)) {   // Якщо елемента item немає в array2
      result.push(item);   // Додаємо item у кінець result
    }
  }
  
  return result;
};

const numbers1 = [7, -2, 10, 5, 0];
const numbers2 = [0, 10];
const resultNumbers = difference(numbers1, numbers2);
console.log(resultNumbers);   // Виводить: [7, -2, 5]

const characters1 = ['Eren', 'Phainon', 'Blade', 'Elysia'];
const characters2 = ['Blade', 'Cartethyia', 'Hsin'];
const resultNames = difference(characters1, characters2);
console.log(resultNames);   // Виводить: ['Eren', 'Phainon', 'Elysia'] 