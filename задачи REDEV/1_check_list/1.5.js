//1. Напиши функцию, которая проверяет, является ли число четным или нечетным.
function isEvenOrOdd(number) { }

console.log(isEvenOrOdd(4)); // Вывод: "Четное число"
console.log(isEvenOrOdd(7)); // Вывод: "Нечетное число"

//2. Напиши функцию, которая определяет, является ли число положительным, отрицательным или равным нулю. 

function checkNumber(number) { }

console.log(checkNumber(5)); // Вывод: "Положительное число"
console.log(checkNumber(-3)); // Вывод: "Отрицательное число"
console.log(checkNumber(0)); // Вывод: "Ноль"

//3. Напиши функцию, которая выводит большее из двух чисел.
function findGreaterNumber(number1, number2) { }

console.log(findGreaterNumber(5, 8)); // Вывод: 8
console.log(findGreaterNumber(10, 3)); // Вывод: 10
console.log(findGreaterNumber(7, 7)); // Вывод: "Числа равны"

//4. Напиши функцию, которая проверяет, попадает ли переданное число в заданный диапазон.
function isNumberInRange(number, min, max) { }

console.log(isNumberInRange(5, 1, 10)); // Вывод: true
console.log(isNumberInRange(15, 1, 10)); // Вывод: false
console.log(isNumberInRange(0, -5, 5)); // Вывод: true

//5. Напиши функцию, которая принимает на вход два числа и выводит в консоль их сумму, если они оба положительны, и их разность, если одно из чисел отрицательное.
function performOperation(num1, num2) { }

performOperation(5, 3); // Вывод: Сумма чисел: 8
performOperation(10, -3); // Вывод: Разность чисел: 13
performOperation(-2, 8); // Вывод: Разность чисел: -10

//6. Напиши функцию, которая принимает на вход число и выводит в консоль таблицу умножения для этого числа от 1 до 10.
function multiplicationTable(number) { }

multiplicationTable(5);

//7. Напиши функцию, которая принимает на вход число и возвращает его квадрат, если оно больше 10, и его куб, если оно меньше или равно 10.
function squareOrCube(number) { }

console.log(squareOrCube(5)); // Вывод: 125
console.log(squareOrCube(15)); // Вывод: 225
console.log(squareOrCube(10)); // Вывод: 1000

//8. Напиши функцию, которая принимает на вход два числа и возвращает их сумму, если оба числа положительны, и их произведение, если одно или оба числа отрицательные.
function sumOrProduct(num1, num2) { }

console.log(sumOrProduct(5, 3)); // Вывод: 8
console.log(sumOrProduct(-2, 8)); // Вывод: -16
console.log(sumOrProduct(10, -3)); // Вывод: -30
console.log(sumOrProduct(-4, -2)); // Вывод: 8
