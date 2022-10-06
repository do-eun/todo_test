import React, {useState} from 'react';
import './App.css';

function App() {
  const [todo, setTodo] =useState('');
  const [todos, setTodos] = useState([])

  const onChange = (event) => {
    setTodo(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === '') {
      return;
    }
    setTodos((todos) => [todo, ...todos]);
    setTodo('');
  };
	console.log(todos);

  return (
    <div>
      <form className='putBox' onSubmit={onSubmit}>
        <input type="text" value={todo} onChange={onChange} />
        <button>추가하기</button>
      </form>
      <h1>Todo List</h1>
      <div className='listBox'>
        {todos.map((todos) => {
          return (
            <div className="square" key={todos}>{todos}</div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
