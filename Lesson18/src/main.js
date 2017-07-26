"use strict";


/*
Алгоритмы !
TASK 0
Вам дано предложение, верните массив из слов, 
которые длинее чем средняя длина всех слов.
Слова разделены пробелами, если в предложении запятые,они должны быть пропущены
solution(["This is a sample string"]) expected ["This" "sample" "string"]
solution(["Some another sample"]) expected ["another" "sample"]
solution(["Do, do, do, do... do it!"]) expected []
*/


let solution = inStr => {
    let wordsArr = inStr.split(/,? |\.\.\. |!/).filter(val => val.length > 0);
    let calculate = wordsArr.reduce((x, val) => x += val.length, 0);
    return wordsArr.filter(val => val.length > calculate / wordsArr.length)
}
console.log(solution("Do, do, do, do... do it!")); //expected []
console.log(solution("This is a sample string"));// expected ["This" "sample" "string"]
console.log(solution("Some another sample"));//"another" "sample"


/*
Подготовка к занятию в пятницу.
Windows:
  Установите все node.js скачать отсюда -> https://nodejs.org/en/
  Скачайте последнюю 8.1.x версию
  Для проверки установки в консоле введите "node -v" (без кавычек) отобразит версию node.js
Linux:
 sudo apt install npm // установить менеджер пакетов npm
 npm i -g n // установить пакет для установки node.js
 sudo n latest // установить последнюю версию node.js
*/


/* TASK 1
Сделайте таблицу 5x5
При клике на элемент, изменяйте цвет у элемента на красный.
Но цвет у элемента должен изменяться пропорционально в другой половине квадрата
Пример 3х3:
[]|[]|[]
[]|[]|[]
[]|[]|[]
кликаем сюда -> []|[]|[]
                []|[]|[]
                []|[]|[x] <- загорается тут
                []|[]|[]
кликаем сюда -> []|[]|[x] <- загорается тут
                []|[]|[x]
*/

let size = 2;

const table = document.createElement("table");
document.body.appendChild(table);
let str = '';
for (let i = -size; i <= size; i++) {
	str += '<tr>';
	for (let j = -size; j <= size; j++) {
		str += `<td id = "${i}_${j}" style = "width: 50px; height:50px; border: 1px solid black"></td>`;
	}
	str += '</tr>';
}
table.innerHTML = str;

function colors() {
	if (this.style.backgroundColor == 'black') {
		this.style.backgroundColor = 'red'
	} else this.style.backgroundColor = 'black'
}

table.onclick = (e) => {
	let xy = e.target.id.split('_');
	let recolor = document.getElementById((xy[0] * -1) + "_" + (xy[1] * -1));
	colors.call(recolor);
}


// @SUPER-FrontEnd
/*
У вас есть 3 блока смотри events.html
при mousedown и движении мышки нужно сделать
ресайз одного блока.
Подсказка - событие необходимо повесить на доп. элемент .resize
*/


