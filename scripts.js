document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const todoForm = document.getElementById('todo-form');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        addTask(taskInput.value);
        taskInput.value = '';
    });

    function addTask(taskName) {
        if (taskName === '') return;

        const listItem = document.createElement('li');
        listItem.className = 'task-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';
        checkbox.addEventListener('change', () => toggleComplete(listItem));

        const taskText = document.createElement('span');
        taskText.className = 'task-text';
        taskText.textContent = taskName;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-btn';
        deleteButton.addEventListener('click', () => deleteTask(listItem));

        listItem.appendChild(checkbox);
        listItem.appendChild(taskText);
        listItem.appendChild(deleteButton);

        todoList.appendChild(listItem);
    }

    function toggleComplete(listItem) {
        listItem.classList.toggle('completed');
    }

    function deleteTask(listItem) {
        todoList.removeChild(listItem);
    }
});
