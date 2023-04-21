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

// клик мышкой
// document.querySelector('.buttons').onclick = (event) => {
//     let key = event.target.textContent;
//     console.log("keyMouse: " + key);
// };
// ввод с клавиатуры
window.addEventListener("keydown", numPad, false);
function numPad(event) {
    const key = event.key;
    console.log("key: " + key);
};
