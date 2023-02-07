import styled  from "styled-components";
import { useCallback, useEffect, useState } from 'react';


const TodoWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.548);
`;

// const StyledInput = styled.input`
//   padding: 12px;
//   border-radius: 4px;
//   border: 1px solid #dee2e6;
//   width: 100%;
//   outline: none;
//   font-size: 18px;
//   box-sizing: border-box;
// `;

const TodoInsert = styled.form` 
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  background-color: #f8f9fa;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  h2 {
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    text-align: center;
    padding: 0.5rem;
    background-color: #9c88ff;
    color: white;
    font-weight:500;
  }
  input {
    margin: 2rem 0;
    padding: 0.3rem;
    border: none;
    outline: none;
    border-bottom: 1px solid #9c88ff;
  }
  button {
    cursor: pointer;
    background-color: #9c88ff;
    border: none;
    color: white;
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
  }
`;


function TodoEdit({ insertToggle, selectedTodo, handleUpdate }) {

  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
      handleUpdate(selectedTodo.id, value);
      setValue(''); 
      e.preventDefault();
    };

  useEffect(() => {
    if (selectedTodo) {
      setValue(selectedTodo.text);
    }
  }, [selectedTodo]);
  
  return (  
    <>
      <TodoWrapper>
        <TodoInsert onSubmit={handleSubmit}>
          <h2>수정하기</h2>
          <input
            autoFocus
            onChange={handleChange}
            value={value}
            placeholder="할 일을 입력하세요"
          />
          <button type="submit">수정하기</button>
        </TodoInsert>
      </TodoWrapper>
    </>
  );
}

export default TodoEdit;