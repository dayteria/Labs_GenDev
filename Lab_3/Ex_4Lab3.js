'use strict';

function introspect(iface) {                        // Оголошення функції
    const result = [];                              // Порожній масив для результату
    for (const key in iface) {                      // Перебираємо всі ключі об'єкта iface
        if (typeof iface[key] === 'function') {     // Перевіряємо, чи є значення під іменем ключа функцією
            result.push([key, iface[key].length]);  // Додаємо пару [ключ, кількість аргументів] у створений порожній масив result
        }
    }
    return result;
}

const iface = {
    m1: x => [x],       // Стрілкова функція, 1 аргумент
    m2: function (x, y) {     // Звичайна функція, 2 аргументи
        return [x, y];
    },
    m3: "Shinzou wo sasageyo!",     // Текст
    m4(x, y, z) {        // Метод, 3 аргументи
        return [x, y, z];
    },
    m5: 33550336       // Число
};

console.log(introspect(iface));