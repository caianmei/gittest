function reverseString(message) {
    return message.split('').reverse().join('');
}
reverseString("hello");

function palindrome(message) {
    var len = message.length;
    var str1 = "";
    for (var i = len - 1; i >= 0; i--) {
        str1 += message[i];
    }
    return(str1 == message);
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true

function alphabetSort(message) {
    return message.split("").sort().join("");
}
alphabetSort('hello'); // should return 'ehllo'

function countWords(message){
    var sum = 0;
    for (var i = 0; i < message.length; i++) {
        if ((message[i] >= 'a' && message[i] <= 'z') || (message[i] >= 'A' && message[i] <= 'Z')) {
            continue;
        } else if(i < message.length - 1){
            sum++;
        }
    }
    return sum;
  }
  countWords('Good morning, I love JavaScript.'); // should return 5