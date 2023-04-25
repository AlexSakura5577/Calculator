

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



  key: window.addEventListener('keydown', (e) => {
    let key = e.key;
    // changeParagraph(e.key)
    calc.arrA.push(key);
    calc.output();
    // out.textContent = key;
    console.log(calc.arrA);
  }),

  key: btn.addEventListener('click', (e) => {
    let key = e.target.textContent;
    // changeParagraph(e.target.innerText)
    // out.textContent = key;
    calc.arrA.push(key);
    console.log(calc.arrA);
  }),

  arrA: [], // первое число
  arrB: [], // второе число

  clear: function clearAll() { }, // очистить всё
  delete: function deleteKey() { }, // очистка консоли и сброс клавишей delete
  backspace: function backspaceKey() { }, // удалить по одной цифре справа налево клавишей backspace
  comma: function commaKey() { }, // запятую в точку ru раскладка
  mouse: function mouseE() { }, // ввод мышкой
  keyboard: function keyboardE() { }, // ввод с клавиатуры
  calculations: function calculationsEnd() { }, // вычисления
  output: function outputWin() {
    out.textContent = key;
  }, // окно вывода
  message: function consoleMessage() {
    console.log('клик по кнопке');
  } // сообщение
};




