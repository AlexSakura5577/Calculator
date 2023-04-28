// Calculator

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

// calc
const calc = {
  // ввод
  // inputLine: '',
  // экран вывода
  out: document.querySelector('.calc-screen p'),
  // кнопка (селектор)
  btn: document.querySelector('.buttons'),
  // цифры и точка
  digit: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'],
  // знаки для вычислений
  action: ['-', '+', '*', '/'],
  arrA: [], // первое число
  arrB: [], // второе число

  key: function myFunc(callback) {
    let key;
    event1 = window.addEventListener('keydown', (e) => {
      key = e.key;
      callback(key);
      // console.log(key);
    })
    event2 = calc.btn.addEventListener('click', (e) => {
      if (!e.target.classList.contains('btn')) return;
      key = e.target.textContent;
      callback(key);
      // console.log(key);
    })
    return;
  },

  // calc.arrA.push(key);
  // calc.output(calc.arrA);
  // console.log(calc.arrA);

  // str1: 
  // str2: 

  sign: function sign(key) {
    if (calc.action.includes(key)) {
      let sign = key;
      inputLine = key;
      calc.out.textContent = sign;
      console.log('inputLine: ' + inputLine);
    }
  },

  output: function output(arr) {
    strOut = arr.join('');
    calc.out.textContent = strOut;
  }, // окно вывода

};

// calc.key(key => console.log(key)) // key в консоль

// calc.key(key => {
//   // вот тут пиши дальше код который использует key
//   inputLine = key;
//   console.log('inputLine: ' + inputLine);
// })

// функция присваивания значения переменной ввода
function out2(key) {
  inputLine = key;
  console.log('inputLine: ' + inputLine);
};

// function sign(key) {
//   if (action.includes(key)) {
//     let sign = key;
//     inputLine = key;
//     out.textContent = sign;
//     console.log('inputLine: ' + inputLine);
//   }
// };
// вызов
// myFunc(out2);
// calc.key(out2);
// calc.key(sign);
calc.key(calc.sign);








/*
  clear: function clearAll() { }, // очистить всё
  delete: function deleteKey() { }, // очистка консоли и сброс клавишей delete
  backspace: function backspaceKey() { }, // удалить по одной цифре справа налево клавишей backspace
  comma: function commaKey() { }, // запятую в точку ru раскладка
  mouse: function mouseE() { }, // ввод мышкой
  keyboard: function keyboardE() { }, // ввод с клавиатуры
  calculations: function calculationsEnd() { }, // вычисления
*/

