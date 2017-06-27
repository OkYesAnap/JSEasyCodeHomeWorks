/*


Создайте функцию конструктор.
У данной функции должны быть методы:
Преобразование телефонного номера из формата 0993378130 в (099) 33-78-130
Проверка, что телефонный номер содержит только числа
Добавление пользователей в объект
Удаление пользователя по имени, фамилии
Поиск пользователей по имени - отображает всех пользователей с одинаковым именем
Изменение имени, фамилии, телефонного номера у выбраного пользователя ( здесь должно быть реализовано через this )
Сортировка пользователей по номеру телефона, фамилии, имени и тд, по любому из свойств пользователя
Фильтр по указанному свойству*/
// upDownSort = true;
// users = [] /// closure array for users
// id = 0;
class CreatePhoneBook {
  constructor() {
    this.upDownSort = true;
    this.users = [];
    this.id = 0;
  }
  // users = [] /// closure array for users
  // id = 0;
  // upDownSort = true;
  byId(localId) {
    return this.users.filter((val) =>{
      return localId == val.id;
    });
  }
  /// format from xxxxxxxxxx to (xxx) xx-xx-xxx
  addChars(telNum, chars, ...args) {
    //(phone, string of chars to add, array of places to add)
    let numArr = telNum.split("");
    for (let i = 0; i < args.length; i++) {
      numArr.splice(args[i], 0, chars[i]);
    }
    return numArr.join("");
  }
  /// check for only numbers
  numberOnly(telNum) {
    if (isNaN(telNum)) {
      return "Есть недопустимые знаки!";
    } else {
      return true;
    }
  }
  /// add new user to the closure
  addUser(telNum, fName, sName, localId = this.id) {
    if (localId == this.id) {
      this.id++;
    }
    this.users[localId] = { id: localId, telNum, fName, sName };
  }
  /// delete user by fName/sName
  delUser(dellStr) {
    this.users = this.users.filter(function(val) {
      return !(val.fName == dellStr || val.sName == dellStr);
    });
  }
  /// search user by fName/sName
  searchUser(dellStr) {
    return users.filter(function(val) {
      return val.fName == dellStr || val.sName == dellStr;
    });
  }
  /// change content
  changeContent(userToChange, newTelNum, newFName, newSName) {
    this.addUser(newTelNum, newFName, newSName, userToChange);
  }
  /// sort by column
  sortBy(sortVal) {
    this.upDownSort = this.upDownSort ? false : true;
    return this.users.sort((a, b) =>{
      return this.upDownSort ? a[sortVal] > b[sortVal] : a[sortVal] < b[sortVal];
    });
  }
}

PhoneBook = new CreatePhoneBook();
console.log(PhoneBook);
PhoneBook.addUser(`0993378135`, `Andrew `, `Panaseyko `);
// console.log(PhoneBook.addChars("0993378130", "() --", 0, 4, 5, 8, 11)); //

// console.log(PhoneBook.numberOnly("0993378130"));
// console.log(PhoneBook.numberOnly("0993378130"));

 for (let i = 0; i < 10; i++) {
   PhoneBook.addUser(`099337813${i}`, `Andrew${i}`, `Panaseyko${i}`);
 }

// console.log(PhoneBook);

// PhoneBook.delUser("Andrew1");

// PhoneBook.delUser("Panaseyko5");

// //console.log(PhoneBook.searchUser("Panaseyko2")[0]);

// PhoneBook.changeContent(5, "123", "312", "123");

// console.log(PhoneBook.sortBy("telNum"));
