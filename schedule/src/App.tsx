import React from 'react';
import Todo from './components/Todo';
import './App.css';

function App() {
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Sukho's Schedule</h1>
      <hr />
      <div className='container'>
        <Todo />
      </div>
    </div>
  );
}

export default App;
