document.querySelector("#add-post-submit").addEventListener('click', async (event) => {
  console.log(event);
  const element = event.target;
  console.log(element);

  const title = element.parentNode.parentNode.querySelector("#post-title").value.trim();
  const content = element.parentNode.parentNode.querySelector("#post-content").value.trim();

  if(title && content) {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({title, content}),
      headers: {"Content-Type": "application/json"}
    });

    if(res.ok) {
      document.location.reload();
    } else {
      alert("Couldn't add new post: " + res.statusText);
    }
  }
});

const editModal = document.querySelector("#edit-post-modal");
let post_id;
editModal.addEventListener("show.bs.modal", async (event) => {
  const button = event.relatedTarget;
  post_id = button.getAttribute("data-bs-post_id");

  const res = await fetch(`/api/posts/${post_id}`, {
    method: "GET"
  });

  const {title, content} = await res.json();

  const titleInput = editModal.querySelector("#post-title");
  const contentInput = editModal.querySelector("#post-content");

  titleInput.value = title;
  contentInput.value = content;
});

document.querySelector("#edit-post-submit").addEventListener("click", async (event) => {
  const element = event.target;

  const title = element.parentNode.parentNode.querySelector("#post-title").value.trim();
  const content = element.parentNode.parentNode.querySelector("#post-content").value.trim();
  
  if(title && content) {
    const res = await fetch(`/api/posts/${post_id}`, {
      method: "PUT",
      body: JSON.stringify({title, content}),
      headers: {"Content-Type": "application/json"}
    });

    if(res.ok) {
      document.location.reload();
    } else {
      alert("Couldn't edit post: " + res.statusText);
    }
  }

})

document.querySelector("#delete-post-btn").addEventListener("click", async (event) => {
  const element = event.target;

  const title = element.parentNode.parentNode.querySelector("#post-title").value.trim();
  const content = element.parentNode.parentNode.querySelector("#post-content").value.trim();
  
  if(title && content) {
    const res = await fetch(`/api/posts/${post_id}`, {
      method: "DELETE",
    });

    if(res.ok) {
      document.location.reload();
    } else {
      alert("Couldn't delete post: " + res.statusText);
    }
  }

})