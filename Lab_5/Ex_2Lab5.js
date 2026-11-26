'use strict';

function array() {   // Оголошення функції array
  const data = [];   // Створення порожнього масиву data

  function get(i) {   // Оголошення функції get, яка приймає індекс i
    return data[i];   // Повертаємо елемент масиву data за індексом i
  };

  get.push = function(x) {   // Присвоюємо функції get властивість push, яка приймає x (елемент, який передаємо у push, щоб додати його в масив)
    return data.push(x);   // Додаємо x у кінець data і повертаємо нову довжину масиву
  };

  get.pop = function() {   // Присвоюємо функції get властивість pop
    return data.pop();   // Видаляємо останній елемент data і повертаємо його
  };

  return get;  // Повертаємо функцію get
};

const arr = array();  // Викликаємо array() і записуємо результат у arr

arr.push('first');   // Додаємо 'first' у кінець масиву
arr.push('second');   // Додаємо 'second' у кінець масиву
arr.push('third');  // Додаємо 'third' у кінець масиву

console.log(arr(0));   // Виводить: first
console.log(arr(1));   // Виводить: second
console.log(arr(2));   // Виводить: third

console.log(arr.pop());   // Виводить: third
console.log(arr.pop());   // Виводить: second
console.log(arr.pop());   // Виводить: first

console.log(arr.pop());   // Виводить: undefined (масив уже порожній — видаляти нічого)