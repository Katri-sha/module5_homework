// задание 2
/*Дана переменная x, которая может принимать любое значение. Написать программу, которая в зависимости от типа данных x выводит в консоль 
сообщение вида: «x — число».
Опишите три случая: когда х = числу, строке или логическому типу. В других случаях выводите сообщение: «Тип x не определён».
Примечание: в этом задании использовать promt не нужно.*/
let x;
x = 5;
if (typeof x == 'number') {
  console.log(x+ ' - это число');
} else if (typeof x == 'string') {
  console.log(x+ ' - это строка');
} else if (typeof x == 'boolean'){
  console.log(x+ ' - это логический тип');
} else console.log('Тип не определен');

// вариант со switch
let x2;
x2 = null;
switch (typeof x2) {
  case 'number': console.log(x2+ ' - это число');
    break;
  case 'string': console.log(x2+ ' - это строка');
    break;
  case 'boolean': console.log(x2+ ' - это логический тип');
    break;
  default: console.log('Тип не определен');
}
