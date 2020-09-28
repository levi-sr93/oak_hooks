import React, {useState} from 'react';

const AddNewTodo = ({addTodo}) => {

  const [todos, setTodos] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    console.log(todos)
    addTodo(todos);
    setTodos('');

  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">To do  </label>
      <input type="text" value={todos} id="todo" onChange={event => setTodos(event.target.value) } />
      <input type="submit" value="Submit"/>
    </form>
  )
}

export default AddNewTodo;