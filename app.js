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
  digit: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', ','],
  // знаки для вычислений
  action: ['-', '+', '*', '/'],
  // числа
  arrA: [], // первое число
  arrB: [], // второе число
  result: [], // результат
  finish: false, // 
  // строка вывода
  strOut: '',
  numOfCalc: 0,

  // клавиша
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
  line: function line(key) {
    calc.inputLine = key;
    console.log('key: ' + calc.inputLine); //!
    return;
  },

  // запятую в точку
  comma: function comma() {
    if (calc.inputLine == ',') {
      calc.inputLine = '.';
      return;
    }
  },

  // удалить по одной цифре справа налево
  backspace: function backspace() {
    if (calc.inputLine == "Backspace" &&
      calc.arrA.length > 0 &&
      calc.arrB.length == 0 &&
      calc.finish == false) {
      console.log('опечатка в первом числе');

      calc.arrA.splice(calc.arrA.length - 1, 1);
      calc.strOut = calc.arrA.join('');
    }
    if (calc.inputLine == "Backspace" &&
      calc.arrA.length > 0 &&
      calc.arrB.length > 0 &&
      calc.numOfCalc < 1) {
      console.log('опечатка во втором числе');

      calc.arrB.splice(calc.arrB.length - 1, 1);
      calc.strOut = calc.arrB.join('');
    }
    // if (calc.inputLine == "Backspace" &&
    //   calc.arrA.length == 0 ||
    //   calc.arrB.length == 0) {
    //   console.log('везде 0');
    //   // calc.strOut = 0;
    // }
    // if (calc.inputLine == "Backspace" &&
    //   calc.arrA.length == 0) {
    //   console.log('arrA 0');
    //   calc.strOut = 0;
    // }
    // if (calc.inputLine == "Backspace" &&
    //   calc.arrB.length == 0) {
    //   console.log('arrB 0');
    //   calc.strOut = 0;
    // }
    return;
  },

  // очистить всё
  clear: function clear() {
    if (calc.inputLine == 'ac' ||
      calc.inputLine == 'Delete' ||
      calc.inputLine == "Backspace" &&
      calc.arrA.length > 0 &&
      calc.arrB.length > 0 &&
      calc.numOfCalc > 0) {
      calc.arrA = [];
      calc.arrB = [];
      calc.sign = []; // знак операции
      calc.finish = false; //
      calc.numOfCalc = 0; //
      calc.strOut = 0;
      console.clear();
      console.log('очищено');
      return;
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
        console.log('ввод первого числа');

        calc.arrA.push(calc.inputLine);
        calc.duplicateDots(calc.arrA);
        calc.strOut = calc.arrA.join('');
      };

      // если и первое и второе числа заполнены и вычисления произведены
      if (calc.arrA.length > 0 &&
        calc.arrB.length > 0 &&
        calc.finish == true) {
        console.log('первое и второе числа заполнены');

        calc.arrA = calc.inputLine.split('');
        calc.arrB = []; // второе число
        calc.sign = []; // знак операции
        calc.finish = false;
        calc.strOut = calc.arrA.join(''); // join('') можно убрать
        // return;
      };

      // ввод второго числа
      if (calc.arrA.length > 0 &&
        calc.sign.length > 0 &&
        calc.finish === false) {
        console.log('ввод второго числа');

        calc.arrB.push(calc.inputLine);
        calc.duplicateDots(calc.arrB);
        calc.strOut = calc.arrB.join('');
      };

      // ввод второго числа повторно после вычислений
      if (calc.arrA.length > 0 &&
        calc.sign.length > 0 &&
        calc.arrB.length > 0 &&
        calc.numOfCalc > 0) {
        console.log('ввод второго числа повторно');

        calc.arrB = [];
        calc.arrB.length = 0;
        calc.numOfCalc = 0;
        calc.arrB = calc.inputLine.split('');
        calc.strOut = calc.arrB.join('');
        return;
      }

      // точка
      // if (calc.arrA.length > 0 &&
      //   calc.arrA.includes('.') ||
      //   calc.arrB.length > 0 &&
      //   calc.arrB.includes('.')) {
      //   console.log('ввод дробного числа');
      // };

      if (calc.arrA.length > 0 &&
        calc.arrA.includes('.')) {
        console.log('ввод дробного числа');
      };
      if (calc.arrB.length > 0 &&
        calc.arrB.includes('.')) {
        console.log('ввод дробного числа');
      };
      return;
    };
    return;
  },

  // удаление дубликатов точек
  duplicateDots: (arr) => {
    let doubleComma = arr.filter(item => item === '.').length;
    if (doubleComma > 0) {
      let commaIndex = arr.indexOf('.', 0);
      let firstComma = commaIndex;
      for (let i = 0; i <= doubleComma - 1; i++) {
        let commaIndex = arr.indexOf('.', 0);
        arr.splice(commaIndex, 1);
      }
      arr.splice(firstComma, 0, '.');
    }
    return arr;
  },

  // операции
  operation: function operation(key) {

    // if (calc.action.includes(key) &&
    //   calc.arrA.length > 0 &&
    //   calc.arrB.length > 0 &&
    //   calc.sign > 0) {
    //   // calc.finish = false;
    //   calc.sign[0] = key;
    //   calc.strOut = calc.sign;
    //   console.log('есть!');
    //   return;
    // }

    if (calc.action.includes(key)) {

      console.log(`ввод знака`);

      calc.sign[0] = key;
      calc.strOut = calc.sign;
      return;
    };
  },

  // вычисления
  calculations: function calculations(key) {

    if (key === '=' || key === 'Enter') {

      calc.numOfCalc += 1;

      console.log('вычисления');

      if (calc.arrB.length == 0) { calc.arrB = calc.arrA };
      if (calc.finish == true) { calc.arrB = calc.arrA };
      // if (calc.sign > 0) {calc.finish = false};

      let a = calc.arrA.join('');
      let b = calc.arrB.join('');

      switch (calc.sign[0]) {
        case '+':
          let plus = (+a) + (+b);
          calc.result = Array.from(String(plus));
          calc.arrA = calc.result;
          console.log(`сложение: ${calc.sign[0]}`);
          // calc.arrB = calc.arrA;
          // calc.finish == true;
          break;
        case '-':
          let minus = (+a) - (+b);
          calc.result = Array.from(String(minus));
          calc.arrA = calc.result;
          console.log(`вычитание: ${calc.sign[0]}`);
          break;
        case '*':
          let multiply = (+a) * (+b);
          calc.result = Array.from(String(multiply));
          calc.arrA = calc.result;
          console.log(`умножение: ${calc.sign[0]}`);
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
          let divide = (+a) / (+b);
          calc.result = Array.from(String(divide));
          calc.arrA = calc.result;
          console.log(`деление: ${calc.sign[0]}`);
          break;
      };
      // calc.finish = true;
      // calc.arrB = [];
      calc.strOut = calc.arrA.join('');
      return;
    };
    return;
  },

  // окно вывода
  output: function output() {
    if (calc.strOut == '') {
      calc.strOut = '0';
    }
    calc.out.textContent = calc.strOut;
    return;
  },

  // лог
  log: function log() {
    console.log('inputLine: ' + calc.inputLine);
    console.log(calc.arrA);
    // console.log('кол-во цифр числа A: ' + calc.arrA.length);
    console.log(calc.sign);
    console.log(calc.arrB);
    // console.log('кол-во цифр числа B: ' + calc.arrB.length);
    console.log('strOut: ' + calc.strOut);
    if (calc.finish == true) {
      console.log(`результат: ${calc.strOut}`);
    };
    console.log(`finish: ${calc.finish}`);
    console.log(calc.numOfCalc);
    return;
  }
};

// вызовы
calc.key(calc.line);
calc.key(calc.comma);
calc.key(calc.backspace);
calc.key(calc.clear);
calc.key(calc.termsOfEnter);
calc.key(calc.operation);
calc.key(calc.calculations);
calc.key(calc.output);
calc.key(calc.log);
//



/*

*/

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