"use strict";

/* task 0
Даны строки разделенные различным образом,
верните строки разделенные / или _, в нижнем регистре
solution("ActiveModel::Errors") => active_model/errors"
solution("HelloHowAreYou") => "hello_how_are_you"
solution("MyNAMEIsBOND-JamesBond") => my_name_is_bond_james_bond"
solution("MAINCompany::BEST-MAINUser") => "main_company/best_main_user"
*/

let solution = (str) => {
  // console.log(inString.replace(/([a-z][A-Z])/g, "_$1_")
  //   .split('_')
  //   .map((val) => ((val.match(/[a-z][A-Z]/)) ? val[0] + "_" + val[1] : val)).join('')
  //   .split('::').join('/').split('-').join('_').toLowerCase());
  str = str.replace(/([a-z][A-Z])/g, "_$1_").split('_').map((val) => ((val.match(/[a-z][A-Z]/)) ? val[0] + "_" + val[1] : val)).join('').replace(/::/, '/').replace(/-/, '_').toLowerCase();
  console.log(str);
}


solution("ActiveModel::Errors::ActiveModel::Errors");
solution("HelloHowAreYou");
solution("MyNAMEIsBOND-JamesBond");
solution("MAINCompany::BEST-MAINUser");



/* TASK 0.5
  ГОТОВО: Добавить кота в ваш КОД в Node.js !!
  КОТА ОСТАВИТЬ
  Добавить проверку на существование файла
  
*/

/* TASK 1
По приложению phone-book;
1. Для каждой страницы у вас должен быть класс с одноименным названием
в отдельном файле
2. Каждый класс должен содержать методы render() - который рендерит всю страницу и методы
 header(), main()
3. Удалить jquery.js и bootstrap.js с проекта
-> Закончить keypad с прошлого занятия, добавить функционал для удаления номера
Сортировка таблицы!
Визуализировать страницы Edit contact, User, Add User;
TASK 2
1. keypad - сделать чтобы номер можно было набрать с клавиатуры (!)
2. Формат номера должен быть таким (099)-17-38-170
*/

/*
TASK 3
edit-contact, add-user при клике:
- сделать данные редактируемыми (атрибут contentEditable)
- изменять backgroundColor
index.html - в поле search при вводе буквы, добавить поиск по имени если
имя включает хотя бы одну эту букву.
после ввода каждого символа, фильтровать отображаемых пользователей.
При удалении всех символов отобразить снова весь список
*/


