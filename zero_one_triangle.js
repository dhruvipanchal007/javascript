1
// 0 1
// 0 1 0
// 0 1 0 1
for (let i = 1; i <= 4; i++) {
    let count = ' ';
    for (let j = 1; j <= i; j++) {
        if (j % 2 == 0) {
            count += '1';
        } else {
            count += '0';
        }
    }
    console.log(count);
}