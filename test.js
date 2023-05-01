
// удалить дубли точки
let arr = [0, '.', '.', '.', '.', '.', '.', '.', 3]
// let arr = [0, 2, '.', '.', 5, '.', 4, '.', '.', '.', 3]
// let arr = [0, '.', '.', '.', 5, 3, 4, '.', 3]
// let arr = ['.', '.', '.', 5, '.', 4, '.', '.', '.', 3]
// let arr = ['.', '.', '.', 5,  4,  3]
// let arr = ['.', '.',]
// let arr = ['.',]
// let arr = [0, '.',]
console.log(arr);
console.log('длина массива: ' + arr.length);
let doubleComma = arr.filter(item => item === '.').length;
// несколько запятых подряд
console.log('кол-во точек: ' + doubleComma);
// получить индекс дубля точки
let commaIndex = arr.indexOf('.', 0);
console.log('индекс точки: ' + commaIndex);
let firstComma = commaIndex;
console.log('первая точка: ' + firstComma);
// удалить дубль и присвоить массиву значение
for (let i = 0; i <= doubleComma -1; i++) {
    // получить индекс дубля точки
    let commaIndex = arr.indexOf('.', 0);
    arr.splice(commaIndex, 1);
}
arr.splice(firstComma, 0, '.');
console.log(arr);
console.log('длина массива: ' + arr.length);





// удаляет все дубли (не подходит)
// arr = arr.filter(item => item != '.')

// удаляет все дубли (не подходит)
// const chars = ['A', 'B', 'A', 'C', 'B'];
// const chars = [0, '.', '.', 3, '.', '.', 5, '.', 3];
// console.log(chars);
// const uniqueChars = [...new Set(chars)];
// console.log(uniqueChars);


