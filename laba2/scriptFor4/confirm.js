
let myTxt = document.querySelector('h1.n2');

let ready = confirm("Чи готові Ви продовжити?");
if (ready) {
    myTxt.innerHTML += "<br>Чудово! Починаємо!";
} else {
    myTxt.innerHTML += "<br>Добре, можете повернутися пізніше.";
}
