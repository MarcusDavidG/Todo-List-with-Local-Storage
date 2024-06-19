// JavaScript for todo list functionality
document.addEventListener("DOMContentLoaded", () => {
  const todoForm = document.getElementById("todo-form");
  const todoInput = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");

  // Load tasks from local storage
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Function to render tasks
  function renderTasks() {
    todoList.innerHTML = "";
    tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.innerHTML = `<span>${task}</span><button class="delete-btn" data-index="${index}">Delete</button>`;
      todoList.appendChild(li);
    });
    updateLocalStorage();
  }

  // Function to add a task
  todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const task = todoInput.value.trim();
    if (task !== "") {
      tasks.push(task);
      renderTasks();
      todoInput.value = "";
    }
  });

  // Function to delete a task
  todoList.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
      const index = event.target.getAttribute("data-index");
      tasks.splice(index, 1);
      renderTasks();
    }
  });

  // Function to update local storage
  function updateLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Initial render
  renderTasks();
});
