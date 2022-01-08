let todoList = document.querySelector('.todo-list'); //список задача ul
let items = todoList.children; // li списка задач
let emptyTasks = document.querySelector('.empty-tasks'); //скрытый текст. появляется когда задачи выполнены
let addForm = document.querySelector('.add-form'); // форма добавления новой задачи
let addFormInput = addForm.querySelector('.add-form-input'); // поле ввода новой задачи
let formTemplate = document.querySelector('#task-template').content; // шаблон новой задачи
let todoListItem = formTemplate.querySelector('.todo-list-item'); // li новой задачи

toggleEmptyListMessage = () => {
  // если длина списка задач равна 0, появляется emptyTasks
  if (items.length === 0) {
    emptyTasks.classList.remove('hidden');
  } else {
    emptyTasks.classList.add('hidden');
  }
};

addCheckHandler = (item) => {
  // при нажатии чекбокса  задача удаляется из списка и проверяется длина списка задач
  let checkbox = item.querySelector('.todo-list-input');
  checkbox.addEventListener('change', function () {
    item.remove();
    toggleEmptyListMessage();
  });
};

for (let i = 0; i < items.length; i++) {
  // цикл для функции удаления задачи
  addCheckHandler(items[i]);
}

addForm.addEventListener('submit', (evt) => {
  if (addFormInput.value.length > 30) {
    //проверка что не больше 30 символов
    return;
  }
  // событие для формы отправки
  evt.preventDefault(); // отмена действия по умолчанию

  let taskText = addFormInput.value; //текст который введен в форму воода
  let task = todoListItem.cloneNode(true); // клонирование li из шаблона
  let taskDescription = task.querySelector('span'); //поиск элемента спан, текст который будет введен
  taskDescription.textContent = taskText; // изменение текста в спане
  addCheckHandler(task); // при нажатии чекбокса  задача удаляется из списка и проверяется длина списка задач

  todoList.appendChild(task); // в список задач добавляется новая задача
  toggleEmptyListMessage(); //роверяется длина списка задач
  addFormInput.value = ''; //очистка поля ввода задачи
  counter.value = 0; // обнуляет счетчик символов при добавлении задачи
});
let counter = document.querySelector('.counter'); // счетчик символов воода 0

addFormInput.addEventListener('input', () => {
  // поле ввода считает сколько введено символов и меняет счетчик символов, если символов 30 то счетчик меняет цвет
  counter.textContent = addFormInput.value.length;

  if (addFormInput.value.length > 29) {
    counter.style.color = 'red';
  } else {
    counter.style.color = 'black';
  }
});
