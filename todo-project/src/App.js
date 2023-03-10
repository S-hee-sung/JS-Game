import { useCallback, useRef, useState } from "react";
import { createGlobalStyle } from "styled-components";
import TodoInsert from "./component/TodoInsert";
import TodoList from "./component/TodoList";
import TodoTemplate from "./component/TodoTemplate";
import { reset } from "styled-reset";
import TodoHead from "./component/TodoHead";
import { v4 as uuidv4 } from "uuid";
import TodoEdit from "./component/TodoEdit";



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
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);


  const handleInsert = useCallback((text) => {
    const todo = {
      id: uuidv4(),
      text,
      checked: false
    };

    setTodos(todos.concat(todo)); 
  },[todos]);

  const handleRemove = useCallback((id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  } ,[todos])

  const handleToggle = useCallback((id) => {
    setTodos(todos.map((todo) => 
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
  ));
  },[todos]); 

  const onInsertToggle = useCallback(() => {
    if (selectedTodo) {
      setSelectedTodo((selectedTodo) => null);
    }
    setInsertToggle((prev) => !prev);
  }, [selectedTodo]);

  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo((selectedTodo) => todo);
  };

  const handleUpdate = useCallback((id, text) => {
    onInsertToggle();

    setTodos((todos) => todos.map((todo) =>
      (todo.id === id ? { ...todo, text } : todo)),
    );
  },[onInsertToggle]);

  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead todos={todos} />
        <TodoList 
          todos={todos} 
          onRemove={handleRemove} 
          onToggle={handleToggle}
          onChangeSelectedTodo={onChangeSelectedTodo}
          onInsertToggle={onInsertToggle}
        />
        {insertToggle && (
          <TodoEdit
            onInsert={handleInsert}
            selectedTodo={selectedTodo}
            onInsertToggle={onInsertToggle}
            handleUpdate={handleUpdate}
            insertToggle={insertToggle}
          />
        )}
        <TodoInsert onInsert={handleInsert} />
      </TodoTemplate>
    </>  
  );
}

export default App;
