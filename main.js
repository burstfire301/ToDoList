function addTask() {
    // Get the value of the text input field
    var newTaskDescription = document.getElementById("newTaskTextbox").value;

    // Create a new list item 
    var newTask = document.createElement("li");
    newTask.appendChild(document.createTextNode(newTaskDescription));

    // Create delete button  
    var deleteTaskButton = document.createElement("button");
    deleteTaskButton.innerHTML = "Delete task";
    deleteTaskButton.onclick = function() {
        deleteTask(newTask);
    };

    // Append delete button to list item
    newTask.appendChild(deleteTaskButton);

    // Append list item to the unordered list
    document.getElementById("toDoList").appendChild(newTask);

    // Clear the text input field
    document.getElementById("newTaskTextbox").value = "";
}

function deleteTask(item) {
    item.remove();
}
