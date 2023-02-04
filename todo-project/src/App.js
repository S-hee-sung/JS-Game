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
      text: '수업 교안 작성하기',
      checked: true
    },
    {
      id: 2,
      text: '시험 채점하기',
      checked: true
    },
    {
      id: 3,
      text: '단계별 실습 예제 만들기',
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

  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList todos={todos} />
        <TodoInsert onInsert={handleInsert} onRemove={handleRemove}/>
      </TodoTemplate>
    </>  
  );
}

export default App;
