'use strict';

function store(value) {   // Оголошення функції store, яка приймає значення value
  return function() {   // Повертаємо нову функцію без параметрів
    return value;   // Ця нова функція повертає value, яке було передано в store
  }
};

const read = store(5);    // Викликаємо store(5): value = 5, повертається функція, яка зберігає у собі 5; записуємо цю функцію в read
const value = read();   // Викликаємо read(): вона повертає збережене значення 5, записуємо в value
console.log(value); // Виведе: 5