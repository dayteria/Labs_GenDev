'use strict';

// Середнє арифметичне двох чисел
function average(a, b) {
  return (a+b)/2;              
}

// Квадрат числа
function square(x) {
  return x*x;                    
}

// Куб числа
function cube(x) {
  return x*x*x;                
}

function calculate() {
    let array = [];                                 // Порожній масив для збору результатів
    for (let i=0; i<=9; i++) {                      // Цикл від 0 до 9 включно
        let res = average(square(i), cube(i));      // Рахуємо квадрат і куб від i=0 до i<=9, передаємо їх в average, отримуємо середнє арифметичне
        array.push(res);                            // Додаємо результат у масив
    }
    return array;     // Повертаємо готовий масив
}

console.dir(calculate());     // Викликаємо функцію calculate та виводимо масив 
