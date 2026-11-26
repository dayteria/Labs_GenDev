'use strict';

function unique(array) {   // Оголошення функції unique, яка приймає масив array
  const result = [];   // Створюємо порожній масив result для унікальних елементів
  
  for (const item of array) {   // Перебираємо кожен елемент масиву array
    if (!result.includes(item)) {   // Якщо елемента item ще немає в result
      result.push(item);   // Додаємо item у кінець result
    }
  }
  return result;
};

const numbers = [1, 2, 2, 3, 7, 7, 9];
console.dir(unique(numbers));   // Виводить: [1, 2, 3, 7, 9]

const characters = ['Eren', 'Phainon', 'Eren', 'Blade'];
console.dir(unique(characters));   // Виводить: ['Eren', 'Phainon', 'Blade']