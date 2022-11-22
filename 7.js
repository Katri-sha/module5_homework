// pflfybt 7
/*Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент,
 то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.*/

let arr = [NaN, 1, null, 6, 'fgg', 0];
let nulls = 0, chet = 0, nechet = 0, ost = 0;
for (let i=0; i < arr.length; i++){
    if (typeof(arr[i]) === "number" && !isNaN(arr[i])){
        if (arr[i] === 0) {
            nulls = nulls + 1;
        } else if (arr[i] % 2 !== 0) {
            nechet = nechet + 1;
        } else chet = chet + 1;
    } else ost = ost + 1;
};
console.log('нулей - ' + nulls);
console.log('четных - ' + chet);
console.log('нечетных - ' + nechet);
console.log('оставшихся - ' + ost);