document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');  // Select the Add Task button
    const taskInput = document.getElementById('task-input');    // Select the task input field
    const taskList = document.getElementById('task-list');      // Select the task list

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get the input value and trim whitespace

        // If the input is empty, alert the user and do not proceed
        if (taskText === "") {
            alert('Please enter a task');
            return;
        }

        // Create a new list item (li) element
        const listItem = document.createElement('li');
        listItem.textContent = taskText;  // Set the text of the li element

        // Create a remove button for the list item
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';  // Add class for styling

        // Add click event listener to the remove button to delete the task
        removeButton.onclick = function() {
            taskList.removeChild(listItem);  // Remove the parent list item
        };

        // Append the remove button to the list item
        listItem.appendChild(removeButton);

        // Append the list item to the task list (ul)
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    }

    // Add an event listener to the Add Task button to add tasks on click
    addButton.addEventListener('click', addTask);

    // Add an event listener to the input field to allow adding tasks by pressing Enter
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
