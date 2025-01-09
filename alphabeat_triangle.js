// A
// BC
// DEF
// GHIJ

let charcode = 65;
for (let i = 1; i <= 4; i++) {
    let count = ' ';
    for (let j = 1; j <= i; j++) {
        count += String.fromCharCode(charcode++);
    }
    document.write(count);
}

// A
// ABA
// ABCBA
// ABCDCBA
// let charcode = 64
// for (let i = 1; i <= 4; i++) {
// 	let result = '';
// 	for (let j = 1; j <= i; j++) {
// 		result += String.fromCharCode(charcode + j);
// 	}
// 	for (let k = i - 1; k >= 1; k--) {
// 		result += String.fromCharCode(charcode + k)
// 	}
// 	console.log(result);
