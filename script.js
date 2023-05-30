document.getElementById("date").innerHTML = new Date().toLocaleDateString(
  "en-us",
  { weekday: "long", year: "numeric", month: "short", day: "numeric" }
);

let todos = JSON.parse(localStorage.getItem("todo")) || [];

function randerTodos() {
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";

  todos.forEach((todo, idx) => {
    const listItem = `
        <li class="list-group-item fs-4 p-3">
          <input class="form-check-input me-1 done-checked" id="todo-${idx}" type="checkbox" ${
      todo.completed ? "checked" : ""
    }/>
          <label class="form-check-label ${
            todo.completed ? "strike" : ""
          }" for="todo-${idx}">
            ${todo.todo}
          </label>
        </li>  
    `;

    todoList.innerHTML += listItem;
  });
}

function handleFormSubmit(e) {
  e.preventDefault();
  const todoInput = document.getElementById("taskInput");
  const todo = todoInput.value.trim();

  if (todo !== "") {
    const newTodo = {
      todo,
      completed: false,
    };
    // console.log(newTodo);
    todos.push(newTodo);
    saveTodos();
    randerTodos();
    todoInput.value = "";
    todoInput.focus();
  }
}

function saveTodos() {
  localStorage.setItem("todo", JSON.stringify(todos));
}

function handleClearAll() {
  todos = [];
  saveTodos();
  randerTodos();
}

function handleCheckBoxClick(e) {
  const checkbox = e.target;

  const index = parseInt(checkbox.id.split("-")[1]);
  todos[index].completed = checkbox.checked;
  saveTodos();
  randerTodos();
}

document.getElementById("form").addEventListener("submit", handleFormSubmit);
document.getElementById("clear-all").addEventListener("click", handleClearAll);
document
  .getElementById("todo-list")
  .addEventListener("click", handleCheckBoxClick);

randerTodos();
