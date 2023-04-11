let a = ''; // первое число
let b = ''; // второе число
let sign = ''; // знак операции
let finish = false; // 
// let keyNum;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', '*', '/'];

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
// нажата ac
document.querySelector('.ac').onclick = clearAll;

// ввод с клавиатуры:
window.addEventListener("keypress", numPad, false);
function numPad(event) {
    let keyNum = event.key;
    console.log("keyNum: " + keyNum);

    if (digit.includes(keyNum)) {
        if (b === '' && sign === '') {
            a += keyNum;
            console.log("a:" + a, "sign:" + sign, "b:" + b);
            out.textContent = a;
        }
        // если и первое и второе числа заполнены
        else if (a !== '' && b !== '' && finish) {
            b = keyNum;
            finish = false;
            out.textContent = b;
        }
        else {
            b += keyNum;
            out.textContent = b;
        }
        console.log("a:" + a, "sign:" + sign, "b:" + b);
        return;
    };
    // если нажата кнопка + - * /
    if (action.includes(keyNum)) {
        sign = keyNum;
        out.textContent = sign;
        console.log("a:" + a, "sign:" + sign, "b:" + b);
        return;
    };
    // если нажата =
    if (keyNum === '=' || keyNum === 'Enter') {
        if (b === '') b = a;
        switch (sign) {
            case '+':
                a = (+a) + (+b);
                break;
            case '-':
                a = (+a) - (+b);
                break;
            case '*':
                a = (+a) * (+b);
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
                break;
        }
        finish = true;
        out.textContent = a;
        console.log("a:" + a, "sign:" + sign, "b:" + b);
        return;
    };
};

// ввод мышкой:
document.querySelector('.buttons').onclick = (event) => {
    const key = event.target.textContent;
    console.log("keyMouse: " + key);
    if (!event.target.classList.contains('btn')) return;
    if (event.target.classList.contains('ac')) return;

    // out.textContent = '';

    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key;
            out.textContent = a;
        }
        // если и первое и второе числа заполнены
        else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        }
        else {
            b += key;
            out.textContent = b;
        }
        console.log("a:" + a, "sign:" + sign, "b:" + b);
        return;
    };
    // если нажата кнопка + - * /
    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.log("a:" + a, "sign:" + sign, "b:" + b);
        return;
    };
    // если нажата =
    if (key === '=') {
        if (b === '') b = a;
        switch (sign) {
            case '+':
                a = (+a) + (+b);
                break;
            case '-':
                a = (+a) - (+b);
                break;
            case '*':
                a = (+a) * (+b);
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
                break;
        }
        finish = true;
        out.textContent = a;
        console.log("a:" + a, "sign:" + sign, "b:" + b);
        return;
    };
    // если нажата +/-
    if (event.target.classList.contains('plus-minus') && b === '' && sign === '') {
        a = -1 * a;
        out.textContent = a;

    } else if (event.target.classList.contains('plus-minus') && a !== '') {
        b = -1 * b;
        if (finish === false)
            out.textContent = b;

    } else if (event.target.classList.contains('plus-minus') && a !== '' && b !== '' && finish) {
        out.textContent = a;
    }
    console.log("a:" + a, "sign:" + sign, "b:" + b);
    return;
};










