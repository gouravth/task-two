// Scroll to the To-Do List section
function scrollToTodo() {
    document.getElementById("todo-section").scrollIntoView({ behavior: "smooth" });
}

// Add Task Function
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let taskList = document.getElementById("taskList");

    let li = document.createElement("li");
    li.style.animation = "fadeIn 0.3s ease-in-out";

    let span = document.createElement("span");
    span.textContent = taskText;
    span.onclick = function () {
        this.classList.toggle("completed");
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = function () {
        li.style.animation = "fadeOut 0.3s ease-in-out";
        setTimeout(() => taskList.removeChild(li), 300);
    };

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
}
