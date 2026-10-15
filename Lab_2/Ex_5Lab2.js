'use strict';

// Реалізація зберігання телефонних номерів у масиві об'єктів
const contactList1 = [
    {name: "Eren", phone: "+49301234567"},
    {name: "Phainon", phone: "+302101234567"},
    {name: "Elysia", phone: "+861012345678"}
];

function findPhoneByName1(name) {             // Оголошення функції
  for (const person of contactList1) {        // Перебираємо кожен об'єкт person у масиві contactList1 по черзі
    if (person.name === name) {               // Порівнюємо ім'я поточного об'єкта з name у масиві contactList1
        return person.phone;                  // Якщо ім'я співпало, то повертаємо номер телефону
    }
  }
  return 'Not found';                         // Якщо цикл завершився, але ім'я не співпало, то повертаємо повідомлення
}                   

console.dir(findPhoneByName1("Eren"));
console.dir(findPhoneByName1("Phainon"));
console.dir(findPhoneByName1("Elysia"));





// Реалізація зберігання телефонних номерів на хеш-таблицях
const contactList2 = {            // Оголошення хеш-таблиці: ім'я = ключ, номер = значення  
    Eren: "+49301234567",
    Phainon: "+302101234567",
    Elysia: "+861012345678"
};

function findPhoneByName2(name) {         // Оголошення функції
    return contactList2[name]             // Повертаємо номер телефону за переданим іменем
};

console.dir(findPhoneByName2("Eren"));
console.dir(findPhoneByName2("Phainon"));
console.dir(findPhoneByName2("Elysia"));
