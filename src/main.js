'use strict';

class Model {
  constructor() {
    // The state of the model, an array of todo objects, prepopulated with some data
    this.todos = [
      {id: 1, text: 'First one', complete: false},
      {id: 2, text: 'Second one', complete: false},
    ]
  }

  addTodo(todoText) {
    const todo = {
      id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
      text: todoText,
      complete: false,
    }

    this.todos.push(todo)
  }

  // Map through all todos, and replace the text of the todo with the specified id
  editTodo(id, updatedText) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? {id: todo.id, text: updatedText, complete: todo.complete} : todo,
    )
  }

  // Filter a todo out of the array by id
  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id)
  }

  // Flip the complete boolean on the specified todo
  toggleTodo(id) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? {id: todo.id, text: todo.text, complete: !todo.complete} : todo,
    )
  }
}


class View{
  constructor() {
    // root of element
    this.app = this.getElement('#root')

    // title of element
    this.title = this.createElement('h1')
    this.title.textContent = 'TODO-LIST'
    this.title.textAlignLast = 'center'
    this.title.style.textAlign = 'center'

    // form which includes, input and submit button
    this.form = this.createElement('form')

    this.input = this.createElement('input')
    this.input.type = 'text'
    this.input.placeholder = 'Add todo'
    this.input.name = 'todo'

    this.submitButton = this.createElement('button')
    this.submitButton.textContent = 'Submit'


    // todo list
    this.todoList = this.createElement('ul', 'todo-list')

    // append the input and submit button in form
    this.form.append(this.input, this.submitButton)

    // append the title, form and todoList in the form
    this.app.append(this.title, this.form, this.todoList)
  }

  get _todoText() {
    return this.input.value
  }

  _resetInput() {
    this.input.value = ''
  }

  displayTodos(todos) {
    // delete all notes
    while (this.todoList.firstChild){
      this.todoList.removeChild(this.todoList.firstChild)

      // show default message
      if (todos.length === 0){
        const p = this.createElement('p')
        p.textContent = 'Empty. Add todo?'
        this.todoList.append(p)
      }else {
        // create todo item notes for each todo in state
        todos.forEach(todo => {
          const li = this.createElement('li')
          li.id = todo.id

          // each todo items will have a checkbox which you can toggle
          const checkbox = this.createElement('input')
          checkbox.type = 'checkbox'
          checkbox.checked = todo.complete

          // todo item text will be in a contenteditable span
          const span = this.createElement('span')
          span.contentEditable = true
          span.classList.add('editable')

          // If the todo is complete, it will have a strikethrough
          if (todo.complete){
            const strike = this.createElement('s')
            strike.textContent = todo.text
            span.append(strike)
          }else {
            // otherwise just display the text
            span.textContent = todo.text
          }

          // delete button in items
          const deleteButton = this.createElement('button', 'delete')
          deleteButton.textContent = 'Delete'
          li.append(checkbox, span, deleteButton)

          // append notes to the todo list
          this.todoList.append(li)

        })
      }
    }
  }

// Create an element with an optional CSS class
  createElement(tag, className) {
    const element = document.createElement(tag)
    if (className) element.classList.add(className)

    return element
  }

  // Retrieve an element from the DOM
  getElement(selector) {
    const element = document.querySelector(selector)

    return element
  }
}

class Controller{
  constructor(model, view) {
    this.model = model
    this.view = view

    // display initial todos
    this.onTodoListChanged(this.model.todos)

  }

  handleAddTodo = (todoText) => {
    this.model.addTodo(todoText)
  }

  handleEditTodo = (id, todoText) => {
    this.model.editTodo(id, todoText)
  }

  handleDeleteTodo = (id) => {
    this.model.deleteTodo(id)
  }

  handleToggleTodo = (id) => {
    this.model.toggleTodo(id)
  }

  onTodoListChanged = (todos) => {
    this.view.displayTodos(todos)
  }
}


const app = new Controller(new Model(), new View())
