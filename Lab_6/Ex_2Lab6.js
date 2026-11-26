'use strict';

function compose(...fns) {   // Оголошуємо функцію compose, яка приймає будь-яку кількість функцій і збирає їх у масив fns
  const handlers = [];   // Створюємо порожній масив handlers для зберігання обробників помилок

  function composed(x) {   // Оголошення функції composed, яка приймає вхідне значення x
    if (fns.length === 0) return x;  // Якщо функцій немає — просто повертаємо x без змін

    const last = fns.length - 1;   // Індекс останньої функції в масиві
    let res = x;   // Стартове значення результату — x

    try {   // Блок try: пробуємо виконати код, який може кинути помилку
      for (let i = last; i >= 0; i--) {   // Перебираємо функції з кінця масиву до початку (справа наліво)
        res = fns[i](res);   // Застосовуємо поточну функцію до res, результат стає новим res
      }
      return res;

    } catch (error) {   // Ловимо помилку, яку кинув try, у змінну error, якщо вона виникла
      for (const handler of handlers) {   // Перебираємо всі обробники помилок
        handler(error);   // Викликаємо кожен обробник і передаємо йому помилку
      }
      return undefined; 
    }
  };

  composed.on = function(name, handler) {   // Додаємо функції composed метод on, який приймає name і handler
    if (name === 'error') {   // Перевіряємо, чи подія називається 'error'
      handlers.push(handler);   // Якщо називається — додаємо обробник у масив handlers
    }
    return composed;   // Повертаємо composed, щоб можна було викликати .on ланцюгом
  };

  return composed;   // Повертаємо функцію composed назовні
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

console.log(compose(inc, twice, cube)(5));

function fail(x) {
  throw new Error(`Failed to perform calculations with number ${x}`);   // Завжди кидаємо помилку з числом x у повідомленні
}

const f = compose(inc, twice, fail, cube);   // Ланцюг функцій (виконуються справа наліво)
f.on('error', error => console.log(error.message));   // Підписуємо обробник на подію 'error', який виводить повідомлення помилки
console.log(f(5));

