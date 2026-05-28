
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <strong>${task.name}</strong> - Prioridade: ${task.priority}
            <div class="actions">
                <button onclick="editTask(${index})">Editar</button>
                <button onclick="removeTask(${index})">Excluir</button>
            </div>
        `;

        taskList.appendChild(li);
    });
}

function addTask() {
    const input = document.getElementById("taskInput");
    const priority = document.getElementById("priority").value;

    if(input.value.trim() === "") {
        alert("Digite uma tarefa válida!");
        return;
    }

    tasks.push({
        name: input.value,
        priority: priority
    });

    input.value = "";

    saveTasks();
    renderTasks();
}

function removeTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

function editTask(index) {
    const newTask = prompt("Editar tarefa:", tasks[index].name);

    if(newTask && newTask.trim() !== "") {
        tasks[index].name = newTask;
        saveTasks();
        renderTasks();
    }
}

renderTasks();
