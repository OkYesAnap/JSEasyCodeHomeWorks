//'use strict';

/*
 *
 * TASK 1
 *
 * Создайте функцию которая будет запоминать переданные
 * ей аргументы, и прибавлять их в строку
 * и отображать в консоле всю строку
 *
 * 
 * */
function solution1() {
  let str = "";
  let args = [];
  return function(arg) {
    args.push(arg);
    return (str += arg + " ");
  };
}


let stringBuffer = solution1();
stringBuffer('Замыкания'); // Замыкания
stringBuffer('Использовать нужно'); // Замыкания Использовать нужно
console.log(stringBuffer('Привет')); // Замыкания Использовать нужно Привет
// вызываем много раз

/*
 *
 * TASK 2
 * Напишите функцию которая принимает в качестве аргумента строку
 * из скобочек и посчитайте, * что все скобочки закрываются корректно
 *
 * */
openBra =  ["", "(", "[", "{"]; //набор открывающихся скобок
closeBra = ["", ")", "]", "}"]; //набор закрывающихся скобок (индексы должны соответствовать)
function validBraces(str) {
  console.log(str);
  let opened = [];
  for (let i = 0; i < str.length; i++) {
    if (openBra.indexOf(str[i]) > 0) {// проверка есть ли в массиве открытых скобок
      opened.push(str[i]); // если есть добавляем в массив открытые скобки
    }
    if (closeBra.indexOf(str[i]) > 0) {// проверка есть ли в массиве закрытых скобок
      if (openBra.indexOf(opened[opened.length - 1]) - closeBra.indexOf(str[i]) !==0) {
        return false;// если индекс последней открытой скобки минус индекс закрытой не 0 тогда false 
      } else {
        opened.pop();//если 0 значит скобка какая открыла такая и закрыла удаляем последнюю открытую
      }
    }
  }
  return (opened.length == 0 ? true : false) // если в конце массив пуст значит все открытые скобки закрылись 
}


console.log(validBraces('(){}[]')); //=> returns true
console.log(validBraces('(}')); //=> returns false
console.log(validBraces('[(])')); // => returns false
console.log(validBraces('([{}])')); //=> returns true
console.log(validBraces('{([()(()){}])}')); //=> returns true

/*
 *
 * TASK 3
 * Напишите функцию которая будет принимать 1 аргумента - функцию
 *
 * Отрефакторите код таким образом, чтобы сообщение 'THE LAST LAST comment',
 * отобразилось в консоле последним
 *
 * */

function makeCallback(fn) {
  for (let i = 1; i <= 10; i++) {
    setTimeout(function() {
      console.log(i);
      if (i == 10){
        fn();
      }
    }, i * 1000);
  }
}

makeCallback(function() {
  console.log('THE LAST LAST comment');
});

// @SUPER

/*
 *
 * Напишите функцию которая будет принимать одно число и выводить сумму 
 * всех натуральных чисел
 * sum(5) //5+4+3+2+1
 * 
 * Вычисления должны кешироваться, если в функцию попадает закешированное 
 * значение, в консоле должно отобразиться
 * Значение взято из кэша
 *
 * */
// function fnc(n) {
//   let summ = 0;
//   for (let i = 0; i <= n; i++) {
//     summ += i;
//   }
//   return { [n]: summ };
// }

function sum1(num) {
  let cash = {};
  return function(n) {
    let summ = 0;
    for (let i = 0; i <= n; i++) {
      summ += i;
    }
    if (cash[n] == undefined) {
      cash[n] = summ;
      console.log(`${cash[n]} Новое значение`);
    } else {
      console.log(`${cash[n]} Из кеша`);
    }
  };
}

let sum = sum1();

sum(5); // 15 Значение кешировано
sum(5); // 15 Значение взято из кэша

sum(6); // 21 Кешировано
sum(6); // 21 Значение взято из кэша
// console.log(sum1(6));
// console.log(sum1(7));