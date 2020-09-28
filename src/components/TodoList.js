import React,{useState} from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([
    {text: 'Pay bills', id: 1},
    {text: 'Study react', id: 2},
    {text: 'Feed the Dog', id: 3}
  ])

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        text: 'Learn Hooks',
        id: Math.random() //or can use UUID
      }
    ])
  }

  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return (
          <li key={todo.id}>{todo.text}</li>
          )
        })}
      </ul>
      <button onClick={addTodo}>Add Todo</button>
    </div>
  )
}

export default TodoList;