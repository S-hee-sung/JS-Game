import TodoListItem from "./TodoListItem";
import styled from "styled-components";

const TodoListWrapper = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
`;

function TodoList({ todos, onRemove, onToggle, onChangeSelectedTodo, onInsertToggle}) {

  return (
    <>
      <TodoListWrapper>
        <h1>할 일 목록</h1>
        {todos.map((todo) =>{
          if (todo.checked == true) return null;
          return(
            <TodoListItem 
              key={todo.id} 
              todo={todo}
              onRemove={onRemove}
              onToggle={onToggle}
              onInsertToggle={onInsertToggle}
              onChangeSelectedTodo={onChangeSelectedTodo}
            />
          );
        })}
      </TodoListWrapper>

      <TodoListWrapper>
        <h1>완료된 목록</h1>
        {todos.map((todo) =>{
          if (todo.checked == false) return ;
          return(
            <TodoListItem 
              key={todo.id} 
              todo={todo}
              onRemove={onRemove}
              onToggle={onToggle}
              onInsertToggle={onInsertToggle}
              onChangeSelectedTodo={onChangeSelectedTodo}
            />
          );
        })}
      </TodoListWrapper>
    </>
  );
}

export default TodoList;