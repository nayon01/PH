const number =[5,2,3,6,8,0,9]
console.log(number);
number.sort();
console.log(number);


const age =[12,34,55,22,100,26]
// sort A to Z /ascending
const sorted_ages= age.sort(function(a,b){return a-b})
console.log (sorted_ages)

// sort Z to A / descending 
const sort_ages = age.sort(function (a, b){return b-a})