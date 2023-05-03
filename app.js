// доработка №7

let a = ''; // первое число
let arrA = [];
console.log(arrA);
arrA = a.split(''); // массив переменной a
let b = ''; // второе число
let arrB = [];
arrB = b.split(''); // массив переменной b
let sign = ''; // знак операции
let finish = false; // 
// console.log('finish: ' + finish);
// let keyNum;
// let doubleComma;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', '*', '/'];

// экран
const out = document.querySelector('.calc-screen p');

const styles = window.getComputedStyle(out);
console.log('fontSize x4: ' + styles.fontSize);

// if (arrA.length > 8) {
//   out.style.fontSize = '3rem';
//   console.log('fontSize > 8: ' + styles.fontSize);
// }
// if (arrA.length > 11) {
//   out.style.fontSize = '2rem';
//   console.log('fontSize > 11: ' + styles.fontSize);
// }
// if (arrA.length > 16) {
//   out.style.fontSize = '1rem';
//   console.log('fontSize > 16: ' + styles.fontSize);
// }
// if (arrA.length > 32) {
//   console.log('fontSize > 32: Error');
// }



// очистить всё
function clearAll() {
  a = ''; // первое число
  b = ''; // второе число
  sign = ''; // знак операции
  finish = false; //
  console.log('finish: ' + finish);
  out.textContent = 0;
  arrA = [];
  arrB = [];
  console.clear();
}
// нажата ac
document.querySelector('.ac').onclick = clearAll;

// очистка консоли и сброс клавишей delete:
window.addEventListener('keydown', function (event) {
  const key = event.key;
  if (key === "Delete") {
    clearAll()
    console.log('DELETE was pressed');
    return;
  }
});

// запятую в точку ru раскладка
window.addEventListener('keydown', function (event) {
  let comma = event.key;
  if (comma === ",") {
    comma = ".";
    a += comma;
    out.textContent = a;
    console.log("a:" + a, "sign:" + sign, "b:" + b, 'finish: ' + finish);
    return;
  }
});

// несколько запятых подряд
// doubleComma = arrA.filter(item => item === '.').length;


// удалить по одной цифре справа налево клавишей backspace:
window.addEventListener('keydown', function (event) {
  const key = event.key;
  if (key === "Backspace" && a !== '' && b === '' && finish === false) {
    let strNew = arrA.splice(arrA.length - 1, 1);
    a = arrA.join('');
    out.textContent = a;
    console.log("strNew:" + strNew);
    console.log("a:" + a);
    console.log(arrA);
    console.log("a:" + a, "sign:" + sign, "b:" + b, 'finish: ' + finish);
  }
  if (key === "Backspace" && a !== '' && b !== '' && finish === false) {
    let strNew = arrB.splice(arrB.length - 1, 1);
    b = arrB.join('');
    out.textContent = b;
    console.log("strNew:" + strNew);
    console.log("b:" + b);
    console.log(arrB);
    console.log("a:" + a, "sign:" + sign, "b:" + b, 'finish: ' + finish);
  }
  if (key === "Backspace" && a !== '' && b !== '' && finish === true) {
    clearAll()
    console.log('BACKSPACE was pressed');
  }
  return;
});

