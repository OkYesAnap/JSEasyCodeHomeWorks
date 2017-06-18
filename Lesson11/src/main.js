/*
 *
 * Сделайте 4 объекта - не усложняйте, просто наследование
 * через __proto__
 - Пользователь
 - Верифицированный пользователь
 - Гость
 - База данных
 - База хранит информацию о пользователях
 - Пользователи знают мыло админа
 - админ знает пароль от базы данных
 - Гости могут зарегистрироваться в базе данных
 *
 *
 * */
let user = {
  name: "Зарегеный пользователь"
};
let admin = {
  name: "Админ",
  email: {adminsEmail:"OkYesAnap@gmail.com"}
};

let guest = {
  name: "Гость"
};
let dataBase = {
  pass: { dataBasePass: "parol" },
  registration: {
    regFunc: () => {
      return "Регистрируем пользователя";
    }
  }
};

user.__proto__ = admin.email;//User knows admins email
dataBase.__proto__ = user;// Database have acсess to all users
guest.__proto__ = dataBase.registration; //Guest can register at DB
admin.__proto__ = dataBase.pass;//admin knows password from DB