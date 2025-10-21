let person = prompt("Прошу ввести Ваше ім’я:", "Петро");
if (person !== null && person.trim() !== "") {
    myTxt.innerHTML = "Привіт, " + person + "! Радий тебе бачити!";
} else {
    myTxt.innerHTML = "Ви нічого не ввели.";
}
