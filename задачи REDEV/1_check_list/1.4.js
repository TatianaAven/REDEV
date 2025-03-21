//*1. Выведи в консоль числа от 1 до 100.
for (let a = 1; a < 101; a++) {
	console.log(a);
}

//*2. Выведи в консоль числа от 11 до 33.
for (let b = 11; b < 34; b++) {
	console.log(b);
}

//*3. Выведи в консоль все целые числа от 10 до 1 в обратном порядке:
for (let c = 10; c > 0; c--) {
	console.log(c);
	if (c == 1) {
		break
	}
}

//*4. Выведи столбец четных чисел в промежутке от 0 до 100.
for (let d = 0; d <= 100; d++) {
	if (d % 2 !== 0) {
		continue
	}
	console.log(d);
}

//*5. Выведи в консоль таблицу умножения на 5.
/*
5 x 1 = 5
5 x 2 = 10
…
5 x 10 = 50
*/
let num = 5;
for (let i = 1; i <= 10; i++) {
	console.log(num + ' х ' + i + ' = ' + (num * i));
}

//*6. С помощью цикла найди сумму чисел от 1 до 100.
let sum = 0;
for (let i = 1; i <= 100; i++) {
	sum += i
}
console.log(sum);

//7. Напиши switch, который проверит значение переменной `a` и выведет в консоль соответствующее сообщение`а равен 1`, `а равен 2`, `а равен 3`, `а не равен ничего из перечисленого`.

//8. Напиши `switch` который принимает на вход число от 1 до 7 и выводит в консоль соответствующий день недели(1 - понедельник, 2 - вторник и т.д.):

//9. Напиши`switch`, который принимает на вход символ латинского алфавита и выводит в консоль его порядковый номер(A - 1, B - 2 и т.д.)

//10. Напиши`switch`, который принимает на вход число от 1 до 12 и выводит в консоль соответствующее ему время года (зима, лето, осень, весна) ** (потренируй объедине́ние case -ов)**