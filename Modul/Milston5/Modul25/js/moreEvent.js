// document
//   .getElementById("btn-mouse")
//   .addEventListener("mouseenter", function () {
//     console.log("event triggered");
//     document.getElementById('btn-mouse').style.backgroundColor = "red";
//     document.getElementById('btn-mouse').style.border = "red";

//   });

// const btn = document.getElementById("btn-mouse");

// btn.addEventListener("mouseenter", function () {
//   console.log("event triggered");
//   btn.style.backgroundColor = "red";
//   btn.style.border = "2px solid black";
//   btn.style.borderRadius = "4px";
//   btn.style.padding = "10px 20px";
// });

// const btn2 = document.getElementById("btn-mouse");

// btn2.addEventListener("mouseenter", function () {
//   console.log("Event Check");
//   btn2.style.background = "Yellow";
// });

const userName = document.getElementById("user-name");
const userEmail = document.getElementById("user-email");


userName.addEventListener("focus", function () {
  console.log("Your about to write name")
});

userEmail.addEventListener("focus", function () {
  console.log("Your about to write Email")
});


userName.addEventListener("blur", function () {
  console.log("user done with name")
});

userEmail.addEventListener("blur", function () {
  console.log("User Done With Email")
});
