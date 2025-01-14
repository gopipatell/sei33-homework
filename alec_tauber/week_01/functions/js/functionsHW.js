console.log("Is this thing working?");

// # The Calculator
//
// ## Part 1
// - Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
//

const squareNumber = function(number){
  const numberSquared = number * number;
  console.log('The result of squaring the number ' + number + ' is ' + numberSquared);
  return numberSquared;

};
squareNumber(3,9);
squareNumber(4,16);


//
// - Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

const numberHalf = function(number){
  const halfNumber = number / 2;
  console.log('Half of ' + number + ' is ' + halfNumber);
  return halfNumber;

};
numberHalf(5,2.5);


// - Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

const ofPercent = function(num1, num2){
  const percentOf = (num1 / num2) * 100;
  console.log(num1 + ' is ' + percentOf + '%' + ' of ' + num2); // 2 is 50% of 4.
  return percentOf;
}
ofPercent(2,4);

// - Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result.
//t should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
const x = function(radius){
  const areaOfCircle = Math.PI * radius * radius;
  console.log('The area for a circle with ' + radius + ' is ' + areaOfCircle);
  return areaOfCircle;
}
x(2);

// - Bonus: Round the result so there are only two digits after the decimal.
//



// ## Part 2
// Write a function that will take one argument (a number) and perform the following operations,
// using the functions you wrote earlier1:
// - Take half of the number and store the result.
// - Square the result of #1 and store that result.
// - Calculate the area of a circle with the result of #2 as the radius.
// - Calculate what percentage that area is of the squared result (#3).

const y = function(number){
  const result = number / 2;
  const square = result * result; // Sqaure the result of #1
  const areaOfCircle = Math.PI * result * result;


  console.log()
}







//
// # Strings
//
// These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.
//
// ## DrEvil
//
// Create a function called DrEvil. It should take a single argument, an amount,
//and return '<amount> dollars', except it will add '(pinky)' at the end if the amount is 1 million.
// For example:
// ```
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)
// Using If Function to determine one value having (pinky) at the end of the console.log
const DrEvil = function(value){
  if(value == 1000000) {
    console.log(value + ' dollars (pinky)');
  }
  else {
    console.log(value + ' dollars');
  }
}

DrEvil(1000000);
DrEvil(10);

// ```
//
// ## MixUp
//
// Create a function called mixUp.
//It should take in two strings, and return the concatenation of the two strings (separated by a space)
// slicing out and swapping the first 2 characters of each.
// You can assume that the strings are at least 2 characters long. For example:
// ```
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!
//
const mixUp = function (string1, string2){
  const beg2 = string2.slice(0, 2); //.slice(0,2) takes it from 2 spots within the stringed word
  const end2 = string2.slice(2); // Takes the location of index 2 at the end of string2
  const beg1 = string1.slice(0,2);
  const end1 = string1.slice(2);
  console.log(beg2 + end1 + ' ' + beg1 + end2);
}
mixUp("Evan", "Emenegger")
mixUp("Chris", "Edmonds")
mixUp("Donald", "Trump")
mixUp('mix', 'pod')
mixUp('dog', 'dinner')

// ```
//
// ## FixStart
//
// Create a function called fixStart. It should take a single argument,
// a string, and return a version where all occurences of
// its first character have been replaced with '*', except for the first character itself.
//You can assume that the string is at least one character long. For example:
// ```
// fixStart('babble'): 'ba**le'
// // ```
//
const fixStart = function (stringy){

 const firstLetter = stringy.toLowerCase();
 let endOfWord = stringy.slice(1)
 for (let i = 0; i < endOfWord.length; i++){
   if (endOfWord[i] === firstLetter){
     endOfWord = endOfWord.replace(endOfWord[i], "*");
   }
   console.log(firstLetter + endOfWord);
 }
}
fixStart('babble')





// ## Verbing
//
// Create a function called verbing. It should take a single argument, a string.
// If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing',
// in which case it should add 'ly' instead. If the string length is less than 3,
// it should leave it unchanged.
// For example:
// ```
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'
// ```

const verbing = function(word){
  if (word.length >= 3){
    if(word.endsWith('e')){
      word = word.slice(0, word.lenth-1)
        console.log(word + 'ing');
      } else if (word.endsWith('n')){
        word = word + 'ning';
        console.log(word);
      } else if (word.endsWith('ing')){
        word = word.slice(0, word.length-3);
        console.log(word + 'ly');
      }
        else{
          console.log(word);
        }
      }
    }

verbing('typing');

//
// ## Not Bad
//
// Create a function called notBad that takes a single argument, a string.
// - It should find the first appearance of the substring 'not' and 'bad'.
// - If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// - If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
//
// For example:
// ```
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'
// ```

//

//
//
//
