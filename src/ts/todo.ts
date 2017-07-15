interface Todo {
  done: boolean
  text: string
}

export type TodoList = Todo[]

export function renderTodoList (todos: TodoList, el: HTMLElement) {
  const list: string[] = todos.map(
    task => `<li class="${task.done ? 'done' : ''}">${task.text}</li>`
  )
  el.innerHTML = `<h1>My Todo List</h1>\n<ul>${list.join('\n')}</ul>`
}
