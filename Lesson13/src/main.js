const someWebpackModule = `module.exports = {
    context: '',
    entry: {
        app: "%%HOMEDIR%%/%%APP_DIR%%/%%APPNAME%%.js"
    },
    output: {
        path: %%HOMEDIR%% + '/app',
        filename: "dist/[%%APPNAME%%].js",
        library: '[%%APPNAME%%]'
    }
   }`;

/* Распарсите строку и замените TASK - 1
 %%HOMEDIR%% -> './JavaScript-Basic
 %%APP_DIR%% -> 'fixtures/src
 %%APPNAME%% -> 'app.js'
 
 Вам нужно написать функцию которая в зависимости от разных параметров
 будет изменять заданные значения на необходимые вам
 
 Сделайте несколько экземпляров данной функции
 *
 *
 * */
class NewStringReplaser {
  constructor(str, replaceFromTo) {
    this.str = str;
    this.replaceFromTo = replaceFromTo;
  }
  funcReplase() {
    this.replaceFromTo.from.forEach((element, index) => {
      this.str = this.str
        .split(element)
        .map(val => this.replaceFromTo.to[index] + val)
        .join("");
    });
    return this.str;
  }
}

let replasedItems = new NewStringReplaser(someWebpackModule, {
  from: ["%%HOMEDIR%%", "%%APP_DIR%%", "%%APPNAME%%"],
  to: ["./JavaScript-Basic", "fixtures/src", "app.js"]
});

function replaseString() {}
console.log(someWebpackModule);
//console.log(someModule);
console.log(replasedItems);
console.log(replasedItems.funcReplase());

/*
 * TASK - 2
 *
 * Перепишите Homework 12 - TASK 1 используя class
 *
 * */

/*
 *
 * TASK - 3
 *
 * Измените startTimer таким образом, чтобы числа отобразились последовательно
 * с 10 до 1
 * Изменять функцию serverResponse и шапку цикла - нельзя
 *
 * */

let startTimer = () => {
  let timer = 0;
  let serverResponse = i => {
    return setTimeout(function() {
      console.log("zzzz");
      console.log(i);
    }, (timer = timer / 2));
  };
  for (let i = 10; i >= 1; i--) {
    timer = timer * i;
    serverResponse(i);
  }
};
startTimer();
// @ SUPER

/*
 * Вы должны создать имитацию медленной базы данных.
 * TASK - 1 Сделайте Класс Database с методами
 *
 *  query
 * 
 *  При запуске метода query запустите внутренний таймаут, который будет длиться 5 секунд.
 *  При поступлении еще 1 запроса(если вызвать метод еще раз), 
 *  таймаут должен стартануть сначала
 *  и ответ должен прийти снова через 5 секунд
 *
 * */

class DataBase {
  constructor() {
    this.x = 5;
    this.id;
  }
  query(isFirst = true) {
      if (isFirst) {
        this.x = 5;
        clearTimeout(this.id);
      }
    this.id = setTimeout(() => {
      if (this.x < 1) {
        console.log("The web server is down");
        return;
      } else {
        console.log(this.x--);
      }
      this.query(false);
    }, 1000);
    return "Retrying...";
  }
}



const dataBase = new DataBase();
dataBase.query();
console.log(dataBase);

// // 5

// // 4

// // 3

// // 2

// // 1

// // console.log('The web server is down') https://www.youtube.com/watch?v=W8_Kfjo3VjU

// dataBase.query();

// // 5

// // 4

// // 5

// // 4

// // 3

// // 2

// dataBase.query();

// 5

// 4

// 3

// 2

// 1

// console.log('The web server is down')
