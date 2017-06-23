"use strict";
/*
 * Task 0
 *
 * Создайте функцию конструктор Http, которая будет иметь 2 метода
 *
 * createServer() - принимает один аргумент функцию с двумя параметрами ctx и next
 * ctx: Object {
 *   req: Object
 *     PORT: number
 *     url: string
 *   res: Object
 *     status: number,
 *     message: string,
 *     header: Object {
 *       content-type:application/json
 *       }
 *   }
 * next: Function
 *
 *
 * listen(PORT, host) - в консоле должна отобразится надпись
 * "Server running on https://host:port"
 * и вызваться переданная в createServer функция
 *
 *
 * методы нужно вызывать через chain
 * после вызова метода listen() - должна вызываться переданная в createServer
 * первая функция и возвращать объект и функцию
 *
 * */

function Http() {}

Http.prototype.createServer = function(ctx, next) {
  this.ctx = {
    req: {
      PORT: 2525,
      url: 'string'
    },
    res: {
      status: 4,
      message: 'string',
      header: {
        contenttype: "application/json"
      }
    }
  };
  this.next = function() {};
  return this;
};
Http.prototype.listen = function(port, host) {
  console.log(`Server running on https://${host}:${port}`);
  return this;
};

//listen(PORT, host) - "Server running on https://host:port";

const server = new Http()
  .createServer(function(ctx, next) {
    console.log(ctx);
  })
  .listen(3000, "localhost");


// TASK 1

// Создать класс Human, у которого будут свойства обычного человека:

// имя, возраст, пол, рост, вес.

// Используя прототипное наследование создать дочерние классы Worker

// (дописать в них поля места работы, зарплатой, метод "работать")

// и Student (дописать поля места учебы, стипендией, метод "смотреть сериалы")

//

// Создать несколько экземпляров классов Worker и Student, вывести их в консоль.

// Убедиться что они имеют поля родительского класса Human

// @SUPER

function Human (name, age, sex, height, weight){
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.height = height;
  this.weight = weight;
}

Human.prototype.Worker = function(workPlace, salary){
  this.workPlace = workPlace;
  this.salary = salary;
  this.work = function(){
    console.log('Worker is working');
  }
}

Human.prototype.Student = function(studyPlase, stipend){
  this.studyPlase = studyPlase;
  this.stipend = stipend;
  this.wachTV = function(){
    console.log('Student is wathing TV');
  }
}

let andrew = new Human('Андрей', 31, 'Male', '180', '95');
    andrew.Worker('Нигде', 0);
let someStudent = new Human('Студент', 19, 'Famele', '175', '60');
    someStudent.Student('Хаи', 1000)

console.log(andrew);
console.log(someStudent);

/*
 * TASK 0
 * Создайте функцию обертку над другой функцией
 * Каждый раз при вызове внутренней функции в консоле будут отображаться аргументы функции
 * которую мы обернули
/
*/
