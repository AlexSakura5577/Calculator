let a = ''; // первое число
let b = ''; // второе число
let sign = ''; // знак операции
let finish = false; // 

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/'];

// экран
const out = document.querySelector('.calc-screen p');

// очистить всё
function clearAll() {
    a = ''; // первое число
    b = ''; // второе число
    sign = ''; // знак операции
    finish = false; //
    out.textContent = 0;
}
