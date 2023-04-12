let a = ''; // первое число
let arrA = a.split(''); // массив переменной a
let b = ''; // второе число
let arrB = b.split(''); // массив переменной b
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

// удалить по одной цифре справа налево клавишей backspace:
console.log(arrA);
window.addEventListener('keydown', function (event) {
    const key = event.key;
    if (key === "Backspace" && a !== '' && b === '' && finish === false) {
        let strNew = arrA.splice(arrA.length - 1, 1);
        a = arrA.join('');
        out.textContent = a;
        console.log("strNew:" + strNew);
        console.log("a:" + a);
        console.log(arrA);
        console.log("a:" + a, "sign:" + sign, "b:" + b);
    }
    if (key === "Backspace" && a !== '' && b !== '' && finish === false) {
        let strNew = arrB.splice(arrB.length - 1, 1);
        b = arrB.join('');
        out.textContent = b;
        console.log("strNew:" + strNew);
        console.log("b:" + b);
        console.log(arrB);
        console.log("a:" + a, "sign:" + sign, "b:" + b);
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
    console.log("keyNum: " + keyNum);

    if (digit.includes(keyNum)) {
        if (b === '' && sign === '') {
            a += keyNum;
            arrA = a.split('');
            console.log("a:" + a, "sign:" + sign, "b:" + b);
            out.textContent = a;
        }
        // если и первое и второе числа заполнены
        else if (a !== '' && b !== '' && finish) {
            b = keyNum;
            arrB = b.split('');
            finish = false;
            out.textContent = b;
        }
        else {
            b += keyNum;
            arrB = b.split('');
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
    // вычисления! если нажата =
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
            arrA = a.split('');
            out.textContent = a;
        }
        // если и первое и второе числа заполнены
        else if (a !== '' && b !== '' && finish) {
            b = key;
            arrB = b.split('');
            finish = false;
            out.textContent = b;
        }
        else {
            b += key;
            arrB = b.split('');
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
    if (event.target.classList.contains('plus-minus') && a !== '' && b === '' && sign === '') {
        a = -1 * a;
        // arrA = a.split('');
        out.textContent = a;

    } else if (event.target.classList.contains('plus-minus') && a !== '' && b !== '' && finish === false) {
        b = -1 * b;
        // arrB = b.split('');
        out.textContent = b;

    } else if (event.target.classList.contains('plus-minus') && a !== '' && b !== '' && finish) {
        a = -1 * a;
        // arrA = a.split('');
        out.textContent = a;
    }
    console.log("a:" + a, "sign:" + sign, "b:" + b);
    return;
};











