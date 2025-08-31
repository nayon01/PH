document
  .getElementById("btn-update-title")
  .addEventListener("click", function () {
    const pageTitleElement = document.getElementById("page-title");
    pageTitleElement.innerText = "Hello Bangladesh";
  });

document
  .getElementById("btn-update-prod")
  .addEventListener("click", function () {
    const pTitle = document.getElementById("prod-title");
    pTitle.innerText = "Laptop";
  });

// set event listener

document.getElementById("btn-update").addEventListener("click", function () {
  const nameInput = document.getElementById("input-name");
  const name = nameInput.value;

  // set the name
  const setName = document.getElementById("nameChange");
  setName.innerText = name;
});

// document.getElementById('btn-update')
//     .addEventListener('click', function () {
//         console.log('Update button clicked');
//         const nameInput = document.getElementById('input-name');
//         const inName = nameInput.value;

//         //set the name
//         const nameP = document.getElementById('nameChange')
//         nameP.innerText = inName;

//     })
