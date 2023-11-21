"use strict"
function addClass(){
let fr=document.getElementsByClassName('burger');
let collection=fr[0].querySelectorAll('span');
collection[1].classList.toggle('spanM');
collection[0].classList.toggle('first');
collection[2].classList.toggle('last');
let menu=document.getElementsByClassName('menu');
menu[0].classList.toggle('block');

}