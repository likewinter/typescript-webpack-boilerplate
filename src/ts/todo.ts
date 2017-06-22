interface Todo {
  done: boolean
  text: string
}

export type TodoList = Todo[]

export function renderTodoList (todos: TodoList, el: HTMLElement) {
  let list = ''
  todos.forEach((task) => {
    list += `<li class="${task.done ? 'done' : ''}">${task.text}</li>`
  })

  el.innerHTML = `<h1>My Todo List</h1>\n<ul>${list}</ul>`
}
