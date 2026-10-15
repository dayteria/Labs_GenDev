'use strict';

// Вихідний масив з елементами різних типів
const array = [
  true, false, true, false, false,
  'hello', 'word', 33550336, 'Eren', 'code', 'text', 'end',
  5, 12, -200, 3.14, 0, 42, -7, 999, NaN, Infinity,
  null, undefined, 'Phainon'
];


// Колекція з іменами типів елементів масиву та нульовими значеннями
const typeCounter1 = {
  number: 0,
  string: 0,
  boolean: 0,
  object: 0,      // для null
  undefined: 0
};

// Підрахунок типів значень елементів масиву
for (const element of array) {            // Перебираємо значення
    const type = typeof element           // Визначаємо тип елемента
    typeCounter1[type]++;                 // Збільшуємо лічильник для типу значення цього елементу на 1
}

// Виведення результату 1
console.dir(typeCounter1)





// Порожня колекція типів значень елементів масиву, ключі створюватимуться динамічно в циклі
const typeCounter2 = {};

for (const element of array) {               // Перебираємо значення
    const elementType = typeof element;      // Визначаємо тип елемента

    if (!(elementType in typeCounter2)) {   // Якщо ключа ще немає
        typeCounter2[elementType] = 0;      // Створюємо його зі значенням 0
    }

    typeCounter2[elementType]++;        // Збільшуємо лічильник на 1
}

// Виведення результату 2
console.dir(typeCounter2);                