// ввод с клавиатуры:
window.addEventListener("keydown", numPad, false);
function numPad(event) {
  const keyNum = event.key;
  // const keyCode = event.code;
  // console.log("keyNum: " + keyNum);
  // console.log("keyCode: " + keyCode);

  // arrA = a.split('');
  // arrA.push(a);
  // arrA = a.split('');
  let len = arrA.length;
  console.log('кол-во элементов: ' + len);

  if (arrA.length > 7) {
    out.style.fontSize = '3rem';
    console.log('fontSize > 8: ' + styles.fontSize);
  }
  if (arrA.length > 10) {
    out.style.fontSize = '2rem';
    console.log('fontSize > 11: ' + styles.fontSize);
  }
  if (arrA.length > 15) {
    out.style.fontSize = '1rem';
    console.log('fontSize > 16: ' + styles.fontSize);
  }
  if (arrA.length > 31) {
    console.log('fontSize > 32: Error');
    out.style.fontSize = '4rem';
    out.textContent = 'Error';
    return;
  }

  if (digit.includes(keyNum)) {
    if (b === '' && sign === '') {
      arrA = a.split('');
      if (arrA[1] === '.') {
        console.log('ввод дробного числа');
      }

      a += keyNum;
      arrA = a.split('');
      console.log(arrA);
      console.log('массив А: ' + arrA);
      // console.log('5-й элемент: ' + arrA[4]);
      // console.log("a:" + a, "sign:" + sign, "b:" + b, 'finish: ' + finish);

      // !! точка может быть в любом месте ввода, а не только на 2-м
      if (a !== '' && arrA.includes('.')) {
        console.log('ввод дробного числа');
      };
      if (a === '00' && arrA[1] !== '.') {
        // a = 0;
        clearAll();
        console.log('набор нескольких нулей');
        // out.textContent = 0;
        return;
      };

      out.textContent = a;
    }
    // если и первое и второе числа заполнены и вычисления произведены
    else if (a !== '' && b !== '' && finish) {
      // b = keyNum;
      // arrB = b.split('');
      // finish = false;
      // console.log('finish: ' + finish);
      // out.textContent = b;

      a = keyNum;
      arrA = a.split('');
      b = ''; // второе число
      sign = ''; // знак операции
      finish = false;
      console.log('finish: ' + finish);
      out.textContent = a;
    }
    else {
      b += keyNum;
      arrB = b.split('');
      console.log(arrB);
      out.textContent = b;
    }
    console.log("a:" + a, "sign:" + sign, "b:" + b, 'finish: ' + finish);
    return;
  };
  // если нажата кнопка + - * /
  if (action.includes(keyNum)) {
    sign = keyNum;
    out.textContent = sign;
    console.log("a:" + a, "sign:" + sign, "b:" + b, 'finish: ' + finish);
    return;
  };
  // вычисления! если нажата =
  if (keyNum === '=' || keyNum === 'Enter') {
    if (b === '') b = a;
    switch (sign) {
      case '+':
        a = (+a) + (+b);
        arrA = a;
        console.log('сложение: ' + arrA);
        break;
      case '-':
        a = (+a) - (+b);
        arrA = a;
        console.log('вычитание: ' + arrA);
        break;
      case '*':
        a = (+a) * (+b);
        arrA = a;
        console.log('умножение: ' + arrA);
        break;
      case '/':
        if (b === '0') {
          out.textContent = 'Деление на 0';
          a = '';
          b = '';
          sign = '';
          return;
        }
        a = (+a) / (+b);
        arrA = a;
        console.log('деление: ' + arrA);
        break;
    }
    finish = true;
    console.log('finish: ' + finish);
    out.textContent = a;
    console.log('arrA: ' + arrA);
    console.log("a:" + a, "sign:" + sign, "b:" + b, 'finish: ' + finish);
    return;
  };
  // если нажата клавиша процент %
  if (keyNum === '%' && event.shiftKey == true && a === '' && b === '' && sign === '') {
    console.log("одновременное нажатие: Shift + %");
    out.textContent = 0;
  } else if (keyNum === '%' && event.shiftKey == true && a !== '' && b === '' && sign === '') {
    console.log("одновременное нажатие: Shift + %");
    a = (+a) / (+100);
    out.textContent = a;
  } else if (keyNum === '%' && event.shiftKey == true && a !== '' && b === '' && sign !== '') {
    console.log("одновременное нажатие: Shift + %");
    out.textContent = "Ошибка";
  } else if (keyNum === '%' && event.shiftKey == true && a !== '' && b !== '' && sign !== '' && finish === false) {
    console.log("одновременное нажатие: Shift + %");
    switch (sign) {
      case '+':
        a = ((+a / 100) * (+b)) + (+a);
        break;
      case '-':
        a = (+a) - ((+a / 100) * (+b));
        break;
      case '*':
        a = ((+a / 100) * (+b));
        break;
      case '/':
        if (b === '0') {
          out.textContent = 'Деление на 0';
          a = '';
          b = '';
          sign = '';
          return;
        }
        a = ((+a) / (+b / 100));
        break;
    }
    finish = true;
    console.log('finish: ' + finish);
    out.textContent = a;
    return;
  };
  // console.log("a:" + a, "sign:" + sign, "b:" + b, 'finish: ' + finish);
  return;
};

