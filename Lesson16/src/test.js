
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

