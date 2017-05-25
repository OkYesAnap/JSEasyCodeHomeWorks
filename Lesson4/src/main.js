/*
 1. Напишите функцию которая принимает 2 числа 
 и возвращает массив содержащий числа между первым числом и вторым числом;
 */
//первое и второе задание слепил в кучу
 function numbersBetween(a, b) {
     var returnArray =[];
 	 if (b == undefined){//если нет 2го параметра делам 2 задание:) 
		for (var i = 0; i <= a; i++){
        returnArray.push(fizzBuzz(i)); // вот тут вызывается функция для 2го задания
	    }
	 }
	 else {
	     a++; //это шоб не брало первое значание
		for (var i = a; i < b; i++){
        returnArray.push(i);
        }
	 }
     return returnArray;
 }

function fizzBuzz(num) {// функция для второго задания
  /* Ваш код здесь */
  return (num === 0 ? '0 деленный на число будет 0' :
          (((num % 3 == 0) && (num % 5 == 0)) ? 'FizzBuzz' : 
            ((num % 5 == 0) ? 'Buzz' : 
              (((num % 3 == 0) ? 'Fizz' :
                num)))));
	}
 console.log(numbersBetween(1, 5)); // 2,3,4
 console.log(numbersBetween(3, 6)); // 4,5
 console.log(numbersBetween(12, 15)); // 13,14
 console.log(numbersBetween(10, 15)); // 11, 12, 13, 14
 console.log(numbersBetween(100)); //Для второго задания.
 
/*
 2. Перепешите задачу FizzBuzz, но с использованием цикла. 
 Расчет чисел должен идти до 100 
 */


/*
 3. Напишите функцию которая принимает 1 аргумент - массив
 И возвращает новый массив содержащий типы значений переменных
 */

let arr = [1, null, undefined, 'str', {}, [], function() {}];

function arrayTypes(arrayT){
    newArray =[];
    for (var i =0; i < arrayT.length; i++ ){
        newArray[i] = typeof(arrayT[i]);
    }
    return(newArray);
} 
console.log(arrayTypes(arr));
/*
 @@SUPER@@. Вам дан массив array, содержащий внутри объекты. 
 Напишите функцию которая внутри цикла проходится по каждому элементу массива
 И проверяет какой тип данных содержит свойство age, если тип данных NaN, 
 тогда добавляет данному объекту свойство unknownAge: true

 На основании нового массива, создайте новую функцию, которая вернет новый массив 
  содержащий все объекты содержащие свойство unknownAge:true
 */

let array = Array.from({ length: 35 }).map(
  (value, index) => (index % 2 ? { age: index + 2 } : { age: NaN })
);

//console.log(array); // [ {age:NaN}, {age:3}, {age:NaN}, {age:5}, {age:NaN}, {age:7} ....]
//console.log(array.length); // 35

function solution(arr) {
    for(let i = 0; i < arr.length; i++){
        if (isNaN(arr[i].age)){
            arr[i].unknownAge = true;
            }
    }
    return arr;
}

function unknownAge(arr){
    let localArr = [];
    for(let i = 0; i < arr.length; i++){
        if (arr[i].unknownAge){
            localArr.push(arr[i]);
        }
    }
    return(localArr);
}

console.log(solution(array));
console.log(unknownAge(solution(array)));

