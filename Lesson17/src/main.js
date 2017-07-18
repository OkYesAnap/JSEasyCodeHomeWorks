"use strict";


let position = () => {
  var counter = 0;
  return (move = 0) => {
   // if (move == 0) move = 1;
    counter+= move;
    console.log(counter);
    return counter;
  };
}
let x = position();
let y = position();

function mewCoordinats (elem, e){
  setTimeout(()=>{
  elem.style.position = 'relative';
  elem.style.left = (x(e.offsetX - parseInt(elem.style.width)/2) + 'px');
  console.log(e.offsetX - parseInt(elem.style.width)/2);
  elem.style.top = (y(e.offsetY - parseInt(elem.style.width)/2) + 'px');
  console.log(e.offsetY - parseInt(elem.style.width)/2);})
}

let round = document.getElementById('mainclass');

round.onmousemove = (e) => {
  mewCoordinats(round, e);
}


//insertBefore()
// getElementsByClassName
// getElementById
// getElementsByTagName
// getElementsByName
// querySelectorAll
// insertAdjacentHTML   --- beforebegin, afterbegin, beforeend, afterend;
// insertAdjacentElement
// DocumentFragmetn создает вируельный елемент 
// getComputedStyle
// classlist
