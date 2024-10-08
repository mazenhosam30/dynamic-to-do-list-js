document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage when page loads
    loadTasks();

    // Event listener to add tasks when the button is clicked
    addButton.addEventListener('click', () => addTask(taskInput.value));

    // Event listener to allow adding tasks by pressing "Enter"
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(taskInput.value);
        }
    });

    // Function to add a new task
    function addTask(taskText, save = true) {
        taskText = taskText.trim();  // Remove leading/trailing whitespace
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create a new list item (li)
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn');

        // Add remove button to li
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Event listener to remove the task
        removeButton.addEventListener('click', () => {
            removeTask(li, taskText);
        });

        // Clear the input field
        taskInput.value = "";

        // Save task to Local Storage if not loaded from storage
        if (save) {
            saveTaskToLocalStorage(taskText);
        }
    }

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // False to avoid saving the task again to Local Storage
    }

    // Function to save a task to Local Storage
    function saveTaskToLocalStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Function to remove a task and update Local Storage
    function removeTask(taskElement, taskText) {
        taskList.removeChild(taskElement);

        // Remove the task from Local Storage
        let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
});
