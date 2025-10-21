let myTxt = document.querySelector('h1.n2');
let myFont = document.querySelectorAll('.myclass');
for (let i = 0; i < myFont.length; i++) {
    myFont[i].style.fontSize = '35px';
}
myTxt.innerHTML = 'Привіт, cтуденте!';
let person = prompt('Як Вас звати');
if (person != null) {
    myTxt.innerHTML = "Я вітаю Вас " + person + "!" + "<br>" + " ";
}
myTxt.style.color = 'red';
