// Calculator

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

  key: function key() {
    let key;
    event1 = window.addEventListener('keydown', (e) => {
      key = e.key;
      console.log(key);
      return key;
    })
    event2 = btn.addEventListener('click', (e) => {
      key = e.target.textContent;
      console.log(key);
      return key;
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
    calc.key();
    // events = calc.key();
    // console.log(events);
    // console.log(calc.key());
    // calc.arrA.push(calc.key());
    // calc.output(calc.arrA);
    // console.log(calc.arrA);
  } // сообщение
};

// calc.key();
calc.message();





/*
  clear: function clearAll() { }, // очистить всё
  delete: function deleteKey() { }, // очистка консоли и сброс клавишей delete
  backspace: function backspaceKey() { }, // удалить по одной цифре справа налево клавишей backspace
  comma: function commaKey() { }, // запятую в точку ru раскладка
  mouse: function mouseE() { }, // ввод мышкой
  keyboard: function keyboardE() { }, // ввод с клавиатуры
  calculations: function calculationsEnd() { }, // вычисления
*/

