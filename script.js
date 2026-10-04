const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", function () {
  const taskText = taskInput.value;

  if (taskText === "") {
    return;
  }

  const item = document.createElement("li");

  const text = document.createElement("span");
  text.textContent = taskText;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete");

  item.appendChild(text);
  item.appendChild(deleteButton);
  taskList.appendChild(item);

  taskInput.value = "";
});
taskList.addEventListener("click", function (event) {
  if (event.target.tagName === "SPAN") {
    event.target.classList.toggle("done");
  }

  if (event.target.classList.contains("delete")) {
    event.target.parentElement.remove();
  }
});