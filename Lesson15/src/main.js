/*
TASK 0
Проверьте что строка содержит все символы от "a" до "z"

*/

// 1) DRY

// DO not reapeat yourself;

// 2) Вы должны учесть все возможные варианты


const solution = str => {
  for (let i = 97; i <= 122; i++) {
    if (!str.match(String.fromCharCode(i))) {
      return false;
    }
  }
  return true;
};



console.log(solution("wyyga")); // false
console.log(solution("qwertyuioplkjhgfdsazxcvbnm")); // true
console.log(solution("ejuxggfsts")); // false
console.log(solution("qpwoeirutyalskdjfhgmznxbcv")); // true
console.log(solution("qqqqqqqqpwoeirutyalskdjfhgmznxbcv")); // true
console.log(solution("0123456789abcdefghijklmnop")); // false

/*
 2. Напишите функция которая преобразовывает открывает скобки всех 
 вложенных внутри массивов
 Необходимо реализовать рекурсивный фызов функции.
 Функция должна открывать любое количество внутренних массивов и объектов
 example:
 [[1,2],[3,[4]],5, 10] => [1,2,3,4,5,10]
 [25,10,[10,[15]]] => [25,10,10,15]
 [1, [2, [ {a: "b"} ] ] ] => [1, 2, {a: "b"}]
 */


class BracerOpener {
  open(arrObj) {
    this.outArr = [];
    this.arrayOrObject(arrObj);
    return this.outArr;
  }
  arrayOrObject(arrObj) {    //check array or object
    if (Array.isArray(arrObj)) {  //if array goto array opener
      this.arrayOpener(arrObj);
    } else {
      this.objectOpener(arrObj); //if object goto object opener
    }
  }
  arrayOpener(arr) {
    //array opener
    arr.forEach(elem => {
      if (typeof elem !== "object") {//if not object push to return array
        this.outArr.push(elem);
      } else {
        this.arrayOrObject(elem); //if object goto check array or object
      }
    });
  }
  objectOpener(obj) {    //object opener
    for (let key in obj) {
      if (typeof obj[key] !== "object") {//if not object push to return array
        this.outArr.push(`${key} : "${obj[key]}"`);
      } else {
        this.arrayOrObject(obj[key]); //if object goto check array or object
      }
    }
  }
}

let BO = new BracerOpener();

console.log(BO.open([[1, 2], [3, [4]], 5, 10]));
console.log(BO.open([25, 10, [10, [15]]]));
console.log(BO.open([1, [2, [{ a: "b" }]]]));




/*
Виртуализировать таблицу, сделать рендер всей таблицы через JavaScript.
Второй макет.
https://github.com/aleksandra-maslennikova/telephone-book/blob/master/index.html
Выглядеть должно так же: https://aleksandra-maslennikova.github.io/telephone-book/index.html
*/