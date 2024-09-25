// const array = ["Jahirul", "Fahim", "Faruq", "Sanjida"];
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }
// console.log(array)
// // console.log(array.indexOf("Jahirul"));
//
// array[0] = "Jahirul Islam"
// array[1] = "Fahim Rana"
// array[2] = "Omar Faruq"
// array[3] = "Sanjida sanji"
//
// console.log(array)
/*
const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];

for (i = 0; i < arrayOfNumbers.length; i++) {
    console.log(arrayOfNumbers[i]);
}

console.log(arrayOfNumbers);


 */
/*
// array concat
const array1 = [1, 2, 3];
const array2 = [4,5,6];
const array3 = array1.concat(array2);
console.log(array3);

 */
/*
const students = new Array(10)

students[0] = "Jahirul Islam"
students[1] = "Fahim Rana"
students[2] = "Sanjida sanji"
students[3] = "Mr Moon"
students[4] = "Omar Faruq"
students[5] = "Sakil Ahmed"
students[6] = "Tanjim"
students[7] = "Rashedul Islam"
students[8] = "Tanjim Sarowar"
students[9] = "H M Nayeem"

for(let s = 0; s < students.length; s++){
    console.log(students[s])
    // console.log(s)
    // console.log(students)
}

 */

const arr = ["nayeem ","jahirul", "tabib"]

function toUpperCase(arr) {
    let capitalise = arr.map(item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
    return capitalise
}

console.log(toUpperCase(arr))




























