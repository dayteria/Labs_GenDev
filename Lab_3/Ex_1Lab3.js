'use strict';

function random(min, max) {
    if (max === undefined) {    // Якщо другий аргумент (max) не передали \
        max = min               // То те, що передали — це max             > Ця перевірка потрібна, щоб random(min) не зламалась, а працювала як random(0, min)  
        min = 0                 // А min = 0                              /
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

console.dir(random(1,10))
console.dir(random(10))



// Розбір формули Math.floor(Math.random() * (max - min + 1)) + min

// Наша мета — отримати ЦІЛЕ число від min до max включно
// 1) Math.random(): повертає ДРОБОВЕ число від 0 (включно) до 1 (НЕ включно)
// 2) (max - min + 1): підрахунок скільки всього чисел у діапазоні від min до max включно
// !!! чому тут є +1: якщо взяти для прикладу діапазон від 5 до 10,
//                    то в ньому 6 чисел: 5, 6, 7, 8, 9, 10
//                    але при просто 10 - 5 = 5 отримаємо лише 5, +1 виправляє це
// 3) Math.random() * (max - min + 1): множить випадкове дробове Math.random() на кількість чисел у діапазоні,
//                                     щоб діапазон став не [0; 1), а [0; кількість)
// 4) Math.floor(): округляє вниз до найближчого цілого, тобто для min = 0, max = 5
//                  діапазон від 0 до 5.999.. стане від 0 до 5                  
// 5) + min: додає min до кожного числа з діапазону 
//          (бо Math.floor() завжди дає числа від 0, а нам треба від min)
//          завдяки цьому діапазон при min = 5, max = 10 буде 5, 6, 7, 8, 9, 10, а не 0, 1, 2, 3, 4, 5





// Що було б без перевірки if (max === undefined) {    
//                             max = min               
//                             min = 0                 
//                         }


// function random(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.dir(random(5));   // min = 5, max = undefined


// Що станеться:

// max - min + 1 = undefined - 5 + 1 = NaN (бо undefined — не число, тому операція дає NaN)
// Math.random() * NaN = NaN
// Math.floor(NaN) = NaN
// NaN + 5 = NaN
// Функція поверне NaN замість числа