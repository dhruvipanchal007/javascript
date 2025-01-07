
//      *
//     * *
//    * * *
//   * * * *
for (let i = 1; i <= 4; i++) {
    let a = ' ';
    for (let k = 1; k <= 4 - i; k++) {
        a += '  ';
    }
    for (let j = 1; j <= i; j++) {
        a += '*';
    }
    console.log(a);
}