// ^Переменные
// const age = 10;
// const totalPrice = 200.24;
// const userName = 'Chelsy';
// const message = 'Добро пожаловать';

// Boolean
// const isOpen = true;
// const shouldConfirm = false;

// ^Variables - Переменные
// const - 90 %
// let - 10%

// ^консоль - передает то что мы хотим вывести в консоль
// console.log(totalPrice);

// ^Для проверки типа кода номер или строка
// const type = typeof isOpen;
// console.log(type);

// alert('qwqwqwqwqw')

// ^ Чтобы пользователь сделал какой либо ввод
// const quantity = prompt('Введите количество товара');
// console.log(quantity);

// ^ Парс числа с Number.parseInt - для целых чисел
// let elementWidth = '50px';
// const result = Number.parseInt(elementWidth);

// console.log(result);

// ^ Парс числа с Number.parseFloat - для нецелых чисел
// let elementWidth = '50.123px';
// const result = Number.parseFloat(elementWidth);

// console.log(result);


// const salary = 1300.123123;
// salary = Number(salary.toFixed(2));
// salary = Number(salary);

// console.log(salary);

// ^Возведение в Степень
// const base = 2;
// const power = 5;

// const result = Math.pow(base, power);

// console.log(result);

// ^Задача:
// Напиши скрипт который просит пользователя ввести число и степень,
// Возводит число в эту степень и выводит результат в консоль

// 1
// let base = prompt('Give a number');
// base = Number(base);

// console.log(base);

// 2
// let power = prompt('Give a degree');
// power = Number(power);

// console.log(power);

// 3
// const result = base ** power;

// console.log(result);

// ^ Sample random color
// const colors = ['tomato', 'teal', 'orange'];
// const max = colors.length - 1;
// const min = 0;

// const index = Math.round(Math.random() * (max - min) + min);

// const color = colors[index];

// console.log(color);

// document.body.style.backgroundColor = color;

// ^ Свойство длины
// const message = 'hey yo mthfckr'
// console.log(message.length);

// ^ Конкатенация слов
// const firstName = 'Vadym';
// const lastName = 'Yepifanov';
// const fullName = firstName + ' ' + lastName;

// console.log(fullName);

// ^Задача
// Напиши скрипт который выдает строку в формате:
// Гость х у поселяется в з номер который
// подставив вместо х у з к значения переменных

// const firstName = 'Vadym';
// const lastName = 'Yepifanov';
// const room = 716;
// const type = 'VIP';

// const welcomeMsg = 'Guest' + ' ' + firstName + ' ' + lastName + ' ' + 'booking' + ' ' + room + ' ' + type;
// const welcomeMsg = `Guest ${firstName} ${lastName} is booking ${room} ${type}`;

// console.log(welcomeMsg);

// ^ Normalize
// let brand = prompt('Give a brand');
// brand = brand.toLowerCase();

// console.log(brand);

// ^ Normalize
// let brand = 'SamSUng';
// console.log(brand.slice(1).toLowerCase());

// brand = brand[0] + brand.slice(1).toLowerCase();

// console.log(brand);

// ^== and ===
// const isEqual = 1 == true;

// console.log(isEqual);

// const isEqual = 1 === true;

// console.log(isEqual);

// ^ Boolean false: 0, NaN, null, undefined, '', ""
// console.log(Boolean(NaN));





// ^ Логическое И (оператор &&) - Запинается на лже - возвращает то, на чем запнулось или последний операнд
// console.log(5 && 7 && NaN && 'mango');

// ^ Логическое Или (оператор ||) - Запинается на ghfdlt - возвращает то, на чем запнулось или последний операнд
// console.log(false || 7 || NaN || 'mango');

// ^ Логическое Не (оператор !)
// console.log(!'mango');

function isAdult(age) {
  // Change code below this line
  const passed = age >= 18;

  // Change code above this line
  return passed;
}

isAdult(20)

