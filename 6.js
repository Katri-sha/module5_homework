// задание 6
/*Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. 
Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.*/

let arr = ['1', '1', 5, '1'];
let i = 0;
arr.forEach(function(value,index){
    if (arr[index] === arr[0]) {
        i++;
    }
});
if (i === arr.length){
    console.log(true);
} else console.log(false); 

// метод .every
let arr = [1, 1, 1, 1];
function sravny(value) {
    return value === arr[0];
}
console.log( arr.every(sravny) );