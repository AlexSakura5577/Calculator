// Calculator

// calc
const calc = {
  // строка ввода
  inputLine: '',
  // знак операции
  sign: '',
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


  // calc.arrA.push(key);
  // calc.output(calc.arrA);
  // console.log(calc.arrA);

  // str1: 
  // str2: 

  // функция присваивания значения переменной ввода
  line: function out2(key) {
    calc.inputLine = key;
    console.log('inputLine: ' + calc.inputLine); //!
  },

  operation: function operation(key) {
    if (calc.action.includes(key)) {
      // let sign = key;
      calc.sign = key;
      // calc.out.textContent = calc.sign;
      calc.strOut = calc.sign;
      console.log('sign: ' + calc.sign);
    }
  },

  // условия ввода
  termsOfEnter: function termsOfEnter(key) {

    // если нажата цифра
    if (calc.digit.includes(key)) {

      // if (calc.arrB.length == 0) {

      // }

      // if (calc.arrA.length == 3) {
      //   console.log('! ввели 4 цифры');
      //   return;
      // };

      if (calc.sign == '+') {
        console.log('! ввели +');
        return;
      };

      calc.arrA.push(calc.inputLine);
      console.log(calc.arrA);
      console.log(calc.arrB);
      console.log('length: ' + calc.arrA.length);
      return;
    };
  },

  // окно вывода
  output: function output() {

    // добавить разветвления по условиям

    // strOut = calc.arrA.join('');
    calc.strOut == calc.inputLine;
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
calc.key(calc.output);






/*
  clear: function clearAll() { }, // очистить всё
  delete: function deleteKey() { }, // очистка консоли и сброс клавишей delete
  backspace: function backspaceKey() { }, // удалить по одной цифре справа налево клавишей backspace
  comma: function commaKey() { }, // запятую в точку ru раскладка
  calculations: function calculationsEnd() { }, // вычисления
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