'use strict';

/*
 1. Переместите 0 в конец массива, остальные числа должны остаться
 неизменными
 .сoncat();
 example:
 [1,false,2,0,3,null,0,4,0,25] => [1, false, 2, 3, null, 4, 25, 0, 0, 0]
 [ 'a', 0, 0, 'b', null, 'c', 'd', 0, 1, false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9 ] => ["a","b",null,"c","d",1,false,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0]
 [ 0, 1, null, 2, false, 1, 0 ] => [1,null,2,false,1,0,0]
 */

let arr1 = [1, false, 2, 0, 3, null, 0, 4, 0, 25];
arr1 = [ 'a', 0, 0, 'b', null, 'c', 'd', 0, 1, false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9 ];
function moveZeroToEnd(arr){	
	let lookingFor = 0;
	let zeroArray = [];
	for (let i = 0; i < arr.length;){
		if (arr[i] === lookingFor){
			arr.splice(i, 1);
			zeroArray.push(lookingFor);
			continue;
		}
		i++;
	}
    return arr.concat(zeroArray);
}
console.log(moveZeroToEnd(arr1));
/*
 2. Верните сумму двух найменьших чисел в массиве
 
 [10,20,30,1,31,11,10] => 11
 [-1,0,25] => -1
 [-4,-10,25,10] => -14
 [0,200,10,25,15] => 10
 
 */
function orderNumbers(a, b){// WTF????
	return a - b;
}
function minimalNumber(arr){
	let a = arr.sort(orderNumbers);//Вот эту МАГИЮ Я РЕАЛЬНО НЕ ВКУРИЛ КАК ЭТО РАБОТЕТ???
	return a.shift() + a.shift();
}
console.log(minimalNumber([10,20,30,1,31,11,10]));
/*
 3. Напишите функцию которая меняет местами имя и фамилию
 nameShuffler('john McClane'); => "McClane john"
 nameShuffler('Arnold Schwarzenegger'); => "Schwarzenegger Arnold"
 nameShuffler('James Bond'); => "Bond James"
 */
function nameShuffler(name){
	return name.split(' ').reverse().join(' ');
}

console.log(nameShuffler('john McClane'));
console.log(nameShuffler('Arnold Schwarzenegger'));
console.log(nameShuffler('James Bond'));
/*
 // !
 4. Напишите функцию которая принимает массив с именами и возвращает массив
 в котором каждая буква становится заглавной
 capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
 capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
 */
function capMe(arr){
	for (var i = 0; i < arr.length; i++){
		arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
    }
	return arr;
}

console.log(capMe(['KARLY', 'DANIEL', 'KELSEY']));
console.log(capMe(['jo', 'nelson', 'jurie']));

//@SUPER
/*
 1. Найдите число отсутствующее в заданной последовательности
 
 example:
 [1,3,5,9] => 7
 [0,8,16,32] => 24
 [4, 6, 8, 10] => 2 // число сначала
 [0,16,24,32] => 8
  
 */
function steps(arr){
	let maxStep = 0;
	let index = 0;
	if (arr[0] !== 0){
		arr.unshift(0); // для коректного поиска с 0;
	}
	for (let i = 0; i + 1 < arr.length; i++){
		if (maxStep < (arr[i + 1] - arr[i])){
			maxStep = (arr[i + 1] - arr[i]);
			index = i;
		}
	}
	return arr[index] + maxStep/2;
}

function random(arr) {
	console.log(arr);
	console.log('Пропущеное число: ' + steps(arr));
}

random([1, 3, 5, 9]);
random([0, 8, 16, 32]);
random([4, 6, 8, 10]);
random([0, 16, 24, 32]);

/*
 2. Напишите функция которая преобразовывает/открывает скобки всех 
 вложенных внутри массивов
 Необходимо реализовать рекурсивный фызов функции.
 Функция должна открывать любое количество внутренних массивов
 
 example:
 [[1,2],[3,[4]],5, 10] => [1,2,3,4,5,10]
 [25,10,[10,[15]]] => [25,10,10,15]
 
 */

function openBraces(arr, arrNoBraces = []) {
	for (let i = 0; i < arr.length; i++){
		if (Array.isArray(arr[i])){
			openBraces(arr[i], arrNoBraces);
		}
		else{
			arrNoBraces.push(arr[i]);
		}
	}
	return arrNoBraces;
}

console.log(openBraces ([[1,2],[3,[4]],5, 10]));
console.log(openBraces ([25,10,[10,[15]]]));


