import styled from "styled-components";

const TodoTempalateBlock = styled.div`
  width: 512px;
  height: 768px;

  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);

  margin: 0 auto;
  margin-top: 96px;
  display: flex;
  flex-direction: column;
`;


function TodoTemplate({children}) {
  return (  
    <TodoTempalateBlock>{children}</TodoTempalateBlock>
  );
}

export default TodoTemplate;