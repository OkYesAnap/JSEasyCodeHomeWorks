'use strict';

/*
 *
 * TASK 1
 *
 * Напишите функцию которая будет вызываться трижды и складывать 
 * все передаваемые ей числа
 *
 *
 * */

function add(x) {
  return function(y) {
    return function(z) {
      return x + y + z;
    };
  };
}
console.log('Задание №1');
console.log(add(1)(2)(3)); // 6
console.log(add(10)(5)(15)); // 30


/*
 *
 * TASK 2
 *
 * Напишите функцию которая возвращает объект и одно из свойств объекта 
 * это функция
 * После каждого нового вызова метода объекта(функции объекта) в консоле должно отображаться
 * число на 1 больше чем предыдущее
 * ---------------------------------------
 * так же у объекта должен быть метод обнуления счетчика
 * Узнать счетчик напрямую в объекте, нельзя
 *
 * */

function patternModule() {
  let increment = 0;
  return {
    method: function() {
      console.log(++increment);
    },
    zero: function() {
      increment = 0;
    }
  };
}


let test = patternModule(); // 0
console.log('Задание №2');
test.method(); //1
test.method(); //2
test.method(); //3
test.zero();
test.method(); //1
test.method(); //2
test.method(); //3

//console.log(test);

// @SUPER

/*
 * TASK 1
 *
 * Напишите функцию которая принимает 4 аргумента:
 *
 * -  Объект
 * -  Имя свойства с которым связывается метод
 * -  Сколько раз можно вызвать метод *
 * -  Объявление привязываемого метода( функция )
 *
 *  При вызове метода отобразите сумму передаваемых параметров.
 *  Когда заканчивается счетчик, отображается ошибка
 *
 * */

let jun = {};
function methodCounter(obj, name, num, fn) {
  let lim = num;
  return (obj[name] = function() {
      if (lim <= 0) {
        console.log("ERROR ! add more methods");
        return;
      }
      let argum = [];
      for (let i = 0; i < arguments.length; i++) {
        argum[i] = arguments[i];
      }
      console.log(lim--, fn(argum));
    },
    obj.numberOfMethods = function(num) {
      lim = num;
  });
  // Ваш код !
}

methodCounter(jun, "logger", 2, function(args) {
  let sum = args.reduce(function(a, b) {
    return a + b;
  }, 0);
  return sum;
});
console.log('Задание №3 + №4');
jun.logger(1, 2, 3, 4, 5);
jun.logger(1, 2, 3, 4, 5, 6, 7);
jun.logger(1, 2, 3, 4, 5);

jun.numberOfMethods(4);
jun.logger(1, 2, 3, 4); // 2, 10
jun.logger(5, 5, 5, 5); // 1, 20
jun.logger(5, 5); // ERROR ! add more methods


// @SUPER - PUPER,
/*
 * Добавьте функции methodCounter, возможность увеличивать счетчик
 * на заданное число
 * */
