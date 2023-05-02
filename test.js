
// переполнение экрана
// let arr = [0, 1, 2, 3, 4, 5, 6, 7,]
// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5, 6, 7, 8,5, 6, 7, 8, 9, 2, 3, 4,5, 6, 7, 8, 9, 2, 3]
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5, 6, 7, 8,5, 6, 7, 8, 9, 2, 3, 4,5, 6, 7, 8, 9, 2, 3, 3, 3]
console.log('длина массива: ' + arr.length);

// изменение окна вывода
let outSize = document.querySelector('.calc-screen p');

const styles = window.getComputedStyle(outSize);
console.log('fontSize x4: ' + styles.fontSize);

if (arr.length > 8) {
    outSize.style.fontSize = '3rem';
    console.log('fontSize > 8: ' + styles.fontSize);
}
if (arr.length > 11) {
    outSize.style.fontSize = '2rem';
    console.log('fontSize > 11: ' + styles.fontSize);
}
if (arr.length > 16) {
    outSize.style.fontSize = '1rem';
    console.log('fontSize > 16: ' + styles.fontSize);
}
if (arr.length > 32) {
    console.log('fontSize > 32: Error');
    out.style.fontSize = '4rem';
    out.textContent = 'Error';
    return;
}

// экран
const out = document.querySelector('.calc-screen p');
out.textContent = arr.join('')



// удалить дубли точки
// let arr = [0, '.', '.', '.', '.', '.', '.', '.', 3]
// let arr = [0, 2, '.', '.', 5, '.', 4, '.', '.', '.', 3]
// let arr = [0, '.', '.', '.', 5, 3, 4, '.', 3]
// let arr = ['.', '.', '.', 5, '.', 4, '.', '.', '.', 3]
// let arr = ['.', '.', '.', 5,  4,  3]
// let arr = ['.', '.',]
// let arr = ['.',]
// let arr = [0, '.',]
// console.log(arr);
// console.log('длина массива: ' + arr.length);
// let doubleComma = arr.filter(item => item === '.').length;
// // несколько запятых подряд
// console.log('кол-во точек: ' + doubleComma);
// // получить индекс дубля точки
// let commaIndex = arr.indexOf('.', 0);
// console.log('индекс точки: ' + commaIndex);
// let firstComma = commaIndex;
// console.log('первая точка: ' + firstComma);
// // удалить дубль и присвоить массиву значение
// for (let i = 0; i <= doubleComma -1; i++) {
//     // получить индекс дубля точки
//     let commaIndex = arr.indexOf('.', 0);
//     arr.splice(commaIndex, 1);
// }
// arr.splice(firstComma, 0, '.');
// console.log(arr);
// console.log('длина массива: ' + arr.length);

// let arr = [0, 2, '.', '.', 5, '.', 4, '.', '.', '.', 3];

// альтернативный код 1:
// let count = 0;
// let firstIndex;
// let new_array = arr.reduce((acc, v, i) => {
//     const isDot = v === '.';
//     if (isDot) {
//         if (!count) firstIndex = i;
//         ++count;
//     }
//     if (v !== '.' || count === 1) {
//         acc.push(v);
//     }
//     return acc;
// }, []);
// console.log(new_array);

// альтернативный код 2:
// let arr = [0, 2, '.', '.', 5, '.', 4, '.', '.', '.', 3];
// console.log(arr);

// let firstIndex = arr.findIndex(el => el === '.')
// let res = arr.filter(el => el !== '.')
// res.splice(firstIndex, 0, '.')
// console.log(res)

// альтернативный код 3:
// function getStr(arr) {
//     let firstIndex = arr.findIndex(el => el === '.');
//     let res = arr.filter((el, i) => el !== '.' || i === firstIndex);
//     return res;
// }

// getStr(arr);

