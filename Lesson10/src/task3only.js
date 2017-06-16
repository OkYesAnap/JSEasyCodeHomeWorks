// * TASK 3

let tegs = {
  string: "",
  depth: 0, // переменная которя будет считать куда вставлять.
  add: function(teg, add) {
    this.string =
      this.string.slice(0, this.depth) +
      this.$(teg, add) +
      this.string.slice(this.depth, this.string.length);
    this.depth += teg.length + 2;
    if (add != undefined) {
      this.depth += add.length;
    }
    return this;
  },
  render: function() {
    let ret = this.string;
    this.string = "";
    this.depth = 0;
    return ret;
  },
  $: function(teg, content) {
    return `<${teg}>` + (content != undefined ? content : "") + `</${teg}>`;
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
