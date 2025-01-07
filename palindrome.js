// number is palindrome or not
let number = 121;
let numberstring = number.toString();
let reverse = numberstring.split('').reverse('').join('');
console.log(reverse);
if (reverse === numberstring) {
    console.log('number is palindrome');
} else {
    console.log('number is not palindrome');
}