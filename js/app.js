// store todo list
let taskList = [];
// get DOM elements
let taskListDOM = document.querySelector('todo-list');
let taskInputDOM = document.querySelector('todo-input');

function addTask() {
  // store input's value
  let taskText = taskInputDOM.nodeValue;
  taskList.push(taskText);

  renderNewTask(taskText, taskList.length - 1);
  taskText.value = '';

}
function renderNewTask(text, index) {
  const newTaskDOM = document.createElement('li');
  newTaskDOM.id = index;
  newTaskDOM.innerHTML = text;
  taskListDOM.appendChild(newTaskDOM);
  // append edit and delete button to the todo task
  appendOptionButtons(index, newTaskDOM);
}

function deleteTask(index) {
  taskList.splice(index, 1);
  let taskToDelete = document.getElementById(`${index}`);
  taskListDOM.removeChild(taskToDelete);
}

function addEditField(index) {
  let TaskEdit = document.getElementById(`${index}`);
  let editInput = document.createElement('input');
  editInput.type = 'text';
  editInput.id = `edit${index}`;
  editInput.className = 'edit-input';
  editInput.placeholder = 'Edit the task';
  // create submit change button
  let submitBtn = document.createElement('button');
  submitBtn.innerHTML = 'Update Task';
  submitBtn.onclick = function() {
    updateTask(index);
  }
  // add buttons to DOM 
  TaskEdit.appendChild(editInput);
  TaskEdit.appendChild(submitBtn);
}

function updateTask(index) {
  let editInput = document.getElementById(`edit${index}`);
  let updatedTask = editInput.value;
  taskList[index] = updateTask;
  // update value in the DOM
  let task = document.getElementById(`${index}`);
  task.innerHTML = updatedTask;
  appendOptionButtons(index, task);

}
