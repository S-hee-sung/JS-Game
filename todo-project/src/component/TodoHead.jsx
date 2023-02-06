import styled, { css } from "styled-components";
import { MdDone } from 'react-icons/md';
import { useState } from "react";



const TodoHeadWrapper = styled.div`
  padding: 48px 32px 24px 32px;
  border-bottom: 1px solid #e9ecef;
  
  h1 {
    margin: 0px;
    font-size: 36px;
    font-weight: 700;
    color: #343a40;
  }
  .day {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

const Tasks = styled.div`
  color: #20c997;
  font-size: 18px;
  /* margin-top: 20px; */
  font-weight: bold;
  text-align: end;
`;
  

const CheckAll = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  margin-top: 30px;
  cursor: pointer;
  
  ${props =>
    props.checked &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;




function TodoHead({todos}) {
  const today = new Date();

  const dateString = today.toLocaleString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  });

  const weekday = ['일', '월', '화', '수', '목', '금', '토'];
  const dayName = weekday[today.getDay()];

  const [checkList, setCheckList] = useState('');
  


  // const leftItemEl = document.querySelector('.left-items')
  // const activeTasks = todos.filter(todo => !todo.checked);

  // const setLeftItems = () => {
  //   const leftTodos = activeTasks();
  //   leftItemEl.innerHTML = `${leftTodos.length} items left`;
  // };
  // const checkedTasks = todos.filter(todo => !todo.checked);


  return ( 
    <TodoHeadWrapper>
      <h1>{dateString}</h1>
      <div className="day">{dayName}요일</div>
      <CheckAll>
        <MdDone />
      </CheckAll>
      {/* <Tasks>{checkedTasks.length} left items </Tasks> */}
      <Tasks>left items</Tasks>
    </TodoHeadWrapper>
  );
}

export default TodoHead;