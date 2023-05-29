document.getElementById("time").innerHTML = new Date().toLocaleDateString(
  "en-us",
  { weekday: "long", year: "numeric", month: "short", day: "numeric" }
);

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const todo = document.getElementById("taskInput").value;
  console.log(todo);
});

const todoArray = [];

function getTodoList(task) {
  return `
        <li class="list-group-item p-3">
          <input class="form-check-input me-1" id="todo-1" type="checkbox" />
          <label class="form-check-label" for="todo-1">
            <strike>${task}</strike>
          </label>
        </li>  
    `;
}
