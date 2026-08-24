let age = +prompt("Введите ваш возрост:");

if (age <= 18) {
alert("ВЫ ешо молоды , вам нужна учитса");
} else if (age <= 50) {
    alert("Вам нужно работать");
} else if (age <= 59) {
    alert("Вам скора на пенсию");
} else if (age <= 100) {
    alert("ВЫ пенсионер");
} else {
    alert("Что-то пошло не так")
}