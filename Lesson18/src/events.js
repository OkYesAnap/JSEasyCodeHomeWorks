"use strict";

// @SUPER-FrontEnd
/*
У вас есть 3 блока смотри events.html
при mousedown и движении мышки нужно сделать
ресайз одного блока.
Подсказка - событие необходимо повесить на доп. элемент .resize
*/



let onOffFunc = () => {
	let onOff = false;
	return () => {
		onOff = (onOff ? false : true);
		return onOff;
	}
}
let onOff = onOffFunc();

let changeWidth = 0;

let coordinats = (e) => {
	//e.target.parentElement.style.flexBasis = parseInt(e.target.parentElement.style.flexBasis) + (e.offsetX - changeWidth) + 'px';
	e.target.parentElement.nextSibling.style.flexBasis = parseInt(e.target.parentElement.nextSibling.style.flexBasis) + (changeWidth - e.offsetX) + 'px';
	changeWidth = e.offsetX;
}
let resizer = (e) => {
	//changeWidth = (window.getComputedStyle(e.target.firstElementChild).width); //window.getComputedStyle(e.target.nextSibling).width;
	e.target.parentElement.style.flexBasis = changeWidth + 'px';
	let x = e.target.parentElement;
	console.log (e.target.parentElement.style.flexBasis);
	console.log (x.nextSibling);
	(onOff() ? e.target.addEventListener('mousemove', coordinats)
		: e.target.removeEventListener('mousemove', coordinats))
}

let section = document.querySelector("section");
section.addEventListener('mousedown', resizer);
section.addEventListener('mouseup', resizer);

//document.nextSibling()
