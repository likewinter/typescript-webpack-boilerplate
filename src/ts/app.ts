import { TodoList, renderTodoList } from './todo'

const app = document.getElementById('app')

const list: TodoList = [
  {
    done: true,
    text: 'Make Webpack TypeScript boilerplate'
  }, {
    done: false,
    text: 'Do something good with it'
  }
]

renderTodoList(list, app)
