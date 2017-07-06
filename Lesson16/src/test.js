//TASK 0. Найдите числа которые повторяются нечетное количество раз в массиве
solution = inArr => {
  let howMuchSameNumbers = {};
  inArr.forEach(function(element) {
    if (howMuchSameNumbers[element]) {
      howMuchSameNumbers[element]++;
    } else {
      howMuchSameNumbers[element] = 1;
    }
  });
  let outArr = [];
  for (let key in howMuchSameNumbers) {
    if (howMuchSameNumbers[key] % 2) {
      outArr.push(key);
    }
  }
  console.log(outArr);
};

  solution([12, 23, 34, 12, 12, 23, 12, 45])// -> [34 45]
  solution([4, 4, 100, 5000, 4, 4, 4, 4, 4, 100, 100,])// -> [4 100 5000]
  solution([3, 3, 4, 6, 4, 5, 9, 9, 21, 9])// -> [6 5 9 21]
  solution([4, 8, 15, 16, 23, 42, 4, 15, 42, 42])// -> [8 16 23 42]
  solution([2, 2, 44, 44])// => []



/* TASK - 1
Распарсите строку и замените 
 %%HOMEDIR%% -> './JavaScript-Basic'
 %%APP_DIR%% -> 'fixtures/src'
 %%APPNAME%% -> 'app.js'
 
 Вам нужно написать функцию которая в зависимости от разных параметров
 будет изменять заданные значения на необходимые вам
 
 Сделайте несколько экземпляров данной функции
 *
 *
 * */
// const myRegExp = (str, homeDir, appDir, appName) => {}

// myRegExp(someWebpackModule, './JavaScript-Basic', 'fixtures/src', 'app.js')

const someWebpackModule = `module.exports = {
    context: %%HOMEDIR%%,
    entry: {
        app: "%%HOMEDIR%%/%%APP_DIR%%/%%APPNAME%%.js"
    },
    output: {
        path: %%HOMEDIR%% + '/app',
        filename: "dist/[%%APPNAME%%].js",
        library: '[%%APPNAME%%]'
    }
   }`;

class NewStringReplaser{
  constructor(inStr, replaceFromTo){
    this.inStr = inStr;
    this.replaceFromTo = replaceFromTo;
  }
}
let items = new NewStringReplaser(someWebpackModule, {
  from: ["%%HOMEDIR%%", "%%APP_DIR%%", "%%APPNAME%%"],
  to: ["./JavaScript-Basic", "fixtures/src", "app.js"]
});

console.log(items.inStr);

replaser = item => {
  item.replaceFromTo.from.forEach((val, ind) => {
    let expression = new RegExp(item.replaceFromTo.from[ind], "g");
    item.inStr = item.inStr.replace(expression, item.replaceFromTo.to[ind]);
  });
  return item.inStr;
};
console.log(replaser(items));


/*
 TASK - 2
 Сделайте разметку как скриншоте используя HTML
 вам необходимо использовать тэги(!)
*/

class testConstructor {
  render(questions){
    let main = document.createElement('main');
    document.body.appendChild(main);
    questions.forEach((val, indUl) => {
      let tests = document.createElement('h3');
      tests.innerText = val.qest;
      main.appendChild(tests);
      let ul = document.createElement('ul');
      ul.id = 'ul_' + indUl;
      main.appendChild(ul);
      val.uns.forEach((val, indLi) => {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = `<input type = "checkbox" id = "chb_${indUl}${indLi}">` + val;
        ;
      })
    })
    const btn = document.createElement('button');
    main.appendChild(btn);
    btn.onclick = () => {
      questions.forEach((val, ind) => {
        let checkUnswers = document.getElementById(`chb_${ind}${val.trueUns}`);
        let ul = document.getElementById('ul_' + ind);
        let uns = document.getElementById(`uns_${ind}`);
        if (!uns) {
          uns = document.createElement('p');
          uns.id = `uns_${ind}`;
          ul.appendChild(uns);
        }
        if (checkUnswers.checked) {
          uns.parentElement.style = 'background : green; color : white';
          uns.textContent = (`Ответ ${ind + 1} правильно`);
        } else {
          uns.parentElement.style = 'background : red; color : white';
          uns.textContent = (`Ответ ${ind + 1} неправильно`);
        }
      })
    };
    btn.textContent = "Проверить результаты";
  }
}

let app = new testConstructor();
const questions = [{
  qest: "В каком году был создан JS?",
  uns: ["1995", "2000", "2005", "2010"],
  trueUns: 0,
},
{
  qest: 'Что значит "Утиная типизация"?',
  uns: ["Явная типизация",
    "Неявная типизация",
    'Новая версия "Куриной типизации"',
    "42"],
  trueUns: 1,
},
{
  qest: 'Какая функция отобразит сумму "6" при вызове sum(1)(2)(3)',
  uns:["function sum(x, y, z){return x + y + z}",
  "function sum(...a){return a[0] + a[1] + a[2]}",
  "sum = (x, y, z) => x + y + z",
  'sum = x => y => z => x + y + z'],
  trueUns: 3,
}
]


app.render(questions);


/* 
TASK 3
 JavaScript =>
  Создать объект с методами, которые будут динамически генерировать DOM
  Это будет тест, который мы будем разрабатывать в следующих заданиях.
  Сейчас вам нужно только динамически создать html,
  методы должны храниться в одном объекте.
  Изначально на странице должен быть только <body>, 
  вызывая методы объекта нужно создать dom-элементы
*/
