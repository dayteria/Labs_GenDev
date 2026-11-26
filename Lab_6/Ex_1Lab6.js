'use strict';

function pipe(...fns) {   // Оголошення функції pipe, яка приймає будь-яку кількість аргументів і збирає їх у масив fns
  for (const fn of fns) {   // Перебираємо кожен аргумент із масиву fns по черзі
    if (typeof fn !== 'function') {   // Перевіряємо, чи поточний аргумент НЕ є функцією
      throw new Error('All pipe arguments should be functions');  // Якщо це не функція: кидаємо помилку і припиняємо виконання
    }
  }
  return function (x) {  // Якщо це функція: Повертаємо нову функцію, яка приймає вхідне значення x
    return fns.reduce((value, fn) => fn(value), x);   // Проганяємо x через усі функції по черзі: результат кожної стає аргументом наступної, починаємо з x
  };
};

function inc(x) { 
  return ++x; 
};
function twice(x) { 
  return x * 2; 
};
function cube(x) { 
  return x ** 3; 
};

// Тестування
const f = pipe(inc, twice, cube);  // Ланцюг функцій (виконуються зліва направо)
console.log(f(5));   // ((5 + 1) * 2) ** 3 = 6 * 2 = 12 ** 3 = 1728

// Перевірка на помилку
try {  // Блок try: пробуємо виконати код, який може кинути помилку
  const brokenPipe = pipe(inc, 5, cube);   // Викликаємо pipe з числом 5 замість функції — це має кинути помилку
} catch (error) {   // Ловимо помилку, яку кинув try, у змінну error, якщо вона виникла
  console.log(error.message);   // "All pipe arguments should be functions"
}