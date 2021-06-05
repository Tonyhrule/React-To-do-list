import { useState } from 'react';
import List from "./components/List"

const { default: Form } = require('./components/Form');

function App () {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInput = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleSubmit = () => {
    const newTodo = {
      title: inputValue,
      isDone: false,
    };
    const nextTodos = [...todos];
    nextTodos.push(newTodo);
    setTodos(nextTodos);
    setInputValue("");
  };

  const handleDelete = (i) => {
    const nextTodos = [...todos];
    nextTodos.splice(i, 1);
    setTodos(nextTodos);
  };

  const handleDone = (i) => {
    const nextTodos = [...todos];
    nextTodos[i].isDone = true;
    setTodos(nextTodos);
  };

  const handleUndone = (i) => {
    const nextTodos = [...todos];
    nextTodos[i].isDone = false;
    setTodos(nextTodos);
  };

  return (
    <div className="App">
      <List 
      todos={todos}
      handleDelete={handleDelete}
      handleUndone={handleUndone}
      handleDone={handleDone}
      />
      <Form 
      inputValue={inputValue}
      handleInput={handleInput}
      handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;