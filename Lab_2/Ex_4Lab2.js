'use strict';

const fn = () => {
  const obj1 = {name: 'Eren'};      // Об'єкт з одним полем name у константі
  let obj2 = {name: 'Phainon'};     // Об'єкт з одним полем name у змінній

  // Зміна значення поля name в обох об'єктах

  obj1.name = 'Mikasa';    // Працює, оскільки зміна поля name — це не перепризначення, тому проблем немає, хоч obj1 це і константа
  obj2.name = 'Mydei';    // Так само, + obj2 це змінна, тому проблем взагалі ніяких немає
  
  // Спроба записати посилання на інший об'єкт

  // obj1 = {name: 'Erehh Yegaaa'}; // Не працює, const не можна перепризначити
  obj2 = {name: 'Phai-chan'};    // Працює, let дозволяє перепризначення

  console.dir(obj1);
  console.dir(obj2);
};

fn();



// Функція 'createUser' з сигнатурою createUser(name: string, location: string): object
function createUser(name, location) {
  return {name, location};
}

console.dir(createUser("Eren Yeager", "Paradis island"));