
const { addTask, removeTask } = require("../src/taskLogic");

test("Deve adicionar tarefa", () => {
    const tasks = [];

    addTask(tasks, "Estudar JavaScript");

    expect(tasks.length).toBe(1);
});

test("Não deve adicionar tarefa vazia", () => {
    const tasks = [];

    const result = addTask(tasks, "");

    expect(result).toBe(false);
});

test("Deve remover tarefa", () => {
    const tasks = ["Tarefa 1", "Tarefa 2"];

    removeTask(tasks, 0);

    expect(tasks.length).toBe(1);
});
