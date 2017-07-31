"use strict";

/* Алгоритмы
TASK 0
Проверьте 2 строки и определите изоморфные ли они.
Две строки являются изоморфными если все их символы 
s, могут быть заменены t.
Все символы одной строки могут быть заменены такими же символами другой строки, независимо от 
порядка символов.
Given two strings, determine if they are isomorphic.
Two strings are isomorphic if the characters in s can be replaced to get t.
All occurrences of a character must be replaced with another character while preserving the order of characters.
No two characters may map to the same character but a character may map to itself."
arguments ["egg", "add"] => expected true
arguments ["foo", "bar"] => expected false
arguments ["paper", "title"] => expected true
arguments ["ca", "ab"] => expected true
arguments ["aa", "bb"] => expected true
arguments ["aedor", "eiruw"] => expected true
*/

let solution = (arr) => {
  let check = [{}, {}];
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < arr[0].length; i++) {
    check[0][arr[0][i]] = (check[0][arr[0][i]] == undefined ? 1 : ++check[0][arr[0][i]]);
    check[1][arr[1][i]] = (check[1][arr[1][i]] == undefined ? 1 : ++check[1][arr[1][i]]);
  }
  for (let key in check[0]) {
    arr1.push(check[0][key]);
  }
  for (let key in check[1]) {
    arr2.push(check[1][key]);
  }
  arr1 = arr1.sort();
  arr2 = arr2.sort();
  console.log(arr1.toString() == arr2.toString());
}

solution(["egg", "add"]); //=> expected true
solution(["foo", "bar"]); //=> expected false
solution(["paper", "title"]); //=> expected true
solution(["ca", "ab"]); //=> expected true
solution(["aa", "bb"]); //=> expected true
solution(["aedor", "eiruw"]); //=> expected true
solution('qwww', 'ssst');

/*
Добавить возможность из формы, ДОБАВЛЯТЬ Пользователя на сервер
*/

const url = "https://easycode-js.herokuapp.com/";
let newUser = {}
let myForm = document.querySelector('form');
//button1.innerText = "ДОБАВИТЬ ПОЛЬЗОВАТЕЛЯ";

let inputs = document.querySelectorAll('input');


myForm.addEventListener('submit', (e) => {
  e.preventDefault();
  newUser = {
    fullName: inputs[0].value,
    phone: inputs[1].value,
    email: inputs[2].value,
  }
  console.log(inputs[0].value);
  let xhrPOST = new XMLHttpRequest();
  xhrPOST.addEventListener('readystatechange', () => {
    if (xhrPOST.readyState == 4) {
      console.log(newUser);
      console.log(xhrPOST.statusText, xhrPOST.response);
    }
  });
  xhrPOST.open('POST', url + 'PAV/users', true);
  xhrPOST.setRequestHeader('Content-Type', 'application/json');
  xhrPOST.send(JSON.stringify(newUser));
  console.log(JSON.stringify(newUser))
})
//});
/*
TASK 1
Изучите API http://easycode-js.herokuapp.com/
Зарегистрируйте 10 пользователей с разными именами и email 
И ТЕЛЕФОНАМИ! адресами.
fullName - должно содержать имя и фамилию 'John Smith'
Используйте XMLHttpRequest => POST
*/

/*
TASK 2
phone-app. Первая страница.
Загружайте пользователей с сервера при загрузке странице.
*/

/*
// contentEditable
Сделайте, чтобы на странице add-user.html пользователь
добавлялся на сервер.
*/
// Для PhoneBook сделайте отдельный репозиторий

// Рекомендую - вам необходимо сделать 1 метод(или отдельный класс) который будет отправлять запросы 
// доступ к этому методу должен быть в каждом вашем классе
// url - должен быть константа, т.к url у вас изменяться не будет.



console.log("0505555555".replace(/(\d{1})(\d{2})(\d{2})(\d{2})/, '($1$2)-$3-$4-'));





let button = document.createElement('button');
button.innerText = "DDOS ATACK!!!";
document.body.appendChild(button);

let xhr = new XMLHttpRequest();


xhr.open('GET', url + "users", true);
xhr.send();
xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState == 4) {
    button.addEventListener("click", () => {
      console.log(xhr.responseText, xhr.statusText);
    }
    )
  }
});

// GET - для получения данных
// Изначальноо используется для  получения документов в формате HTML
// Сейчас активно использутся для прередачи сервером/получения клиентоа JSON, реже XML
// GET - запросы считаются идемпотентными (один и тот же запрос приносит один и тот же результат)

// POST - запрос используется для добавления новых данных
// Использцется для отновления отправки данных на сервер. JSON, XML, FormData. etc
// JSON => Content-Type:'application/json' - заголовок
// FormData => Content-Type:'multipart/form-data' - значения в фодрме
//             Content-Type:'application/x-www-form-urlencoded-file, Binary data'
// В зависимости от файла должен быть соотвествуюший заголовок
