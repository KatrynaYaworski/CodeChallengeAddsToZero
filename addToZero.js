/*Given an array of numbers, console.log true if any two numbers in the array add to zero, otherwise log false.

For example:

[1, 4, 11, 2, 37, -4] should log true because 4 and -4 add to 0.

[0, 21, 33, 6, 0, -9] should log true because 0 and 0 add to 0.

[0, 1, 2, 3, 4, 5] should log false because no two numbers add to 0.
*/

// Starting array
let array1 = [0, 21, 33, 6, 0, -9];

// Write your solution below:
function addsToZero(array) {
    for (let i = 0; i < (array.length - 1); i++) {
        for (let j = (i + 1); j < array.length; j++) {
            if (array[i] + array[j] === 0) {
                return true
            }
        }
    }
    return false
}
console.log(addsToZero(array1))