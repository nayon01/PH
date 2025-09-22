const loadPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      displayPost(data);
    })
    .catch((error) => console.error("Error fetching posts:", error));
};

const displayPost = (posts) => {
  // 1. get the container
  const postContainer = document.getElementById("post-Container");

  // clear old content before adding new ones
  postContainer.innerHTML = "";

  posts.forEach((post) => {
    // 2. create HTML element
    const li = document.createElement("li");

    li.innerHTML = `
      <strong>${post.title}</strong><br>
      <small>${post.body}</small>
    `;

    postContainer.appendChild(li);
  });
};

// Call loadPost
  loadPost();
