// const person = {
//     name : 'Salim',
//     fruit : 'Dalim',
//     dish : 'Halim',
//     friend : ['alim','colim','tolim'],
//     isRich : false,
//     money : 4500,
// };

// const personJson = JSON.stringify(person);
// console.log(personJson , typeof personJson)

const lodData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
};

const loadPost = () => {
  const ulrl = "https://jsonplaceholder.typicode.com/posts";

  fetch(ulrl)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      displayPost(json);
    });
};

const displayPost = (post) => {
  post.forEach((post) => {
    console.log(post);
  });
};
