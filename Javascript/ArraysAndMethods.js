// const names = ["Kevis", "Akhil", "Vatsal", "Nik", "Sarthuu"];

// const index = names.findIndex(name => name === "Nik")

// console.log(names[index] + " is at index " + index);
// const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let ans = digits.map((value) => {
//     return value * value;
// })

// for (let index = 0; index < digits.length; index++) {
//     console.log("Sum of : " + digits[index] + " is : " + ans[index]);
// }

// function transformToObjects(numberArray) {
//   const editedArray = numberArray.map((value) => ({ val: value }));
//   return editedArray;
// }

// const editedArray = transformToObjects([1, 2, 3]);
// editedArray.map((val) => {
//   console.log(val);
// });

// console.log(transformToObjects([1,2,3]));

//spread
const hobbiesList1 = ["Reading", "Swiming", "Playing Games"];
const hobbiesList2 = ["Travelling"];
// const hobbies = [hobbiesList1 + hobbiesList2] //[ 'Reading,Swiming,Playing GamesTravelling' ]
// const hobbies = [hobbiesList1 , hobbiesList2] //[ [ 'Reading', 'Swiming', 'Playing Games' ], [ 'Travelling' ] ]
// const hobbies = [...hobbiesList1 , ...hobbiesList2] //[ 'Reading', 'Swiming', 'Playing Games', 'Travelling' ]

// console.log(hobbies);

// const user = { name: "Akhil", age: 20 };
// console.log(user)
// const editedUser = {
//     isUser: true,
//     ...user
// }
// console.log(editedUser);

// const user = {
//     name: "Akhil",
//     age: 21,
//     address: "India",
//     mobile: 9879733657,
//     email: "akhilshah1902@gmail.com",
//     password:"akhil1911"
// }

// for (const [key,value] of Object.entries(user)) {
//     console.log(key + " : " + value);
// }


// const numbers = [10, 20, 30, 40, 50];

// const total = numbers.reduce((curr,acc) => {
//     return curr + acc;
// }, 0)

// console.log(total);