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
      console.log(calc.sign);

      // просто для наглядности (удалить потом)
      if (calc.sign == '+') {
        console.log('знак операции +');
      };
      if (calc.sign == '-') {
        console.log('знак операции -');
      };
      if (calc.sign == '*') {
        console.log('знак операции *');
      };
      if (calc.sign == '/') {
        console.log('знак операции /');
      };
    };
  },

  // условия ввода
  termsOfEnter: function termsOfEnter(key) {

    // если нажата цифра
    if (calc.digit.includes(key)) {

      // ввод первого числа
      if (calc.arrB.length == 0 &&
        calc.sign.length == 0) {
        calc.arrA.push(calc.inputLine);
        console.log('кол-во цифр числа A: ' + calc.arrA.length);
        // точка
        if (calc.arrA.length > 0 &&
          calc.arrA.includes('.')) {
          console.log('ввод дробного числа');
        };

        calc.strOut = calc.arrA.join('');
      };

      // ввод знака
      // if (calc.sign.length > 0) {
      //   console.log('в знаке что-то есть!');
      // }

      // ввод второго числа
      if (calc.sign.length > 0) {
        calc.arrB.push(calc.inputLine);
        console.log('кол-во цифр числа B: ' + calc.arrB.length);

        if (calc.arrB.length > 0 &&
          calc.arrB.includes('.')) {
          console.log('ввод дробного числа');
        };

        calc.strOut = calc.arrB.join('');
      };



      // if (calc.arrA.length == 3) {
      //   console.log('! ввели 4 цифры');
      //   return;
      // };


      console.log(calc.arrA);
      //
      if (calc.sign.length > 0) { console.log(calc.sign); }
      // 
      console.log(calc.arrB);

      return;
    };
  },

  // вычисления
  calculations: function calculations(key) {

    if (key === '=' || key === 'Enter') {
      if (calc.arrB.length == 0) calc.arrB = calc.arrA;

      // console.log(calc.sign);

      switch (calc.sign[0]) {
        case '+':
          calc.arrA = (+calc.arrA.join('')) + 
          (+calc.arrB.join(''));
          // calc.arrA = calc.result;
          // Error - NaN
          // a = (+a) + (+b);
          // arrA = a;
          console.log(`сложение: ${calc.sign[0]}`);
          // console.log(`результат: ${calc.arrA}`);
          break;
        case '-':
          calc.arrA = (+calc.arrA.join('')) - 
          (+calc.arrB.join(''));
          // a = (+a) - (+b);
          // arrA = a;
          console.log(`вычитание: ${calc.sign[0]}`);
          // console.log(`результат: ${calc.arrA}`);
          break;
        case '*':
          calc.arrA = (+calc.arrA.join('')) * 
          (+calc.arrB.join(''));
          // a = (+a) * (+b);
          // arrA = a;
          console.log(`умножение: ${calc.sign[0]}`);
          // console.log(`результат: ${calc.arrA}`);
          break;
        case '/':
          if (calc.arrB[0] == 0) {
            calc.strOut = 'Деление на 0';
            console.log('Деление на 0');
            // a = '';
            // b = '';
            // sign = '';
            return;
          }
          calc.arrA = (+calc.arrA.join('')) / 
          (+calc.arrB.join(''));
          // a = (+a) / (+b);
          // calc.arrA = a;
          console.log(`деление: ${calc.sign[0]}`);
          // console.log(`результат: ${calc.arrA}`);
          break;
      }
      calc.finish = true;
      console.log(`finish: ${calc.finish}`);
      console.log(`результат: ${calc.arrA}`);
    };
    return;
  },

  // окно вывода
  output: function output() {

    // добавить разветвления по условиям
    if (calc.finish == true) {
      calc.strOut = calc.arrA;

      // let num = 48621;
      // let array = ('' + calc.result).split('').map(function (digit) {
      //   return digit;
      // });
      // console.log(array);

      let array2 = ('' + calc.arrA).split('')
      .map(function (digit) {
        return digit;
      });
      console.log(array2);

    }

    // strOut = calc.arrA.join('');
    // calc.strOut == calc.result.join('');
    calc.out.textContent = calc.strOut;
    console.log('strOut: ' + calc.strOut);
  },
};

// вызовы
// myFunc(out2);
// calc.key(out2);
calc.key(calc.line);
calc.key(calc.operation);
calc.key(calc.termsOfEnter);
calc.key(calc.calculations);
calc.key(calc.output);






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