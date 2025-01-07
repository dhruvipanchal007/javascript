// print fibonacciseries
let a = 0;
let b = 1;
console.log(a);
console.log(b);
for (let i = 1; i < 10; i++) {
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
}