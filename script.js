const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", function () {
  const taskText = taskInput.value;

  if (taskText === "") {
    return;
  }

  const item = document.createElement("li");
  item.textContent = taskText;
  taskList.appendChild(item);

  taskInput.value = "";
});
