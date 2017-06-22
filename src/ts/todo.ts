export interface Todo {
  done: boolean
  text: string
}

export type TodoList = Todo[]

export function renderTodoList (list: TodoList, el: HTMLElement) {
  let html = `
    <h1>My Todo List</h1>
    <ul>`
  list.forEach((task) => {
    html += `
    <li class="${task.done ? 'done' : ''}">
      <span>${task.text}</span>
    </li>`
  })
  html += `</ul>`

  el.innerHTML = html
}
