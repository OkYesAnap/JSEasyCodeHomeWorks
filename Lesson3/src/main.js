/*
1. Напишите функцию которая принимает в 
качестве аргумента массив
и элемент массива и добавляет элемент в конец массива
*/

let arr = [];

function addToArray(arrParam, newElem) {
 // без естественных способов добавления
arrParam[arrParam.length] = newElem;
 return(arrParam);
}
arr = addToArray(arr, 'andrew');
arr = addToArray(arr, 'panaseyko');
arr = addToArray(arr, 'vasilevich');
console.log(arr);
/*
2. Напишите функцию которая получает 3 параметра 
и возвращает объект типа:    
    {
      argument1: param1,
      argument2: param2,
      argument3: param3,
    }    
*/
function simpleObjectGenerator(param1, param2, param3){
  var localObj = {};
  localObj.argument1 = param1;
  localObj.argument2 = param2;
  localObj.argument3 = param3;
  return localObj;
}

console.log(simpleObjectGenerator('protocol', { url: '22' }, 8000));

/* {
   argument1:'protocol',
   argument2:{url:'22'},
   argument3:8000
}*/

var userNames = [{ name: 'Egor' }, { name: 'Katya' }, { name: 'Vera' }];

console.log(simpleObjectGenerator(77, userNames, 'privet kak dela chto novogo'.toUpperCase()));
/* {
 argument1:'77',
 argument2:[{ name: 'Egor' }, { name: 'Katya' }, { name: 'Vera' }],
 argument3:PRIVET KAK DELA CHTO NOVOGO
 }*/


///////////////////////////////////////////////
/*
3.  Напишите функцию которая принимает 3 аргумента, 
     третий аргумент - это объект.
    
    Функция создает новый объект и добавляет ключ 
    это первый аргумент, а значение - второй аргумент
    Проверяет если есть свойство name в переданном объекте, 
    тогда добавляет данное свойство и возвращает новый объект
*/

var myName = { name: 'Oleg' };

function addNameToUser(newKey, newValue, userName) {
  var localClone = {};

  if (userName.name !== undefined){
    localClone.name = userName.name;
    localClone[newKey] = newValue;
  }
  else
    userName = 'Нема name';
  return (localClone); 
}


console.log(addNameToUser('family', '%Lustenko%', myName));
addNameToUser('family', '%Lustenko%', myName);
/* {name:'Oleg', family:'%Lustenko%'} */

console.log(myName);
/* {name:'Oleg'} */



/*
-> @@ SUPER
  Напишите функцию, которая будет возвращать 'Fizz' 
   если передаваемый параметр кратен 3,
   'Buzz', если передаваемый параметр кратен 5, 
   'FizzBuzz' - если параметер кратен 3 и 5
   Если передаваемое число не кратно 3 или 5, то вернуть указанный параметр
*/

function fizzBuzz1(num) { //Решение КУРИЛЬЩИКА
  /* Ваш код здесь */
  return (((num % 3 == 0) && (num % 5 == 0)) ? 'FizzBuzz' : 
          ((num % 5 == 0) ? 'Buzz' : 
            (((num % 3 == 0) ? 'Fizz' :
            num))));
}

function fizzBuzz2(num) { //Решение ЗДОРОВОГО ЧЕЛОВЕКА
    /* Ваш код здесь */
var string = num;
if ((num % 5 == 0) && (num % 3 == 0)) {
  string = 'BizzFuzz'; 
}
else if (num % 5 == 0){
  string = 'Buzz';
}
else if (num % 3 == 0){
  string = 'Fizz';
}
return string; 
}

console.log(fizzBuzz1(1)); // 1
console.log(fizzBuzz1(2)); // 2
console.log(fizzBuzz1(3)); // 'Fizz'
console.log(fizzBuzz1(5)); // 'Buzz'
console.log(fizzBuzz1(15)); // 'FizzBuzz'
console.log(fizzBuzz1(21)); // 'Fizz'


console.log(fizzBuzz2(1)); // 1
console.log(fizzBuzz2(2)); // 2
console.log(fizzBuzz2(3)); // 'Fizz'
console.log(fizzBuzz2(5)); // 'Buzz'
console.log(fizzBuzz2(15)); // 'FizzBuzz'
console.log(fizzBuzz2(21)); // 'Fizz'

/* -> @@ SUPER 2
Напишите функцию, которая будет принимать 4 аргумента, 
последний всегда функция.
Добавьте первые 3 аргумента в массив и вызовите переданную функцию с данным массивом

*/

function strangeFunc(argument1, argument2, argument3, argument4){
  locArray = [argument1, argument2, argument3];
  argument4(locArray);
}

strangeFunc ("Panaseyko", "Andrew", "Vasilevich", console.log);
