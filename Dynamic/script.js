document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('task-list');
        const newTask = document.createElement('li');

        newTask.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-task">Delete</button>
        `;

        taskList.appendChild(newTask);
        taskInput.value = '';

        const deleteButton = newTask.querySelector('.delete-task');
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(newTask);
        });
    }
});
