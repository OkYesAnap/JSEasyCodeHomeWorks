'use strict';

// Legolas Task !

// TASK 1
// Отобразите достаточно ли у developers навыков ?
// Отобразите всех разработчиков и вызовете у каждого
// разработчика метод goodDev --

/*
 Количество требований к разработчику совпадает с его навыками.
 * Используйте в задаче this
 * */

let developer1 = {
  skills: ["JavaScript", "linux", "html", "OOP", "Node.js"],
  requires: ["Node.js", "JavaScript", "OOP"],
  goodDev: goodDev
}

let developer2 = {
  experience: [
    { technology: "java" },
    { technology: "c++" },
    { technology: "aws" },
    { technology: "docker" }
  ],
  requires: ["java", "json", "c++", "JavaScript"],
  goodDev: goodDev
};


function goodDev(dev) {
  if (this.skills != undefined) {
    this.requires.forEach(val =>
      console.log(
        this.skills.indexOf(val) > -1 ? val + " Sucsess" : val + " Fail"
      )
    );
  } else {
    this.experience.forEach(val =>
      console.log(
        this.requires.indexOf(val.technology) > -1
          ? val.technology + " Sucsess"
          : val.technology + " Fail"
      )
    );
  }
}


let developers = [developer1, developer2];
developers.forEach((dev, index) => {
  console.log(`developer ${index + 1}`);
  dev.goodDev();
});

// developer 1
// required: Node.js ... success
// required: JavaScript ... success
// required: OOP ... success
// ---

// developer 2
// required: json ... fail
// required: JavaScript ... success
// required: Java ... success
// required: OOP ... success

/*
 *
 * TASK 2
 *
 * Создайте объект содержащий коллекцию элементов с одинаковыми
 * свойстами и разными значениями!
 * Напишите функцию принимает 1 аргумент сортирует объект по 
 * переданному значению
 * 
 * При вызове функции используйте this
 *
 * */

/// работает только если надо отсортировать 1 раз
console.log('задача 2 красиво но раз');
let myObject1 = {
  database: [
    { age: 100, name: "b" },
    { age: 15, name: "c" },
    { age: 25, name: "a" }
  ],
  myFilter(filterArg) {
    return this.database.sort((a, b) => a[filterArg] > b[filterArg]);
  }
};
// {age:15, name:'c'}, {age:25, name:'a'} {age:100, name:'b'}

console.log(myObject1.myFilter("name"));

/// Работает всегда но кода дофига :)
console.log("задача 2 не красиво но работает только с клоном ;(");
let myObject2 = {
  database: [
    { age: 100, name: "b" },
    { age: 15, name: "c" },
    { age: 25, name: "a" }
  ],
  myFilter(filterArg) {
    let orderArr = this.database.map(val => {
      let cloneObj = {}; /// пришлось клонировать(((((
      for (let key in val) {
        cloneObj[key] = val[key];
      }
      return cloneObj;
    });
    return orderArr.sort((a, b) => a[filterArg] > b[filterArg]);
  }
};

// {age:15, name:'c'}, {age:25, name:'a'} {age:100, name:'b'}
console.log(myObject2.myFilter('name'));
console.log(myObject2.myFilter('age'));

// {age:25, name:a}, {age:100, name: b} ...

/*
 * TASK 3
 *
 * Перепишите homework 5 с использованием методов массивов и
 * => arrow functions
 *
 * 
*/


/*
 1. Переместите 0 в конец массива, остальные числа должны остаться
 неизменными
 .сoncat();
 example:
 [1,false,2,0,3,null,0,4,0,25] => [1, false, 2, 3, null, 4, 25, 0, 0, 0]
 [ 'a', 0, 0, 'b', null, 'c', 'd', 0, 1, false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9 ] => ["a","b",null,"c","d",1,false,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0]
 [ 0, 1, null, 2, false, 1, 0 ] => [1,null,2,false,1,0,0]
 */
let arr1 = [ 'a', 0, 0, 'b', null, 'c', 'd', 0, 1, false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9 ];

let moveZeroToEnd = arr =>
  arr.filter(val => val !== 0).concat(arr.filter(val => val === 0));
console.log(moveZeroToEnd(arr1));

/*
 2. Верните сумму двух найменьших чисел в массиве
 
 [10,20,30,1,31,11,10] => 11
 [-1,0,25] => -1
 [-4,-10,25,10] => -14
 [0,200,10,25,15] => 10
 
 */
let minimalNumber = arr => {
  let sortedArr = arr.sort((a, b) => a < b);
  return sortedArr.pop() + sortedArr.pop();
};

let task2Arr = [10,20,30,1,31,11,10];
console.log(minimalNumber(task2Arr));


/*
 3. Напишите функцию которая меняет местами имя и фамилию
 nameShuffler('john McClane'); => "McClane john"
 nameShuffler('Arnold Schwarzenegger'); => "Schwarzenegger Arnold"
 nameShuffler('James Bond'); => "Bond James"
 */
let nameShuffler = name => name.split(' ').reverse().join(' ');

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
let capMe = arr =>
  arr.map(val => val[0].toUpperCase().concat(val.slice(1).toLowerCase()));

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
let steps = arr => {
  if (arr[0] !== 0) {
    arr.unshift(0); // для коректного поиска с 0;
  }
  let maxStep = 0;
  let prevVal = 0;
  let index = 0;
  arr.forEach((val, ind) => {
    if (maxStep < val - prevVal) {
      maxStep = val - prevVal;
      index = ind;
    }
    prevVal = val;
  }, 0);
  return arr[index] - maxStep / 2;
};

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

let openBraces = (arr, arrNoBraces = []) => {
  arr.forEach(val => {
    if (Array.isArray(val)) {
      openBraces(val, arrNoBraces);
    } else {
      arrNoBraces.push(val);
    }
  });
  return arrNoBraces;
};

console.log(openBraces([[1, 2], [3, [4]], 5, 10]));
console.log(openBraces([25, 10, [10, [15]]]));




////////@ TODO -- LVL Strong Junior
/*
 *
 * TASK 1
 * Напишите функцию которая принимает 3 аргумента:*
 *
 *  - объект к которому привязывается метод
 *  - Имя свойства с которым связывается метод
 *  - Объявление привязываемого метода( функция )
 *
 *
 *  Если количество аргументов у функции fn совпадает с переданными
 *  параметрами тогда сохраняет метод в замыкании
 *  и привязывает функцию к методу объекта
 *
 *  при вызове одного и того же метода с разным количеством аргументов, 
 *  должно давать различный результат
 *
 * */

let junior = {};

// fn.length == arguments.length

function addMethod(object, name, fn) {
   object[fn.length] = fn;
   object[name] = (...args) => {object[args.length]()};
}

addMethod(junior, 'ok', function() {
  console.log('zero arguments');
});
addMethod(junior, 'ok', function(one) {
  console.log('one arguments');
});
addMethod(junior, 'ok', function(one, two) {
  console.log('two arguments');
});
addMethod(junior, 'ok', function(one, two, three) {
  console.log('three arguments');
});

 junior.ok(); //'zero arguments'
 junior.ok(1); //'one arguments'
 junior.ok(1, 2); // 'two arguments'
 junior.ok(1, 2, 3); // 'three arguments'
 junior.ok(1);