function addTask() {
    const taskInput = document.getElementById('new-task-input');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }
    const todoList = document.getElementById('todo-list');

    // Create a new list item
    const newTask = document.createElement('li');
    const taskTextNode = document.createTextNode(taskText + ' ');
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.onclick = function() {
        deleteTask(deleteButton);
    };

    newTask.appendChild(taskTextNode);
    newTask.appendChild(deleteButton);

    // Append the new task to the list
    todoList.appendChild(newTask);

    // Clear the input field
    taskInput.value = '';
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}


