// input string from the user and check palindrome or not
let word = prompt('Enter word')
let reverseword = word.split("").reverse("").join("");
console.log(reverseword);
if (word == reverseword) {
    console.log("Word is palindrome")
}
else {
    console.log("word is not a palindrome")
}