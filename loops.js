




// question 9
//

// question 10
// armstrong number`
// let number = 153;
// let numberstring = number.toString().split('');

// question 11



// question 12
// 1;
// 12;
// 12321;
// 1234321
// for (let i = 1; i <= 4; i++) {
// 	let a = ' ';
// 	for (let j = 1; j <= i; j++) {
// 		a += j;
// 	}
// 	for (let l = i - 1; l >= 1; l--) {
// 		a += l;
// 	}
// 	console.log(a);
// }

// question 13
// A
// BC
// DEF
// GHIJ

// let charcode = 65;
// for (let i = 1; i <= 4; i++) {
// 	let count = ' ';
// 	for (let j = 1; j <= i; j++) {
// 		count += String.fromCharCode(charcode++);
// 	}
// 	console.log(count);
// }

// question 14
// 1
// 0 1
// 0 1 0
// 0 1 0 1
// for (let i = 1; i <= 4; i++) {
// 	let count = ' ';
// 	for (let j = 1; j <= i; j++) {
// 		if (j % 2 == 0) {
// 			count += '1';
// 		} else {
// 			count += '0';
// 		}
// 	}
// 	console.log(count);
// }






// question 19
// find sum and average using function
// function sum(a, b) {
// 	return a + b;
// }
// function average(a, b) {
// 	return result / 2;
// }
// let num1 = Number(prompt('enter 1 number'));
// let num2 = Number(prompt('enter 2 number'));
// let result = sum(num1, num2);
// let avg = average(num1, num2);

// console.log(result);
// console.log(avg);


// question 20
// check length of the word
// let word = 'dhruvi53'
// console.log(word.length)

// question 21
// convert lower case to uppercse
// let word = "dhruvi"
// let result = word.toUpperCase();
// console.log(result);

// question 22
// accept two string from the user same or not

// let string1 = prompt('Enter first word');
// let string2 = prompt('Enter second string');
// if (string1 === string2) {
// 	console.log("string is same")
// }
// else {
// 	console.log("string not a same");
// }


// question 23
// multiplication of 2 matrix
// let a = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9]
// ]
// let b = [
// 	[9, 8, 7],
// 	[6, 5, 4],
// 	[3, 2, 1]
// ]
// let result = [
// 	[0, 0, 0],
// 	[0, 0, 0],
// 	[0, 0, 0]
// ]
// for (let i = 0; i < 3; i++) {
// 	for (let j = 0; j < 3; j++) {
// 		result[i][j] += a[i][j] * b[i][j]
// 	}
// }
// console.log(result);

// question 24
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

// }

// question 25
//        *
//       * *
// 	   *  *  *
//    *  *  * *	
// let rows = 4;
// for (let i = 1; i <= rows; i++) {
// 	let str = "";
// 	for (let j = 1; j <= rows - i; j++) {
// 		str += " ";
// 	}
// 	for (let k = 1; k <= i; k++) {
// 		str += "* ";
// 	}
// 	console.log(str);
// }


// question 26
//         *
//      *  *  *
//  *  *   *   *  *
// *  *  *  *  *   *   *

// let rows = Number(prompt('enter rows number'));
// for (let i = 1;)



// function number(n) {
//     if (n == 0) return;
//     document.write(n)
//     number(n - 1)
//     return;
// }
// number(10);

// console.log("hello");

// for (let i = 1; i <= 5; i++) {
//     document.write(i);
// }
// for (let i = 5; i >= 1; i--) {
//     document.write(i);
// }
// function number(x, n) {
//     if (x === n) return;
//     document.write(x);
//     number(x + 1, n);
//     return;
// }
// number(1, 5)


function number(n) {
    if (n == 0) return;
    number(n - 1);
    document.write(n);
    return;
}
number(5);