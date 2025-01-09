// 1
// 121;
// 12321;
// 1234321
for (let i = 1; i <= 4; i++) {
    let a = ' ';
    for (let j = 1; j <= i; j++) {
        a += j;
    }
    for (let l = i - 1; l >= 1; l--) {
        a += l;
    }
    document.write(a);
}