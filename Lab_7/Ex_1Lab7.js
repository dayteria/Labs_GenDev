'use strict';

function removeElement(array, item) {   // Оголошення функції removeElement, яка приймає масив array і елемент item
  const index = array.indexOf(item);   // Знаходимо індекс переданого елемента item у масиві array

  if (index !== -1) {   // Якщо індекс елемента масиву ≠ -1 (елемент існує)
    array.splice(index, 1);   // Видаляємо елемент з масиву за індексом index
  }
};

const numbers = [1, 2, 3, 4, 5, 6, 7];
removeElement(numbers, 5);
console.log(numbers);   // Виводить: [1, 2, 3, 4, 6, 7]

const characters = ['Eren', 'Phainon', 'Blade', 'Elysia'];
removeElement(characters, 'Blade'); 
removeElement(characters, 'Cartethyia'); 
console.log(characters);   // Виводить: ['Eren', 'Phainon', 'Elysia']