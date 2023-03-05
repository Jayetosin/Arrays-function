//QUESTION 1
// Mutating method changes the object after the method has been used
//1.. push
//2. .unshift
//3. .shift 
//4. .sort
//5. .splice
//Non- Mutating method does not change the object after it has been used
//1. . slice
//2.  .concat
//3.  .map
//4.   .filter

//QUESTION 2
let languages = ["C#" , "JavaScript" , "Ruby" , "PHP" ,"Python"];
console.log(languages);
//Question 2a Adding element to the end of an array
languages.push("Kotlin");
console.log(languages);
//Question 2b adding elements in the middle of an array
languages.splice(3 , 0 , 'Java');
console.log (languages)
//Question 2c Adding element to the beginning of an array
languages.unshift("Scala" , "Swift");
console.log(languages);
//Question 2d Replacing elements in an array
 languages[6] = 'Go' , 'Rust';
 console.log (languages)
 languages.splice( 7, 0 , 'Rust');
console.log (languages)

//Question 3
let fruit = ['apple', 'mango', 'banana'];
function changeFruit( fruit ) {
fruit[2] = "orange";
return fruit;
}
console.log (fruit);

//Question 4
/* function number(max) {
    return max ( 60)
}
let max=[60]
console.log (number);
 */

/* function Maximum(max) {
    return max((index) => index);
}
let Maximum =[10 ,20, 30, 40 ,50];
let max =[50];
let maximumNum=Maximum(max);
console.log (maximumNum);



 */

//Question 5
function valTimesIndex(num) {
    return num.map((val,index) => val*index);
}
let num =[3 ,5,6];
let multipliedResults=valTimesIndex(num);
console.log (multipliedResults);