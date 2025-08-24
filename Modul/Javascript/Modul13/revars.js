const number = [1, 2, 3, 4, 5];
//reverse = [5,4,3,2,1]

const reversed = [];
// for (let i = 0; i < number.length; i++) {
//   console.log(number[i]);
//   reversed.unshift(number[i]);
// }


// for (let i =number.length-1; i>=0; i--){
//     reversed.push(number[i]);
// }
// console.log(reversed);

for (const num of number){
    reversed.unshift(num);
}

console.log(reversed);
