// Calculator

// calc
const calc = {
  // строка ввода
  inputLine: '',
  // знак операции
  sign: [],
  // экран вывода
  out: document.querySelector('.calc-screen p'),
  // кнопка (селектор)
  btn: document.querySelector('.buttons'),
  // цифры и точка
  digit: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'],
  // знаки для вычислений
  action: ['-', '+', '*', '/'],
  // числа
  arrA: [], // первое число
  arrB: [], // второе число
  // result: [], // результат
  finish: false, // 
  // строка вывода
  strOut: '',

  key: function myFunc(callback) {
    let key;
    event1 = window.addEventListener('keydown', (e) => {
      key = e.key;
      callback(key);
    })
    event2 = calc.btn.addEventListener('click', (e) => {
      if (!e.target.classList.contains('btn')) return;
      key = e.target.textContent;
      callback(key);
    })
    return;
  },

  // функция присваивания значения переменной ввода
  line: function out2(key) {
    calc.inputLine = key;
    console.log('key: ' + calc.inputLine); //!
  },

  operation: function operation(key) {
    if (calc.action.includes(key)) {
      calc.sign[0] = key;
      calc.strOut = calc.sign;
      // console.log(calc.sign);

      // // просто для наглядности (удалить потом)
      // if (calc.sign == '+') {
      //   console.log('знак операции +');
      // };
      // if (calc.sign == '-') {
      //   console.log('знак операции -');
      // };
      // if (calc.sign == '*') {
      //   console.log('знак операции *');
      // };
      // if (calc.sign == '/') {
      //   console.log('знак операции /');
      // };
    };
  },

  // условия ввода
  termsOfEnter: function termsOfEnter(key) {

    // если нажата цифра
    if (calc.digit.includes(key)) {

      // ввод первого числа
      if (calc.arrB.length == 0 &&
        calc.sign.length == 0 &&
        calc.finish == false) {
        calc.arrA.push(calc.inputLine);
        // console.log('кол-во цифр числа A: ' +
        //   calc.arrA.length);
        // точка
        if (calc.arrA.length > 0 &&
          calc.arrA.includes('.')) {
          console.log('ввод дробного числа');
        };
        calc.strOut = calc.arrA.join('');
        // return;
      };

      // если и первое и второе числа заполнены и вычисления произведены
      if (calc.arrA.length > 0 &&
        calc.arrB.length > 0 &&
        calc.finish == true) {
        calc.arrA.push(calc.inputLine);
        calc.arrB = []; // второе число
        calc.sign = []; // знак операции
        calc.finish = false;
        console.log('finish: ' + calc.finish);
        calc.strOut = calc.arrA.join('');
        // return;
      };

      // ввод второго числа
      if (calc.arrA.length > 0 &&
        calc.sign.length > 0 &&
        calc.finish == false) {
        calc.arrB.push(calc.inputLine);
        console.log('кол-во цифр числа B: ' +
          calc.arrB.length);

        if (calc.arrB.length > 0 &&
          calc.arrB.includes('.')) {
          console.log('ввод дробного числа');
        };

        calc.strOut = calc.arrB.join('');
        // return;
      };

      console.log(`arrA: ${calc.arrA.join('')}`);
      if (calc.sign.length > 0) { console.log(`sign: ${calc.sign}`); }
      console.log(`arrB: ${calc.arrB.join('')}`);
      return;
    };
  },

  // вычисления
  calculations: function calculations(key) {

    if (key === '=' || key === 'Enter') {
      if (calc.arrB.length == 0) { calc.arrB = calc.arrA };

      // if (calc.finish == true) { calc.finish = false }

      switch (calc.sign[0]) {
        case '+':
          calc.arrA = (+calc.arrA.join('')) +
            (+calc.arrB.join(''));
          console.log(`сложение: ${calc.sign[0]}`);
          // calc.arrA = calc.arrA.toString(10).split('').map(int => parseInt(int, 10))
          break;
        case '-':
          calc.arrA = (+calc.arrA.join('')) -
            (+calc.arrB.join(''));
          console.log(`вычитание: ${calc.sign[0]}`);
          // calc.arrA = calc.arrA.toString(10).split('').map(int => parseInt(int, 10))
          break;
        case '*':
          calc.arrA = (+calc.arrA.join('')) *
            (+calc.arrB.join(''));
          console.log(`умножение: ${calc.sign[0]}`);
          // calc.arrA = calc.arrA.toString(10).split('').map(int => parseInt(int, 10))
          break;
        case '/':
          if (calc.arrB[0] == 0) {
            calc.strOut = 'Деление на 0';
            console.log('Деление на 0');
            calc.arrA = [];
            calc.arrB = [];
            calc.sign = [];
            return;
          }
          calc.arrA = (+calc.arrA.join('')) /
            (+calc.arrB.join(''));
          console.log(`деление: ${calc.sign[0]}`);
          // calc.arrA = calc.arrA.toString(10).split('').map(int => parseInt(int, 10))
          break;
      }

      // console.log(typeof (calc.arrA.toString(10).split('').map(int => parseInt(int, 10))));
      calc.finish = true;
      console.log(`finish: ${calc.finish}`);
      calc.strOut = calc.arrA;
      // calc.strOut = calc.arrA.join('');
      console.log(`результат: ${calc.arrA.join('')}`);
      // calc.arrB = [];
      // calc.sign = [];
      return;
    };
    // return;
  },

  // окно вывода
  output: function output() {

    // добавить разветвления по условиям
    // if (calc.finish == true) {
    //   calc.strOut = calc.arrA;

    //   let result = ('' + calc.arrA).split('')
    //     .map(function (digit) {
    //       return digit;
    //     });
    //   console.log(result);
    // };

    // if (calc.arrA.length == 0 &&
    //   calc.arrB.length == 0 &&
    //   calc.finish == false) {
    //   calc.out.textContent = 0;
    // }
    // if (calc.arrA.length > 0 &&
    //   calc.arrB.length > 0 &&
    //   calc.finish == true) {
    //   calc.out.textContent = calc.arrA.join('');
    // }

    calc.out.textContent = calc.strOut;
    console.log('strOut: ' + calc.strOut);
    // calc.finish = false;
    // console.log(`finish: ${calc.finish}`);
    return;
  },
};

// вызовы
// myFunc(out2);
// calc.key(out2);
// while (true) {
calc.key(calc.line);
calc.key(calc.operation);
calc.key(calc.termsOfEnter);
calc.key(calc.calculations);
calc.key(calc.output);
// }







/*
  clear: function clearAll() { }, // очистить всё
  delete: function deleteKey() { }, // очистка консоли и сброс клавишей delete
  backspace: function backspaceKey() { }, // удалить по одной цифре справа налево клавишей backspace
  comma: function commaKey() { }, // запятую в точку ru раскладка
*/

// ввод
// inputLine = '';
// цифры и точка
// const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
// знаки для вычислений
// const action = ['-', '+', '*', '/'];
// экран вывода
// const out = document.querySelector('.calc-screen p');
// кнопка (селектор)
// const btn = document.querySelector('.buttons')

// calc.key(key => console.log(key)) // key в консоль

// calc.key(key => {
//   // вот тут пиши дальше код который использует key
//   inputLine = key;
//   console.log('inputLine: ' + inputLine);
// })

// Я сравнивала event.code, а не само значение event.key.
// if (e.target.textContent == '888') {
//   key = 7;
// }