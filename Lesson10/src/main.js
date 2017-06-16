/*
 *
 * Задача 0
 *
 * Что вернет выражение z(x) ?
 * Напишите ответ своими словами как вы понимаете
 * В консоле не смотрите, сначала напишите, после проверьте себя
 *
 * */

let y = 5;       //y = 5 
let x = () => y; //x = y = 5

let z = t => {   //z = (5) {} 
  let y = 5;     //локальный y = 5 
  t();           //функция ничего не возврщает
};
console.log(y);

z(x);            //undefined

/*
 *
 * TASK 1
 * Создайте функцию которая будет превращать передаваемую строку в html тэг
 *
 *
 * */

let $ = function() {
  return `<${arguments[0]}>` + (arguments[1] == undefined ? '' : arguments[1])+`</${arguments[0]}>`;
};

let createBODY = $('body');
let createDIV = $('div');
console.log(createBODY); // <body></body>
console.log(createDIV); // <div></div>

/*
 *
 * TASK 2
 *
 * Создайте объект к которому можно будет применить любое число вызовов
  // obj.method().method().method()
  ---------------
 *  Передаваемое значение должно возвращаться в виде html тэгов (TASK 1)
 *  Передаваемые аргументы должны быть только в виде строки
 * */

let tegs = function() {
  let string = "";
  tegs.add = function(teg) {
    console.log((string += $(teg)));
    return this;
  };
};



var ezjQuery = tegs;
ezjQuery();

ezjQuery
  .add('body') //<body></body>
  .add('div') //<body></body><div></div>
  .add('h1'); //<body></body><div></div><h1></h1>

/*
 *
 * TASK 3
 * Доработйте метод add чтобы на каждом вызове следующий тэг помещался внутри
 * предыдущего !
 --- 
 * И добавьте объекту ezjQuery метод render, который будет возвращать 
 * сгенерированную строку
 -----
 * Методу add - второй параметр, который будет размещать информацию внутри тэга
 *
 *
 */

// example
let tegs1 = function() {
  let string = "";
  tegs1.add = function(teg, add) {
    ((string = string.slice(0, string.indexOf('></')+1) + $(teg, add) + string.slice(string.indexOf('></')+1, string.length)));
    return this;
  };
  tegs1.render = function(){
    let ret = string;
    string = '';
    return ret;
  }
};


var ezjQuery1 = tegs1; 
ezjQuery1();
var helloList = ezjQuery1
  .add('body') // <body></body>
  .add('div') // <body><div></div></body>
  .add('ul') // <body><div><ul></ul></div></body>
  .add('li', 'Hello') //<body><div><ul><li>Hello</li></ul></div></body>
  .render();
console.log(helloList); // <body><div><ul><li>Hello</li></ul></div></body>
//  Обратите внимание, что после вызова render создание строки началось сначала

var bodyDiv = ezjQuery1
  .add('body') //<body></body>
  .add('div') //<body><div></div></body>
  .render();
console.log(bodyDiv); //<body><div></div></body>
document.write(helloList);
// Для выполнивших все задания
// сделайте document.write(helloList) увидите результат :)

// @SUPER
/*
 * Переименуйте объект ezjQuery в $.
 * Создание перевого метода должено быть без метода
 *
 * $('body').add('li', 'hi').render() // <body><li>hi</li></body>
 *
 * */
