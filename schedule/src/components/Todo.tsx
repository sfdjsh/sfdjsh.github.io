import React, { useState } from 'react';
import './Todo.css';

const Todo = () => {
  const [Todos, setTodos] = useState([
    {
      id: 1,
      text: '알고리즘 1문제',
      checked: false
    },
    {
      id: 2,
      text: '기술블로그 1작성',
      checked: false,
    },
    {
      id: 3,
      text: '깃허브 1커밋',
      checked: false
    }
  ])
  return (
    <>
      <h1>Today's Todo</h1>
      { Todos.map((todo) => (
        <>
          <div className='todo-border'>
            <h3 style={{margin:'10px'}}>{todo.text}</h3>
            <input className='check-style' type="checkbox" />
          </div>
        </>
      ))}
    </>
  )
}

export default Todo
