document.getElementById("time").innerHTML = new Date().toLocaleDateString(
  "en-us",
  { weekday: "long", year: "numeric", month: "short", day: "numeric" }
);

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const todo = document.getElementById("taskInput").value;
  console.log(todo);
});
