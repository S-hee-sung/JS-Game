import { useCallback, useRef, useState } from "react";
import { createGlobalStyle } from "styled-components";
import TodoInsert from "./component/TodoInsert";
import TodoList from "./component/TodoList";
import TodoTemplate from "./component/TodoTemplate";
import { reset } from "styled-reset";
import TodoHead from "./component/TodoHead";
import { v4 as uuidv4 } from "uuid";



const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    background: #e9ecef;
  }
`;

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트 공부하기',
      checked: true
    },
    {
      id: 2,
      text: '리액트 게임 만들기',
      checked: true
    },
    {
      id: 3,
      text: '리액트 접기?',
      checked: false
    }
  ]);

  const nextId = useRef(4);

  const handleInsert = useCallback((text) => {
    const todo = {
      id: uuidv4(),
      text,
      checked: false
    };

    setTodos(todos.concat(todo)); 

    nextId.current += 1; 
  
  },[todos]);

  const handleRemove = useCallback((id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  } ,[todos])

  const handleToggle = useCallback((id) => {
    setTodos(todos.map((todo) => 
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
  ));
  },[todos]);

  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList todos={todos} onRemove={handleRemove} onToggle={handleToggle} />
        <TodoInsert onInsert={handleInsert} />
      </TodoTemplate>
    </>  
  );
}

export default App;
