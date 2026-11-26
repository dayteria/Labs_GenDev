'use strict';

function seq(f) {   // Оголошення функції seq, яка приймає функцію f
  return function(g) {    // seq повертає іншу функцію, яка приймає g (функцію або число)
    if (typeof g === 'number') {   // Перевіряємо, чи є g числом
      return f(g);   // Якщо так, то рахуємо f від числа і повертаємо результат
    }
    
    return seq(function(x) {   // Якщо ні, повертаємо seq з новою функцією
      return f(g(x));   // Нова функція: спочатку рахує g від x, потім f від результату і повертає це
    });
  };
};

console.log(seq(x => x + 7)(x => x * 2)(5));
console.log(seq(x => x * 2)(x => x + 7)(5));
console.log(seq(x => x + 1)(x => x * 2)(x => x / 3)(x => x - 4)(7));
