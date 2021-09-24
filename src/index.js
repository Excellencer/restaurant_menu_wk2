import "./styles.css";

document.getElementById("add-comment").addEventListener("click", addComment);
document
  .getElementById("remove-comments")
  .addEventListener("click", removeComments);

function addComment() {
  let comment = document.getElementById("commentInput").value;
  document.getElementById("commentInput").value = "";
  let ul = document.getElementById("commentList");
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(comment));
  ul.appendChild(li);
}

function removeComments() {
  if (window.confirm("Are you sure?")) {
    document.getElementById("commentList").innerHTML = "";
  }
}
