'use strict';

function iterate(obj, callback) {   // Оголошення функції iterate, яка приймає obj і функцію-callback
  const keys = Object.keys(obj);   // Отримуємо масив усіх ключів об'єкта obj
  
  for (const key of keys) {   // Перебираємо кожен ключ
    const value = obj[key];   // Отримуємо значення value за поточним ключем key
    callback(key, value);   // Викликаємо callback, передаючи ключ та значення
  }
};

const characters = {
  Eren: 'Eldian',
  Phainon: 'Delieverer',
  Blade: 'Stellaron hunter',
  Elysia: 'Flamechaser'
};

iterate(characters, function(key, value) {   // Викликаємо iterate, передаючи об'єкт characters і функцію-callback
  console.log(`Key: ${key}, Value: ${value}`);   // Виводимо ключ і значення для кожного елемента підставляючи значення key та value у шаблонний рядок
});
