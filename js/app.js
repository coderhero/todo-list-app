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
  
  taskListDOM.removeChild
}
