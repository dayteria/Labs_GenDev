'use strict';

function max(matrix) {     // Оголошення функції max, яка приймає двовимірний масив matrix (масив рядків)
  let maxValue = matrix[0][0];   // Стартуємо з першого елемента матриці: matrix[0] — перший рядок [0] — перше число в ньому
  for (const row of matrix) {     // Перебираємо масив matrix; row по черзі дорівнює кожному рядку двовимірного масиву
    for (const element of row) {     // Перебираємо масив row; element по черзі дорівнює кожному числу з рядка двовимірного масиву
      if (element > maxValue) {    // Якщо поточне число element більше за поточне найбільше значення maxValue
        maxValue = element;     // то maxValue набуває значення element
      }
    }
  }
  return maxValue;
};

const givenMatrix = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(givenMatrix);