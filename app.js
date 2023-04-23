// calc
const calc = {
    arrA: [], // первое число
    arrB: [], // второе число
    clear: function clearAll() { }, // очистить всё
    delete: function deleteKey() { }, // очистка консоли и сброс клавишей delete
    backspace: function backspaceKey() { }, // удалить по одной цифре справа налево клавишей backspace
    comma: function commaKey() { }, // запятую в точку ru раскладка
    mouse: function mouseE() { }, // ввод мышкой
    keyboard: function keyboardE() { }, // ввод с клавиатуры
    calculations: function calculationsEnd() { }, // вычисления
};
// цифры и точка
const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
// знаки для вычислений
const action = ['-', '+', '*', '/'];
// экран вывода
const out = document.querySelector('.calc-screen p');
// const paragraph = document.querySelector('.pole_ebanoe_blyat');
const buttons = document.querySelector('.buttons');

window.addEventListener('keydown', (e) => {
  changeParagraph(e.key)
})

buttons.addEventListener('click', (e) => {
  changeParagraph(e.target.innerText)
})

const changeParagraph = (key) => {
  if (!isNaN(key)){
    out.innerText += key;
  }
}
