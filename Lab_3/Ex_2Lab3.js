'use strict';

const givenCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!_*.';

function generateKey(length, characters) {       // Оголошення функції
    let key = '';        // Порожній рядок — сюди збиратимемо символи
    for (let i = 0; i < length; i++) {          // Повторюємо length разів
        const index = Math.floor(Math.random() * characters.length);       // Випадковий індекс у рядку characters
        key += characters[index];       // Додаємо символ за цим індексом до key
    }                                                 
    return key;      // Повертаємо готовий ключ
}                                                     

const password = generateKey(19, givenCharacters);
console.log(password);