import "./styles.css";

document.getElementById("add-comment").addEventListener("click", addComment);
document
  .getElementById("remove-comments")
  .addEventListener("click", removeComments);

function addComment() {
  let comment = document.getElementById("commentInput").value;
  let rating = 1;
  switch (parseInt(document.getElementById("rating").value, 10)) {
    case 1:
      rating = "Excellent";
      break;
    case 2:
      rating = "Great";
      break;
    case 3:
      rating = "Good";
      break;
    case 4:
      rating = "Above average";
      break;
    default:
      rating = "Excellent";
  }

  document.getElementById("commentInput").value = "";
  let ul = document.getElementById("commentList");
  let li = document.createElement("li");

  let commentDiv = document.createElement("div");
  commentDiv.classList.add("comment");

  let commentRating = document.createElement("p");
  commentRating.classList.add("comment-rating");
  commentRating.appendChild(document.createTextNode(rating));

  let commentText = document.createElement("p");
  commentText.classList.add("comment-text");
  commentText.appendChild(document.createTextNode(comment));

  let commentRemove = document.createElement("button");
  commentRemove.classList.add("remove-comment");
  commentRemove.textContent = "Remove";

  commentDiv.appendChild(commentRating);
  commentDiv.appendChild(commentText);
  commentDiv.appendChild(commentRemove);

  li.appendChild(commentDiv);
  ul.appendChild(li);
}

function removeComments() {
  if (window.confirm("Are you sure?")) {
    document.getElementById("commentList").innerHTML = "";
  }
}
