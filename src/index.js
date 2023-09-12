document.addEventListener("DOMContentLoaded", function () {
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskUl = document.getElementById("tasks");

  newTaskForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const newTaskDescription = document.getElementById("new-task-description").value;
    if (newTaskDescription.trim() !== "") {
      const newTask = document.createElement("li");
      newTask.innerText = newTaskDescription;
      appendNewTask(newTask);
      event.target.reset();
    }
  });

  const appendNewTask = (task) => {
    newTaskUl.appendChild(task);
  };
});
