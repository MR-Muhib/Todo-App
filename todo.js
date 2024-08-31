//Element Finding
const container = document.querySelector(".container");
const hero = document.querySelector(".hero");
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#input");
const todoButton = document.querySelector("#submitBtn");
const toDoLists = document.getElementById("lists");
const massageElement = document.getElementById("message");

//showMassage
const showMassage = (text, status) => {
  massageElement.textContent = text;
  //calss adding
  massageElement.classList.add(`bg-${status}`);
  setTimeout(() => {
    massageElement.textContent = "";
    massageElement.classList.remove(`bg-${status}`);
  }, 500);
};

//createTodo element
const createTodo = (todoId, todoValue) => {
  const todoElement = document.createElement("li");

  //class list adding
  todoElement.classList.add("li-style");

  todoElement.li = todoId;
  todoElement.innerHTML = `<span>${todoValue}</span>
<span> <button class="btn" id="deleteBtn"><i class="fa fa-trash"></i>
</button> </span>`;

  const deletebutton = todoElement.querySelector("#deleteBtn");
  deletebutton.addEventListener("click", function (event) {
    const selectTodo = event.target.parentElement.parentElement.parentElement;

toDoLists.removeChild(selectTodo);

});

  //adding todoList in html
  toDoLists.appendChild(todoElement);
};

// addFunction
const addTodo = (event) => {
  event.preventDefault();
  const todoValue = todoInput.value;

  //unique Id create...
  const todoId = Date.now().toString();
  console.log(todoId);

  //create todo function
  createTodo(todoId, todoValue);

  showMassage("todo is added", "success");

  // To Do adding localStorage
  const todos = localStorage.getItem("mytodos")
    ? JSON.parse(localStorage.getItem("mytodos"))
    : [];
  todos.push({ todoId, todoValue });
  localStorage.setItem("mytodos", JSON.stringify(todos));
};

todoInput.value = "";
//adding listener
todoForm.addEventListener("submit", addTodo);
