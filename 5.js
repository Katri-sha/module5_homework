// Задание 5.

/*Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и 
вывести в консоль каждый элемент массива.*/
let arr = [1, 5, 'number1', 'number2'];
console.log(`Элементов в массиве - ${arr.length}`);
arr.map(function(item, index, array) {
    console.log(item);
    return item + 1
})

// с циклом
let arr = [1, 5, "num1", "num3"];
console.log(`elementov ${arr.length}`);
let i = 0;
let l = arr.length;
while (i < l) {
    console.log(arr[i]);
    i++;
}