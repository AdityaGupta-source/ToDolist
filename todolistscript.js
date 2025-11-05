
 const  todoList = JSON.parse(localStorage.getItem('List')) || [{
    name: 'make dinner',
    dueDate: '2022-12-22'
  }, {
    name: 'wash dishes',
    dueDate: '2022-12-22'
  }];

renderTodoList();
function keydownlog() {
  if (event.key === "Enter") {
    todolog();
  }
}
function todolog() {
  let todolist = document.querySelector(".js-todo-input");
  const dateInputElement = document.querySelector('.js-todo-date');
  const dueDate = dateInputElement.value;

  const name = todolist.value;
  todoList.push({
    name,
    dueDate
  });
  todolist.value = "";
  renderTodoList();
  saveList();
}
function saveList(){
  localStorage.setItem('List',JSON.stringify(todoList));
}
function renderTodoList() {
  let todoListHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    const todoAccess = todoList[i];
    const name = todoAccess.name;
    const dueDate = todoAccess.dueDate;
    const html = `
        <div>${name}</div>
        <div> ${dueDate}</div>
        <button onclick="
        todoList.splice(${i},1);
        renderTodoList();
        saveList();
        " class="delete-button"
        >Delete</button>
        `;
    todoListHTML += html;
  }
document.querySelector('.js-todo-display').innerHTML = todoListHTML;
}