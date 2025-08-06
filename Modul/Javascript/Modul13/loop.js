
// let num = 0;
// while (num <5) {
//   console.log('Looooooping',num);
//   num++;
// }


// let num2 = 1;
// while (num2 <=30){
//     console.log(num2);
//     num2++;
// }

// let sum = 12;
// for ( let i =11; i<=20; i++ ){
//   sum = sum + i;
//   console.log(i);  
// }

// for (let i =0; i <10; i++){
//   if( i % 2 !== 0){
//     console.log(i);
//   }
// }


// for(let i = 1; i <=30; i++){
//   if(i % 5 === 0){
//     console.log('Multiple of 5:', i);
//   }
// }


// for(let i = 1; i <=30; i++){
//   if(i % 5 === 0 || i % 3 === 0){
//     console.log('Multiple of 5:', i);
//   }
// }

for(let i = 1; i <=30; i++){
  if(i % 5 === 0 && i % 3 === 0){
    console.log('Multiple of 5:', i);
  }
}


// Problem - 01  Divide the Asset 

var area = 800;
var share = area / 2;
console.log(area);
console.log(share);


//Problem - 02  Cycle or  Laptop

var money = 10000;

if (money >= 25000) {
  console.log("Laptop");
} else if (money >= 10000) {
  console.log("Cycle");
} else {
  console.log("Chocolate");
}



//Problem 03 - Medicine Planner 
var lastDay = 11;
console.log(lastDay);

for (let day = 1; day <= lastDay; day++) {  
  if (day % 3 === 0) {
    console.log(day + " - medicine");
  } else {
    console.log(day + " - rest");
  }
}