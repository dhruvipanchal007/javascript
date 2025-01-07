let number = [10, 5, 20, 100, 18];
let maximumnumber = '';
for (let i = 1; i <= number.length; i++) {
    if (number[i] > maximumnumber) {
        maximumnumber = number[i];
    }
}
console.log(maximumnumber);
