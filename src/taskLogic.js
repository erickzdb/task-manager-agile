
function addTask(tasks, taskName) {
    if (!taskName || taskName.trim() === "") {
        return false;
    }

    tasks.push(taskName);
    return true;
}

function removeTask(tasks, index) {
    tasks.splice(index, 1);
    return tasks;
}

module.exports = {
    addTask,
    removeTask
};
