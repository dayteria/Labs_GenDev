'use strict';

const givenPersons = {
  ErenYeager: { born: 835, died: 854 },
  HangeZoe: { born: 820, died: 854 },
  ErwinSmith: { born: 812, died: 850 },
  SashaBraus: { born: 834, died: 854 },
};

function lifetime(persons) {
    const years = {};     // Створюємо порожній об'єкт years; сюди буде записуватись результат: ключ — ім'я людини, значення — тривалість життя
    for (const name in persons) {    // Перебираємо об'єкт persons; name по черзі дорівнює кожному ключу об'єкта persons
        years[name] = persons[name].died - persons[name].born;     // Для кожної людини за ключем name рахуємо тривалість життя і записуємо результат у об'єкт years під тим самим ключем
    }
    
    return years;
}

console.log(lifetime(givenPersons));



// Чому [name], а не .name
// Запис	     | Що робить
// persons.name	 | шукає фіксований ключ 'name' (якого немає) / ключ написаний БУКВАЛЬНО в коді
// persons[name] | шукає ключ, значення якого зараз зберігається в константі name ('ErenYeager', потім 'HangeZoe' і тд.) / ключ лежить у ЗМІННІЙ