const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

function createTask(taskText, isDone) {
  const item = document.createElement("li");

  const text = document.createElement("span");
  text.textContent = taskText;

  if (isDone) {
    text.classList.add("done");
  }

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete");

  item.appendChild(text);
  item.appendChild(deleteButton);
  taskList.appendChild(item);
}

addButton.addEventListener("click", function () {
  const taskText = taskInput.value;

  if (taskText === "") {
    return;
  }

  createTask(taskText);
  taskInput.value = "";
  saveTasks();
});
taskList.addEventListener("click", function (event) {
  if (event.target.tagName === "SPAN") {
    event.target.classList.toggle("done");
    saveTasks();
  }

  if (event.target.classList.contains("delete")) {
    event.target.parentElement.remove();
    saveTasks();
  }
});
taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addButton.click();
  }
});
function saveTasks() {
  const tasks = [];
  const items = taskList.querySelectorAll("li");

  for (const item of items) {
    const span = item.querySelector("span");
    tasks.push({
      text: span.textContent,
      done: span.classList.contains("done")
    });
  }

  localStorage.setItem("tasks", JSON.stringify(tasks));
}
function loadTasks() {
  const saved = localStorage.getItem("tasks");

  if (saved === null) {
    return;
  }

  const tasks = JSON.parse(saved);

  for (const task of tasks) {
    createTask(task.text, task.done);
  }
}

loadTasks();