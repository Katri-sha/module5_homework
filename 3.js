// Задание 3.
/*
Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".*/

let str = "Hello";
let needStr = "";
let i = str.length - 1;
while (i >= 0) {
    needStr += str.charAt(i);
    i--;
}
console.log(needStr);