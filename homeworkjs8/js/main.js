"use strict";

const todoKeys = {
  id: "id",
  text: "text",
  is_completed: "is_completed",
};

const todosData = [];

const errTodoNotFound = todoId => `Todo with id ${todoId} not found`;

const getNewTodoId = todos =>
  todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;

const createTodo = (todos, text) => {
  const newTodo = {
    [todoKeys.id]: getNewTodoId(todos),
    [todoKeys.text]: text,
    [todoKeys.is_completed]: false,
  };
  todos.push(newTodo);
  return newTodo;
};

const completeTodoById = (todos, todoId) => {
  const todo = todos.find(todo => todo[todoKeys.id] === todoId);

  if (!todo) {
    console.error(errTodoNotFound(todoId));
    return null;
  }
  todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
  return todo;
};

const deleteTodoById = (todos, todoId) => {
  const todoIndex = todos.findIndex(todo => todo[todoKeys.id] === todoId);
  if (todoIndex === -1) {
    console.error(errTodoNotFound(todoId));
    return todos;
  }
  todos.splice(todoIndex, 1);
  return todos;
};


const form = document.querySelector(".form")
const input = document.querySelector(".input")
const todoList = document.querySelector(".todos");


function createTodoElement(todo) {
  const item = document.createElement("li");
  item.classList.add("todo");
  item.dataset.id = todo.id;

  item.innerHTML = `
    <div class="todo-text">${todo.text}</div>
    <div class="todo-actions">
      <button class="button-complete button">&#10004;</button>
      <button class="button-delete button">&#10006;</button>
    </div>
  `;

  if (todo.is_completed) {
    item.classList.add("done");
  }

  return item;
}


function handleCreateTodo(todosData, text) {
  if (text.trim() === "") return;

  const newTodo = createTodo(todosData, text); 
  const todoElement = createTodoElement(newTodo); 
  todoList.append(todoElement);
}

function handleCreateTodo(todosData, text) {
  if (text.trim() === "") return;

  const newTodo = createTodo(todosData, text);
  const todoElement = createTodoElement(newTodo);
  todoList.append(todoElement);
}


form.addEventListener("submit", (e) => {
  e.preventDefault();
  handleCreateTodo(todosData, input.value);
  input.value = "";
});


todoList.addEventListener("click", (e) => {
  const item = e.target.closest(".todo");
  if (!item) return;

  const id = Number(item.dataset.id);

  if (e.target.classList.contains("button-complete")) {
    const updated = completeTodoById(todosData, id);
    if (updated) item.classList.toggle("done");
  }

  if (e.target.classList.contains("button-delete")) {
    deleteTodoById(todosData, id);
    item.remove();
  }
});






// При помощи метода querySelector получаем элементы .form, .input и .todos
// Создаем функцию createTodoElement(text), которая будет создавать todo в виде разметки
// Создаем функцию handleCreateTodo(todos, text), которая будет вызывать createTodo и createTodoElement
