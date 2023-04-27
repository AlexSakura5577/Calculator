// Calculator
inputLine = '';
// цифры и точка
const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
// знаки для вычислений
const action = ['-', '+', '*', '/'];
// экран вывода
const out = document.querySelector('.calc-screen p');
// кнопка (селектор)
const btn = document.querySelector('.buttons')

// calc
const calc = {

  arrA: [], // первое число
  arrB: [], // второе число

  key: function myFunc(callback) {
    let key;
    event1 = window.addEventListener('keydown', (e) => {
      key = e.key;
      callback(key);
      // console.log(key);
    })
    event2 = btn.addEventListener('click', (e) => {
      key = e.target.textContent;
      callback(key);
      // console.log(key);
    })
    return;
  },

  // key: window.addEventListener('keydown', (e) => {
  //   let key = e.key;
  //   return;
  // }),

  // key: btn.addEventListener('click', (e) => {
  //   let key = e.target.textContent;
  //   return;
  // }),

  // calc.arrA.push(key);
  // calc.output(calc.arrA);
  // console.log(calc.arrA);

  // str1: 

  // str2: 

  output: function output(arr) {
    strOut = arr.join('');
    out.textContent = strOut;
  }, // окно вывода


  message: function consoleMessage() {
    // calc.key();
    // events = calc.key();
    // console.log(events);
    // console.log(calc.key());
    // calc.arrA.push(calc.key());
    // calc.output(calc.arrA);
    // console.log(calc.arrA);
  }, // сообщение


};

// inputLine = '';
// console.log('inputLine: ' + inputLine);
// calc.key();
// calc.message();
// calc.key(key => console.log(key)) // key в консоль
// calc.key(key => inputLine = key);
// console.log(inputLine);
// calc.key(key => console.log(key))

// calc.key(key => {
//   // вот тут пиши дальше код который использует key
//   inputLine = key;
//   console.log('inputLine: ' + inputLine);
// })

function out2(key) {
  inputLine = key;
  console.log('inputLine: ' + inputLine);
}
// myFunc(out2);
calc.key(out2);



/*
  clear: function clearAll() { }, // очистить всё
  delete: function deleteKey() { }, // очистка консоли и сброс клавишей delete
  backspace: function backspaceKey() { }, // удалить по одной цифре справа налево клавишей backspace
  comma: function commaKey() { }, // запятую в точку ru раскладка
  mouse: function mouseE() { }, // ввод мышкой
  keyboard: function keyboardE() { }, // ввод с клавиатуры
  calculations: function calculationsEnd() { }, // вычисления
*/

