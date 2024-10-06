const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

render();

function render() {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const { name, date } = todoObject;

        const html = `<div>${name}</div><div>${date}</div>
            <button onclick="deleteTodo(${i})" class="deletbuton">Delete</button>`;
        
        todoListHTML += html;
    }

    document.querySelector('.js-todolist').innerHTML = todoListHTML;
}

function addTodo() {
    const inputElement = document.querySelector('.name');
    const name = inputElement.value.trim();

    const dateInput = document.querySelector('.js-date');
    const date = dateInput.value.trim();

    // Validate input values
    if (!name || !date) {
        alert('Error: Name and date cannot be blank.');
        return;
    }

    todoList.push({ name, date });

    // Save the updated todo list to localStorage
    localStorage.setItem('todoList', JSON.stringify(todoList));

    // Clear the input fields
    inputElement.value = '';
    dateInput.value = '';

    render();
}

// Function to delete a todo item and update localStorage
function deleteTodo(index) {
    todoList.splice(index, 1); // Remove the todo item from the list
    localStorage.setItem('todoList', JSON.stringify(todoList)); // Update localStorage
    render(); // Re-render the list
}
