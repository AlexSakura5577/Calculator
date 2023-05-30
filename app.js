// Calculator

// obj calc
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
  // оранжевая кнопка
  btnActive: document.querySelectorAll('.btn.bg-orange'),
  // стиль оранжевой кнопки по-умолчанию
  outline: 'rgb(255, 255, 255) none 0px',
  outlineOffset: '0px',
  equalsCount: false,
  enter: false,
  // клавиша
  key: (callback) => {
    let key;
    event1 = window.addEventListener('keydown', (e) => {
      key = e.key;
      // console.log(e);
      callback(key);
    })
    event2 = calc.btn.addEventListener('click', (e) => {
      if (!e.target.classList.contains('btn')) return;

      if (e.target.textContent == '÷') { key = '/' }
      if (e.target.textContent == '×') { key = '*' }
      if (e.target.textContent == '·') { key = '.' }

      if (e.target.textContent !== '÷' &&
        e.target.textContent !== '×' &&
        e.target.textContent !== '·') {
        key = e.target.textContent;
      }
      callback(key);
    })
    return;
  },
  // функция присваивания значения переменной ввода
  line: (key) => {
    calc.inputLine = key;
    return;
  },
  // изменение размеров окна вывода
  outputWindow: (arr) => {
    if (arr.length > 8) {
      calc.out.style.fontSize = '3rem';
    }
    if (arr.length > 11) {
      calc.out.style.fontSize = '2rem';
    }
    if (arr.length > 16) {
      calc.out.style.fontSize = '1rem';
    }
    if (arr.length > 32) {
      calc.out.style.fontSize = '4rem';
      calc.strOut = 'Error';
    }
    return arr;
  },
  // объект селекторов кнопок (для css)
  digitSelect: {
    zero: document.querySelector('.btn.zero'),
    one: document.querySelector('.btn.one'),
    two: document.querySelector('.btn.two'),
    three: document.querySelector('.btn.three'),
    four: document.querySelector('.btn.four'),
    five: document.querySelector('.btn.five'),
    six: document.querySelector('.btn.six'),
    seven: document.querySelector('.btn.seven'),
    eight: document.querySelector('.btn.eight'),
    nine: document.querySelector('.btn.nine'),
    dot: document.querySelector('.btn.dot'),
  },
  // запятую в точку
  comma: () => {
    if (calc.inputLine == ',') {
      calc.inputLine = '.';
      return;
    }
  },
  // знак в равно
  equals: (key) => {
    if (calc.inputLine !== 'Enter' &&
      calc.arrA.length > 0 &&
      calc.sign[0] !== undefined &&
      calc.arrB.length > 0 &&
      calc.action.includes(key) &&
      calc.equalsCount === false) {

      console.log('знак в равно');
      calc.equalsCount = true;
      calc.inputLine = 'Enter';
      calc.enter = false;
      return;
    };
  },
  // набор нескольких нулей (убрать)
  doubleZero: (arr) => {
    if (arr[0] == '0' &&
      arr[1] == '0') {
      console.log('дабл зеро');

      arr.shift();
      calc.strOut = arr.join('');
    }
    if (arr.length == 1 &&
      arr[0] == '.') {
      console.log('точка и ноль впереди');

      arr.unshift('0');
      calc.strOut = arr.join('');
    }
  },
  // удалить по одной цифре справа налево
  backspace: () => {
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
    return;
  },
  // очистить всё
  clear: () => {
    if (calc.inputLine == 'ac' ||
      calc.inputLine == 'Delete' ||
      calc.inputLine == "Backspace" &&
      calc.arrA.length >= 0 &&
      calc.arrB.length >= 0 &&
      calc.numOfCalc > 0) {
      console.clear();
      console.log('очищено');
      calc.out.style.fontSize = '4rem';
      calc.borderOff();
      calc.arrA = []; // число 1
      calc.arrB = []; // число 2
      calc.sign = []; // знак операции
      calc.finish = false; //
      calc.equalsCount = false; //
      calc.numOfCalc = 0; //
      calc.enter = false; //
      calc.strOut = 0;
      return;
    };
  },
  // условия ввода
  termsOfEnter: (key) => {

    // смена знака
    if (calc.sign[0] === undefined) {
      calc.plusOrMinus(calc.arrA);
    } else {
      calc.plusOrMinus(calc.arrB);
    };

    // если нажата цифра
    if (calc.digit.includes(key)) {

      // if (calc.numOfCalc > 0 ||
      //   calc.equalsCount === true) {
      //   console.log('вычисления произведены');
      //   // calc.arrA = calc.inputLine.split('');
      //   calc.arrA = []; // первое число
      //   calc.sign = []; // знак операции
      //   calc.arrB = []; // второе число
      //   calc.finish = false;
      //   calc.strOut = calc.arrA.join('');
      // }

      // ввод первого числа
      if (calc.arrB.length == 0 &&
        calc.sign[0] === undefined) {
        console.log('ввод первого числа');

        if (calc.arrA.length < 32) {
          calc.arrA.push(calc.inputLine);
        }
        calc.duplicateDots(calc.arrA);
        calc.doubleZero(calc.arrA);
        calc.strOut = calc.arrA.join('');
      };

      // если и первое и второе числа заполнены и вычисления произведены
      if (calc.arrA.length > 0 &&
        calc.sign[0] !== undefined &&
        calc.arrB.length > 0 &&
        calc.finish === true &&
        calc.numOfCalc > 0 &&
        calc.equalsCount === true &&
        calc.enter === true) {
        console.log('вычисления произведены');

        calc.arrA = calc.inputLine.split('');
        calc.arrB = []; // второе число
        calc.sign = []; // знак операции
        calc.finish = false;
        calc.equalsCount = false;
        calc.numOfCalc = 0;
        calc.enter = false;
        calc.strOut = calc.arrA.join('');
      };

      // ввод второго числа
      if (calc.arrA.length > 0 &&
        calc.sign[0] !== undefined &&
        calc.finish === false &&
        calc.equalsCount === false) {
        console.log('ввод второго числа');

        calc.borderOff();

        if (calc.arrB.length < 32) {
          calc.arrB.push(calc.inputLine);
        }
        calc.duplicateDots(calc.arrB);
        calc.doubleZero(calc.arrB);
        calc.strOut = calc.arrB.join('');
      };

      // ввод второго числа повторно после вычислений
      if (calc.arrA.length > 0 &&
        calc.sign[0] !== undefined &&
        calc.arrB.length > 0 &&
        calc.finish === true &&
        calc.numOfCalc === 1 &&
        calc.equalsCount === true) {
        console.log('ввод второго числа повторно');

        calc.borderOff();

        calc.arrB = [];
        // calc.arrB = calc.arrA;
        // calc.arrB.length = 0;
        calc.numOfCalc = 0;
        calc.arrB = calc.inputLine.split('');
        // if (calc.arrB.length < 32) {
        //   calc.arrB.push(calc.inputLine);
        // }
        calc.duplicateDots(calc.arrB);
        calc.doubleZero(calc.arrB);
        calc.finish = false;
        calc.strOut = calc.arrB.join('');
        return;
      }

      // ввод другого второго числа
      if (calc.arrA.length > 0 &&
        calc.sign[0] !== undefined &&
        calc.finish === true &&
        calc.numOfCalc === 0 &&
        calc.equalsCount === false) {
        console.log('ввод другого второго числа');

        calc.borderOff();

        calc.arrB = [];
        if (calc.arrB.length < 32) {
          calc.arrB.push(calc.inputLine);
        }
        calc.duplicateDots(calc.arrB);
        calc.doubleZero(calc.arrB);
        calc.finish = false;
        calc.strOut = calc.arrB.join('');
      }

      // предупреждение о дроби
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
  // смена знака если нажата +/-
  plusOrMinus: (arr) => {
    if (calc.inputLine === '+/-') {
      console.log('инверсия числа');

      if (arr[0] !== '-') {
        arr.unshift('-');
        calc.strOut = arr.join('');
      } else {
        arr.shift();
        calc.strOut = arr.join('');
      }
    }
    return arr;
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

    // alert( parseFloat('12.3.4') ); // 12.3, произойдёт остановка чтения на второй точке
  },
  // сброс обводки
  borderOff: () => {
    calc.btnActive.forEach(element => {
      element.style.outline = 'rgb(255, 255, 255) none 0px';
      element.style.outlineOffset = '0px';
      element.style.filter = 'brightness(100%)';
    });
  },
  border: (key) => {
    if (calc.action.includes(key)) {
      // обводка кнопки введённого знака
      calc.borderOff();
      // задать стили кнопки
      calc.outline = '2px solid rgba(0, 0, 0, 1.0)';
      calc.outlineOffset = '-3px';

      switch (calc.sign[0]) {
        // case undefined:
        //   console.log('нет знака');
        //   btnActive.style.outline = 'rgb(255, 255, 255) none 0px';
        //   btnActive.style.outlineOffset = '0px';
        //   break;
        case '+':
          let plus = document.querySelector('.btn.plus');
          plus.style.outline = calc.outline;
          plus.style.outlineOffset = calc.outlineOffset;
          plus.style.filter = 'brightness(80%)';
          break;
        case '-':
          let minus = document.querySelector('.btn.minus');
          minus.style.outline = calc.outline;
          minus.style.outlineOffset = calc.outlineOffset;
          minus.style.filter = 'brightness(80%)';
          break;
        case '*':
          let multiply = document.querySelector('.btn.multiplied');
          multiply.style.outline = calc.outline;
          multiply.style.outlineOffset = calc.outlineOffset;
          multiply.style.filter = 'brightness(80%)';
          break;
        case '/':
          let divide = document.querySelector('.btn.division');
          divide.style.outline = calc.outline;
          divide.style.outlineOffset = calc.outlineOffset;
          divide.style.filter = 'brightness(80%)';
          break;
        default:
          console.log('default');
      };
      return;
    }
  },
  // операции
  operation: (key) => {
    if (calc.action.includes(key) &&
      calc.arrB.length === 0 ||
      calc.action.includes(key) &&
      calc.finish === true) {
      console.log(`ввод знака`);

      calc.sign[0] = key;
      console.log(`знак: ${calc.sign}`);

      // отображение знака операции:
      // calc.strOut = calc.sign;

      if (calc.arrA.length > 0 &&
        calc.sign.length > 0 &&
        calc.arrB.length > 0 &&
        calc.finish === true) {
        console.log('ввод второго числа повторно');

        calc.arrB = [];
        calc.arrB = calc.arrA;
        calc.numOfCalc = 0;
        return;
      };
    };
  },
  // вычисления
  calculations: (key) => {

    if (calc.equalsCount = false &&
      calc.inputLine === '=' ||
      calc.inputLine === 'Enter' ||
      calc.inputLine === '=') {
      console.log('вычисления');

      // if (calc.arrB.length == 0) { calc.arrB = calc.arrA };
      // if (calc.finish == true) { calc.arrB = calc.arrA };

      let a = calc.arrA.join('');
      let b = calc.arrB.join('');

      if (calc.arrA.length > 0 &&
        calc.arrB.length > 0 &&
        calc.sign[0] !== undefined) {

        switch (calc.sign[0]) {
          case '+':
            let plus = (+a) + (+b); // число
            let resPlus = calc.rounding(plus);
            calc.result = Array.from(String(resPlus));
            calc.arrA = calc.result;
            console.log(`сложение: ${calc.sign[0]}`);
            break;
          case '-':
            let minus = (+a) - (+b);
            let resMinus = calc.rounding(minus);
            calc.result = Array.from(String(resMinus));
            calc.arrA = calc.result;
            console.log(`вычитание: ${calc.sign[0]}`);
            break;
          case '*':
            let multiply = (+a) * (+b);
            let resMultiply = calc.rounding(multiply);
            calc.result = Array.from(String(resMultiply));
            calc.arrA = calc.result;
            console.log(`умножение: ${calc.sign[0]}`);
            break;
          case '/':
            if (calc.arrB[0] == 0 &&
              calc.arrB.length == 1) {
              calc.out.style.fontSize = '3.5rem';
              calc.strOut = 'Деление на 0';
              console.log('Деление на 0');
              calc.arrA = [];
              calc.arrB = [];
              calc.sign = [];
              return;
            }
            let divide = (+a) / (+b);
            let resDivide = calc.rounding(divide);
            calc.result = Array.from(String(resDivide));
            calc.arrA = calc.result;
            console.log(`деление: ${calc.sign[0]}`);
            break;
        };
      } else {
        calc.sign = [];
        console.log('введите число');
      }
      calc.finish = true;

      if (calc.action.includes(key) &&
        calc.inputLine === 'Enter') {
        calc.enter = false;
      } else { calc.enter = true; }

      calc.numOfCalc += 1;
      calc.strOut = calc.arrA.join('');

      if (calc.action.includes(key) &&
        calc.equalsCount === true) {
        console.log('присвоить знак');
        calc.sign[0] = key;
        calc.arrB = calc.arrA;
        calc.key(calc.border);
      };
      return;
    };
    return;
  },
  // процентные расчеты
  percentageCalc: (key) => {
    if (key === '%') {

      calc.numOfCalc += 1;

      console.log('процентные расчеты');
      if (calc.finish == true) { calc.arrB = calc.arrA };

      let a = calc.arrA.join('');
      let b = calc.arrB.join('');

      if (calc.arrA.length == 0 &&
        calc.arrB.length == 0 &&
        calc.sign[0] == undefined) {

        calc.strOut = '0';

      } else if (calc.arrA[0] == '-' &&
        calc.arrB.length == 0 &&
        calc.sign[0] == undefined) {

        calc.strOut = 'Error';
        console.log('Error');

      } else if (calc.arrA.length > 0 &&
        calc.arrB.length == 0 &&
        calc.sign[0] == undefined) {

        let percent = (+a) / (+100);
        calc.result = Array.from(String(percent));
        calc.arrA = calc.result;

      } else if (calc.arrA.length > 0 &&
        calc.arrB.length == 0 &&
        calc.sign[0] !== undefined) {

        calc.strOut = 'Error';
        console.log('Error');

      } else if (calc.arrA.length > 0 &&
        calc.arrB.length > 0 &&
        calc.sign[0] !== undefined &&
        calc.finish === false) {

        switch (calc.sign[0]) {
          case '+':
            let plus = ((+a / 100) * (+b)) + (+a);
            calc.result = Array.from(String(plus));
            calc.arrA = calc.result;
            console.log(`сложение процентов: ${calc.sign[0]}`);
            break;
          case '-':
            let minus = (+a) - ((+a / 100) * (+b));
            calc.result = Array.from(String(minus));
            calc.arrA = calc.result;
            console.log(`вычитание процентов: ${calc.sign[0]}`);
            break;
          case '*':
            let multiply = ((+a / 100) * (+b));
            calc.result = Array.from(String(multiply));
            calc.arrA = calc.result;
            console.log(`умножение процентов: ${calc.sign[0]}`);
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
            let divide = ((+a) / (+b / 100));
            calc.result = Array.from(String(divide));
            calc.arrA = calc.result;
            console.log(`деление процентов: ${calc.sign[0]}`);
            break;
        };
        calc.strOut = calc.arrA.join('');
      };
      return;
    };
    return;
  },
  // округления
  rounding: (res) => {

    console.log(`целое число? ${Number.isInteger(res)}`);
    if (Number.isInteger(res) === false) {

      console.log('округления');
      let numb = Number(res.toFixed(10));

      console.log(`numb: ${numb}`);
      console.log(`NaN: ${isNaN(numb)}`);
      console.log(`isFinite: ${isFinite(numb)}`);
      // console.log(`sInteger: ${Number.isInteger(numb)}`);
      console.log(`res: ${res}`);

      if (isNaN(numb) === false &&
        isFinite(numb) === true) {
        return numb;
      } else console.log('Error');
      // return res;
    };
    return res;
  },
  // окно вывода
  output: () => {
    calc.outputWindow(calc.arrA);
    calc.outputWindow(calc.arrB);
    calc.outputWindow(calc.result);

    if (calc.strOut === '') {
      calc.strOut = '0';
    };
    if (calc.strOut !== undefined ||
      calc.strOut !== null ||
      calc.strOut !== NaN) {

      calc.out.textContent = calc.strOut;
    };
    // calc.out.textContent = calc.strOut;
    return;
  },
  // лог
  log: (key) => {
    console.log('Начало логов');
    console.log(`key: ${key}`);
    console.log('inputLine: ' + calc.inputLine);
    console.log(calc.arrA);
    console.log(calc.sign);
    // console.log(calc.sign[0]);
    console.log(calc.arrB);
    console.log('строка вывода (strOut): ' + calc.strOut);
    if (calc.finish == true ||
      calc.numOfCalc > 0) {
      console.log(`результат: ${calc.strOut}`);
    };
    console.log(`finish: ${calc.finish}`);
    console.log(`numOfCalc: ${calc.numOfCalc}`);
    const styles = window.getComputedStyle(calc.out);
    // const styles = window.getComputedStyle(calc.btnActive);
    // console.log(styles.fontSize);
    // console.log(styles.outline);
    // console.log(styles.outlineOffset);
    // console.log(calc.btnActive);
    console.log(`equalsCount: ${calc.equalsCount}`);
    console.log(`enter: ${calc.enter}`);
    return;
  }
};
// вызовы
calc.key(calc.line);
calc.key(calc.comma);
calc.key(calc.equals);
// calc.key(calc.border);
calc.key(calc.backspace);
calc.key(calc.clear);
calc.key(calc.termsOfEnter);
calc.key(calc.operation);
calc.key(calc.calculations);
calc.key(calc.border);
calc.key(calc.percentageCalc);
calc.key(calc.output);
calc.key(calc.log);
//