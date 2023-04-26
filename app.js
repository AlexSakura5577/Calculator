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

  key: window.addEventListener('keydown', (e) => {
    let key = e.key;
    calc.arrA.push(key);
    calc.output(calc.arrA);
    console.log(calc.arrA);
    return;
  }),

  key: btn.addEventListener('click', (e) => {
    let key = e.target.textContent;
    calc.arrA.push(key);
    calc.output(calc.arrA);
    console.log(calc.arrA);
    return;
  }),

  // str1: 

  // str2: 

  output: function output(arr) {
    strOut = arr.join('');
    out.textContent = strOut;
  }, // окно вывода


  // message: function consoleMessage() {
  //   console.log('клик по кнопке');
  // } // сообщение
};



/*
  clear: function clearAll() { }, // очистить всё
  delete: function deleteKey() { }, // очистка консоли и сброс клавишей delete
  backspace: function backspaceKey() { }, // удалить по одной цифре справа налево клавишей backspace
  comma: function commaKey() { }, // запятую в точку ru раскладка
  mouse: function mouseE() { }, // ввод мышкой
  keyboard: function keyboardE() { }, // ввод с клавиатуры
  calculations: function calculationsEnd() { }, // вычисления
*/

