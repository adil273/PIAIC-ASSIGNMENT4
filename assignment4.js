"use strict";
// Assignment for the week 4 21-8-20:
//QUESTION 01
// - Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
//METHOD 1/2, SIMPLE FUCNTION
function EvenNumber1(n1, n2, n3, n4, n5) {
    var array1 = [n1, n2, n3, n4, n5];
    var sum = 0;
    for (var i = 0; i < array1.length; i++) {
        if (array1[i] % 2 == 0) {
            sum = sum + array1[i];
        }
    }
    return sum;
}
var result = EvenNumber1(13, 27, 8, 14, 95);
console.log(result);
// //METHOD 2/2, MORE DYNAMIC
function EvenNumber11(array11) {
    var sum = 0;
    for (var i = 0; i < array11.length; i++) {
        if (array11[i] % 2 == 0) {
            sum = sum + array11[i];
        }
    }
    return sum;
}
var result = EvenNumber11([13, 27, 8, 14, 95]);
console.log(result);
//QUESTION 02
// Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
function EvenNumber2(array2) {
    for (var i = 0; i < array2.length; i++) {
        if (array2[i] % 2 == 0) {
            console.log(array2[i]);
        }
    }
}
EvenNumber2([1, 2, 55, 32, 45, 40, 36, 84, 1, 23, 4, 78, 63, 45, 91, 39]);
// ??? I WANT MY RESULT IN THE SHAPE OF AN ARRAY, WHAT SHOULD I USE.???
//QUESTION 03
function ArrayPush33(array33) {
    var sum = 0;
    for (var i = 0; i < array33.length; i++) {
        if (array33[i] % 2 != 0) {
            console.log(array33[i]);
            sum += array33[i]; //additional for practice
        }
    }
    return sum;
}
var result33 = ArrayPush33([1, 5, 99, 600, 14, 3, 58, 71, 76, 1, 13, 12, 21, 999]);
console.log("The sum of all even number is =", result33);
//QUESTION 04
// - Write a program that defines a function to calculate the area of a circle. 
//The function should take the radius as input and return the calculated area.
function AreaOfCircle(n1) {
    var result = 3.14 * n1 * n1;
    return result;
}
var result4 = AreaOfCircle(3);
console.log(result4);
//QUESTION 05
// - Develop a program that reads a list of grades and uses 
//the splice method to remove failing grades (below 50) from the array.
// WITH PUSH FUCNTION
function RemoveArray(array5) {
    var NewArray = [];
    for (var i = 0; i < array5.length; i++) {
        if (array5[i] >= 50) {
            NewArray.push(array5[i]);
        }
    }
    return NewArray;
}
var result5 = RemoveArray([45, 90, 32, 87, 50, 51, 73, 89]);
console.log(result5);
//WITH SPLICE FUNCTION
function RemoveArray55(array55) {
    var NewArray55 = [];
    for (var i = 0; i < array55.length; i++) {
        if (array55[i] <= 50) {
            array55.splice(i, 1);
            i--;
        }
    }
    return array55;
}
var result55 = RemoveArray55([45, 90, 32, 87, 50, 51, 73, 89]);
console.log(result55);
//QUESTION 06
//Write a program that uses a function to find the largest element in an array of numbers.
function FindLargest(array6) {
    let largest = 0;
    for (var i = 0; i < array6.length; i++) {
        if (array6[i] > largest) {
            largest = array6[i];
        }
    }
    return largest;
}
var result6 = FindLargest([11, 33, 66, 101, 85, 74, 2, 30]);
console.log(result6);