// ввод мышкой:
document.querySelector('.buttons').onclick = (event) => {
  const key = event.target.textContent;
  if (!event.target.classList.contains('btn')) return;
  if (event.target.classList.contains('ac')) return;
  console.log("keyMouse: " + key);

  if (arrA.length > 8) {
    out.style.fontSize = '3rem';
    console.log('fontSize > 8: ' + styles.fontSize);
  }
  if (arrA.length > 11) {
    out.style.fontSize = '2rem';
    console.log('fontSize > 11: ' + styles.fontSize);
  }
  if (arrA.length > 16) {
    out.style.fontSize = '1rem';
    console.log('fontSize > 16: ' + styles.fontSize);
  }
  if (arrA.length > 32) {
    console.log('fontSize > 32: Error');
    out.style.fontSize = '4rem';
    out.textContent = 'Error';
    return;
  }

  console.log(arrA);
  console.log('длина массива: ' + arrA.length);
  let doubleComma = arrA.filter(item => item === '.').length;
  // несколько запятых подряд
  console.log('кол-во точек: ' + doubleComma);
  // получить индекс дубля точки
  let commaIndex = arrA.indexOf('.', 0);
  console.log('индекс точки: ' + commaIndex);
  let firstComma = commaIndex;
  console.log('первая точка: ' + firstComma);
  // удалить дубль и присвоить массиву значение
  for (let i = 0; i <= doubleComma - 1; i++) {
    // получить индекс дубля точки
    let commaIndex = arrA.indexOf('.', 0);
    arrA.splice(commaIndex, 1);
  }
  arrA.splice(firstComma, 0, '.');
  console.log(arrA);
  console.log('длина массива: ' + arrA.length);

  a = arrA.join('');
  out.textContent = a;

  // если нажата цифра
  if (digit.includes(key)) {
    // 
    if (b === '' && sign === '') {

      a += key;
      arrA = a.split('');
      console.log(arrA);
      console.log('массив А: ' + arrA);
      // console.log('5-й элемент: ' + arrA[4]);

      // !! точка может быть в любом месте ввода, а не только на 2-м
      if (a !== '' && arrA.includes('.')) {
        console.log('ввод дробного числа');
      };
      // набор нескольких нулей
      if (a === '00' && arrA[1] !== '.') {
        // a = 0;
        clearAll();
        console.log('набор нескольких нулей');
        // out.textContent = 0;
        return;
      };

      out.textContent = a;
    }
    // если и первое и второе числа заполнены и вычисления произведены
    else if (a !== '' && b !== '' && finish) {
      // b = key;
      // arrB = b.split('');
      // finish = false;
      // console.log('finish: ' + finish);
      // out.textContent = b;

      a = key;
      arrA = a.split('');
      b = ''; // второе число
      sign = ''; // знак операции
      finish = false;
      console.log('finish: ' + finish);
      out.textContent = a;
    }
    else {
      b += key;
      arrB = b.split('');
      console.log(arrB);
      out.textContent = b;
    }
    console.log("a:" + a, "sign:" + sign, "b:" + b, 'finish: ' + finish);
    return;
  };
  // если нажата кнопка + - * / (знак операции)
  if (action.includes(key)) {
    sign = key;
    out.textContent = sign;
    console.log("a:" + a, "sign:" + sign, "b:" + b, 'finish: ' + finish);
    return;
  };
  // если нажата = (вычисления)
  if (key === '=') {
    if (b === '') b = a;
    switch (sign) {
      case '+':
        a = (+a) + (+b);
        arrA = a;
        console.log('сложение: ' + arrA);
        break;
      case '-':
        a = (+a) - (+b);
        arrA = a;
        console.log('вычитание: ' + arrA);
        break;
      case '*':
        a = (+a) * (+b);
        arrA = a;
        console.log('умножение: ' + arrA);
        break;
      case '/':
        if (b === '0') {
          out.textContent = 'Деление на 0';
          a = '';
          b = '';
          sign = '';
          return;
        }
        a = (+a) / (+b);
        arrA = a;
        console.log('деление: ' + arrA);
        break;
    }

    // arrA = a.split('');
    // console.log(arrA);

    finish = true;
    console.log('finish: ' + finish);
    out.textContent = a;
    // arrA = a.split('');

    // arrA = a;

    console.log('arrA: ' + arrA);
    console.log("a:" + a, "sign:" + sign, "b:" + b, 'finish: ' + finish);

    // if (finish === true) {
    //     a = out.textContent;
    //     arrA = a.split('');
    //     console.log(arrA);
    //     return;
    // }

    return;
  };
  // если нажата +/- (смена знака)
  if (event.target.classList.contains('plus-minus') && a !== '' && b === '' && sign === '') {
    a = -1 * a;
    out.textContent = a;
  } else if (event.target.classList.contains('plus-minus') && a !== '' && b !== '' && finish === false) {
    b = -1 * b;
    out.textContent = b;
  } else if (event.target.classList.contains('plus-minus') && a !== '' && b !== '' && finish) {
    a = -1 * a;
    out.textContent = a;
    console.log("a:" + a, "sign:" + sign, "b:" + b, 'finish: ' + finish);
    return;
  };
  // если нажата клавиша процент %
  if (event.target.classList.contains('percent') && a === '' && b === '' && sign === '') {
    out.textContent = 0;
  } else if (event.target.classList.contains('percent') && a !== '' && b === '' && sign === '') {
    a = (+a) / (+100);
    out.textContent = a;
  } else if (event.target.classList.contains('percent') && a !== '' && b === '' && sign !== '') {
    out.textContent = "Ошибка";
  } else if (event.target.classList.contains('percent') && a !== '' && b !== '' && sign !== '' && finish === false) {
    switch (sign) {
      case '+':
        a = ((+a / 100) * (+b)) + (+a);
        break;
      case '-':
        a = (+a) - ((+a / 100) * (+b));
        break;
      case '*':
        a = ((+a / 100) * (+b));
        break;
      case '/':
        if (b === '0') {
          out.textContent = 'Деление на 0';
          a = '';
          b = '';
          sign = '';
          return;
        }
        a = ((+a) / (+b / 100));
        break;
    }
    finish = true;
    console.log('finish: ' + finish);
    out.textContent = a;
    return;
  };
  console.log("a:" + a, "sign:" + sign, "b:" + b, 'finish: ' + finish);
  return;
};










// СОБЫТИЯ КЛАВИАТУРЫ:
// window.addEventListener("keydown", dealWithKeyboard, false);
// window.addEventListener("keypress", dealWithKeyboard, false);
// window.addEventListener("keyup", dealWithKeyboard, false);

// function dealWithKeyboard(event) {
// console.log("key: " + event.key);
//     console.log("code: " + event.code);
//     console.log("keyCode: " + event.keyCode);
//     console.log("charCode: " + event.charCode);
//     console.log("ctrlKey: " + event.ctrlKey);
//     console.log("altKey: " + event.altKey);
//     console.log("shiftKey: " + event.shiftKey);
//     console.log("metaKey: " + event.metaKey);
//     console.log("type: " + event.type);
//     console.log(event);
// };








