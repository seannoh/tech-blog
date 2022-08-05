const commentForms = document.querySelectorAll(".submit-btn");

const commentHandler = async (e) => {
  e.preventDefault();
  const element = e.target;
  console.log(element);

  const content = element.parentNode.parentNode.querySelector("#comment-text-box").value.trim();
  if(!content) {
    return;
  }
  const post_id = element.parentNode.parentNode.parentNode.parentNode.dataset.postid;

  console.log(content, post_id);

  const res = await fetch("/api/comments", {
    method: "POST",
    body: JSON.stringify({content, post_id}),
    headers: {"Content-Type": "application/json"}
  });

  if(res.ok) {
    document.location.reload();
  } else {
    alert("Unable to post comment: " + res.statusText)
  }


}

commentForms.forEach((element) => {
  element.addEventListener('click', commentHandler);
});

document.addEventListener('submit', commentHandler);