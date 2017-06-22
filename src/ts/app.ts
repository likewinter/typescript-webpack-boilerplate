import {TodoList, renderTodoList} from './todo'

const app = document.getElementById('app')

const list: TodoList = [
  {
    done: true,
    text: 'Make Webpack TypeScript boilerplate'
  }, {
    done: false,
    text: 'Improve it'
  }
]

renderTodoList(list, app)
