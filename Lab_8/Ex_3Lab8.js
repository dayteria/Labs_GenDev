'use strict';

function contract(fn, ...types) {   // Оголошення функції contract, яка приймає оригінальну функцію fn і набір очікуваних типів
  return function (...args) {   // Повертаємо нову функцію-обгортку, яка приймає будь-яку кількість аргументів
    for (let i = 0; i < args.length; i++) {   // Перебираємо кожен переданий аргумент за індексом i  
      const arg = args[i];   // Беремо поточний аргумент arg
      const expected = types[i];    // Беремо очікуваний тип для цього аргументу з масиву types 
      
      if (!expected) continue;   // Якщо для цього аргументу тип не вказано — пропускаємо перевірку

      const typeName = expected.name.toLowerCase();   // Беремо назву типу (Number -> 'Number') і приводимо його до нижнього регістру ('number')

      if (typeof arg !== typeName) {   // Перевіряємо, чи тип аргументу НЕ збігається з очікуваним
        throw new TypeError(`Argument type ${typeName} expected`);   // Якщо не збігається, кидаємо помилку з очікуваним типом
      }
    }

    const result = fn(...args);   // Викликаємо оригінальну функцію fn, розгортаючи args назад в аргументи

    const expected = types[types.length - 1];   // Беремо останній елемент types — це очікуваний тип результату
    const typeName = expected.name.toLowerCase();   // Беремо ім'я типу результату і приводимо його до нижнього регістру
    
    if (typeof result !== typeName) {   // Перевіряємо, чи тип результату НЕ збігається з очікуваним
      throw new TypeError(`Result type ${typeName} expected`);   // Якщо не збігається — кидаємо помилку з очікуваним типом результату
    }

    return result;
  };
}

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res1 = addNumbers(2, 3);   // Викликаємо addNumbers: 2 і 3 — числа, результат 5 — число
console.dir(res1);   // Виведення: 5

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res2 = concatStrings('Eren ', 'Yeager');   // Викликаємо concatStrings: обидва аргументи — рядки, результат — рядок
console.dir(res2);   // Виведення: Eren Yeager

try {   // Блок try: пробуємо виконати код, який може кинути помилку
  addNumbers('2', 3);   // Передаємо '2' (рядок) та 3 (число) -> це має кинути помилку
} catch (error) {   // Ловимо помилку, яку кинув try
  console.error("Caught error:", error.message);   // "Argument type number expected"
}

const stringAdd = (a, b) => String(a + b);   // Функція додає a і b та перетворює результат рядком
const wrappedStringAdd = contract(stringAdd, Number, Number, Number);

try {   // Блок try: пробуємо виконати код, який може кинути помилку
  wrappedStringAdd(2, 3);   // Передаємо числа 2 і 3, але stringAdd повертає '5' (рядок) замість number -> це має кинути помилку
} catch (error) {   // Ловимо помилку, яку кинув try
  console.error(error.message);   // "Result type number expected"
}