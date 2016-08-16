/*
1. Есть одномерный массив из 10 элементов (созданный вручную или посредством нашей функции rand).
Обойти массив (т.е. просто вывести arr[i])
a) из начала в конец;
б) из конца в начало.

2. Для того же самого массива вывести каждый второй элемент. 
пример: [10,11,12,13,14,15,16,17]
выведет 11, 13, 15, 17

3. Сделать то-же самое (пункт 2) в обратном порядке, т.е. из конца в начало.

4. Напишите код, который определяет, все ли элементы массива различны.
*/

var arr = [10,11,12,13,14,15,16,17];
console.log(arr);
var reverceArr = [];
var arr2 = [];
var currentValue = arr[0];
for(i = 0; i < arr.length; i++) {	
	if (i % 2 !=0 ) {
		reverceArr.push(arr[i]);
		arr2.push(arr[i]);		
	}	
	
}

console.log(arr2);
reverceArr.reverse();
console.log(reverceArr);

var arr2 = arr.reverse();
console.log(arr2);

var val = arr[0];
console.log(val);


for (j = 1; j < arr.length; j++) {  
	if (arr[j] === val) {
		console.log('same');
		break;
	} else {
		console.log('diff');
		break;
	}
}


/*
ЗАДАЧА:
Реализовать алгоритм. Дано два массива чисел с индексами от 0 до N, 
необходимо вывести на экран все числа, которые одновременно присутствуют в обоих массивах.

РЕШЕНИЕ: (примерный алгоритм, писал не сам, с просторов интернета)
Нужно сравнить каждое значение массива 1 с каждым значением массива 2. 
Т.е. сначала берем первый элемент массива 1 и сравниваем его со значениями массива 2. 
Если во втором массиве находится такое же число, то помещаем его в результирующую массив для последующего вывода в консоль. 
Берем второй элемент массива 1 и сравниваем его со значениями из массива 2… И т.д. пока не будут пройдены все элементы массива 1.
*/

function rand (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var firstArr = [];
var secondArr = [];

for (var a = 0; a < 10; a++) {
	var value = rand(0, 10);
	firstArr.push(value);
}

console.log(firstArr);

for (var a = 0; a < 10; a++) {
	var value = rand(0, 10);
	secondArr.push(value);
}

console.log(secondArr);

var sameNum = []; 
    for(var i = 0; i < 10; ++i){
        for(var j = 0; j < 10; ++j){
            if (firstArr[i] === secondArr[j]) 
                sameNum.push(firstArr[i]); 
        }
    }

console.log(sameNum);


/*===========================================*/
// Дан двумерный массив. Число строк равно числу столбцов. Найти сумму элементов, 
// расположенных в области песочных часов (вертикальных – синий цвет на рисунке и горизонтальных – белый цвет).

// Тут только вертикальные часы 

var arr3 = [
  [1,  2,  3,  4,   5],
  [6,  7,  8,  9,  10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]   
];


var sum = 0;

	for (var i = 0; i < arr3.length; i++) {
		if (i < arr3.length/2) {
			for (var j = i; j <= (arr3.length - 1) - i; j++) {			
				console.log('top1: ' + arr3[i][j]);
				sum += arr3[i][j];
			}
		} else {
			for(var j = (arr3.length - 1) - i; j <= i; j++  ) {
				console.log('bottom1: ' + arr3[i][j]);
				sum += arr3[i][j];
			}
		} 
	}


console.log(sum);
