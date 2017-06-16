// * TASK 3

let tegs = {
  tegArr: { tBegin: [], tEnd: [] },
  add: function(teg, content = "") {
    this.tegArr.tBegin.push(`<${teg}>`);
    this.tegArr.tBegin.push(`${content}`);
    this.tegArr.tEnd.unshift(`</${teg}>`);
    return this;
  },
  render: function() {
    let joinArr = this.tegArr.tBegin.concat(this.tegArr.tEnd);
    this.tegArr = { tBegin: [], tEnd: [] };
    return joinArr.join("");
  }
};


var ezjQuery = tegs;
var helloList = ezjQuery
  .add("body") // <body></body>
  .add("div") // <body><div></div></body>
  .add("ul") // <body><div><ul></ul></div></body>
  .add("li", "Hello") //<body><div><ul><li>Hello</li></ul></div></body>
  .render();
console.log(helloList); // <body><div><ul><li>Hello</li></ul></div></body>
//  Обратите внимание, что после вызова render создание строки началось сначала
console.log(
  ezjQuery
    .add("table", "</привет")
    .add("tr", "></ рыба")
    .add("td", "></ мясо")
    .render()
);
console.log(ezjQuery.add("div", "</ хвост").render());
console.log(ezjQuery.add("div", "/ привет").render());

var bodyDiv = ezjQuery
  .add("body") //<body></body>
  .add("div") //<body><div></div></body>
  .render();
console.log(bodyDiv); //<body><div></div></body>
document.write(helloList);
