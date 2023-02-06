import TodoListItem from "./TodoListItem";
import styled from "styled-components";

const TodoListWrapper = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
`;

function TodoList({ todos, onRemove, onToggle}) {
  return (  
    <TodoListWrapper>
      {todos.map((todo) =>{
        return(
          <TodoListItem 
            key={todo.id} 
            todo={todo}
            onRemove={onRemove}
            onToggle={onToggle}
          />
        );
      })}
    </TodoListWrapper>
  );
}

export default TodoList;