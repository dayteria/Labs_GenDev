'use strict';

function removeElements(array, ...items) {   // Оголошення функції removeElements, яка приймає масив array і будь-яку кількість елементів items
  
  for (const item of items) {   // Перебираємо кожен переданий функції елемент
    const index = array.indexOf(item);   // Знаходимо індекс переданого елемента item у масиві array
    
    if (index !== -1) {   // Якщо індекс елемента масиву ≠ -1 (елемент існує)
      array.splice(index, 1);   // Видаляємо елемент з масиву за індексом index
    }
  }
};

const numbers = [1, 2, 3, 4, 5, 6, 7];
removeElements(numbers, 5, 1, 6);
console.log(numbers);   // Виводить: [2, 3, 4, 7]

const characters = ['Eren', 'Phainon', 'Blade', 'Elysia'];
removeElements(characters, 'Blade', 'Cartethyia', 'Eren'); 
console.log(characters);   // Виводить: ['Phainon', 'Elysia']