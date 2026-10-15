'use strict';

// Масив чисел з діапазону [15, 30]
function range (begin, end) {
  let array = [];                         // Пустий масив, куди складатимемо числа
  for (let i = begin; i <= end; i++) {    // Йдемо від begin до end, додаючи 1 щоразу
    array.push(i);                        // Кладемо число в кінець масиву
  }
  return array;                           // Віддаємо готовий масив
};

console.dir(range(15, 30));      




// Масив непарних чисел з діапазону [15, 30]
function rangeOdd (begin, end) {
  let arrayOdd = [];                      // Пустий масив
  for (let i = begin; i <= end; i++) {    // Йдемо від begin до end, додаючи 1 щоразу
    if (i % 2 !== 0) {                    // Якщо число непарне
      arrayOdd.push(i);                   // то кладемо його в масив
    }
  }
  return arrayOdd;                        // Віддаємо готовий масив
};

console.dir(rangeOdd(15, 30));      