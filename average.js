// will take 10 number from user and srored in the array.It will Print the numbers,their sum and average of it.
let number = [];
let sum = 0;
let average = 0;
for (let i = 1; i <= 10; i++) {
    let num = Number(prompt('please enter a number'));
    number.push(num);
    sum += num;
    average = sum / number.length;
}

console.log(number);
console.log(sum);
console.log(average);
