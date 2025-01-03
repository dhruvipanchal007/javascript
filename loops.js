// Loops Programme

// print table of given number
// let number = 20;
// for (let i = 1; i <= 10; i++) {
//     console.log(`${number} * ${i} = ${number * i}`)
// }

// Question 2
// print table number give range number by user
// let startnumber = Number(prompt('Enter start number'));
// let endnumber = Number(prompt('Enter end number'));
// let number = Number(prompt('Enter number'));

// for (let i = startnumber; i <= endnumber; i++) {
// 	console.log(`${number}* ${i} = ${number * i} `)
// }

// question 3
//find sum of n numbers
// let number = 10;
// let sum = 0;
// for (let i = 1; i <= number; i++) {
// 	sum += i;
// }
// console.log(sum);

// question 4
// print factorial number n
// let number = 3;
// let fact = 1;
// for (let i = 1; i <= number; i++) {
// 	fact *= i;
// }
// console.log(fact);

// question 5
// let number = [10, 5, 20, 100, 18];
// let maximumnumber = '';
// for (let i = 1; i <= number.length; i++) {
// 	if (number[i] > maximumnumber) {
// 		maximumnumber = number[i];
// 	}
// }
// console.log(maximumnumber);

// question 6
// sum of digit entered by user
// let sum = 0;
// let number = 5;
// console.log(number.length);
// for (let i = 1; i <= number; i++) {
// 	sum += number;
// }
// console.log(sum);

// question 7
// print fibonacciseries
// let a = 0;
// let b = 1;
// console.log(a);
// console.log(b);
// for (let i = 1; i < 10; i++) {
// 	let c = a + b;
// 	console.log(c);
// 	a = b;
// 	b = c;
// }

// question 8
// peint 100 odd number
// for (let i = 1; i <= 100; i++) {
// 	if (i % 2 !== 0) {
// 		console.log(i);
// 	}
// }
// even number
// for (let i = 1; i <= 100; i++) {
// 	if (i % 2 == 0) {
// 		console.log(i);
// 	}
// }

// question 9
// number is palindrome or not
// let number = 121;
// let numberstring = number.toString();
// let reverse = numberstring.split('').reverse('').join('');
// console.log(reverse);
// if (reverse === numberstring) {
// 	console.log('number is palindrome');
// } else {
// 	console.log('number is not palindrome');
// }

// question 10
// armstrong number`
// let number = 153;
// let numberstring = number.toString().split('');

// question 11

//      *
//     * *
//    * * *
//   * * * *
// for (let i = 1; i <= 4; i++) {
// 	let a = ' ';
// 	for (let k = 1; k <= 4 - i; k++) {
// 		a += '  ';
// 	}
// 	for (let j = 1; j <= i; j++) {
// 		a += '*';
// 	}
// 	console.log(a);
// }


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

// question 15
// will take 10 number from user and srored in the array.It will Print the numbers,their sum and average of it.
// let number = [];
// let sum = 0;
// let average = 0;
// for (let i = 1; i <= 10; i++) {
// 	let num = Number(prompt('please enter a number'));
// 	number.push(num);
// 	sum += num;
// 	average = sum / number.length;
// }

// console.log(number);
// console.log(sum);
// console.log(average);

// qustion 16
// sort an array``
// let number = [1, 5, 8, 2, 4, 10];

// let sortnumber = number.sort((a, b) => a - b);
// console.log(sortnumber);


// question 17
// addition of 2 matrix
// let matrixa = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9]
// ]
// let matrixb = [
// 	[9, 8, 7],
// 	[6, 5, 4],
// 	[3, 2, 1]
// ]
// let resultmatrix = [
// 	[0, 0, 0],
// 	[0, 0, 0],
// 	[0, 0, 0]
// ]

// for (let i = 0; i < 3; i++) {
// 	for (let j = 0; j < 3; j++) {
// 		resultmatrix[i][j] += matrixa[i][j] + matrixb[i][j]
// 	}
// }
// console.log(resultmatrix);


// question 18
// input string from the user and check palindrome or not
// let word = prompt('Enter word')
// let reverseword = word.split("").reverse("").join("");
// console.log(reverseword);
// if (word == reverseword) {
// 	console.log("Word is palindrome")
// }
// else {
// 	console.log("word is not a palindrome")
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

let rows = Number(prompt('enter rows number'));
for (let i = 1;)