import styled, { css } from "styled-components";
import { MdDone, MdLogin } from 'react-icons/md';
import { useState } from "react";



const TodoHeadWrapper = styled.div`
  padding: 48px 32px 24px 32px;
  border-bottom: 1px solid #e9ecef;
  
  h1 {
    margin: 0px;
    font-size: 36px;
    font-weight: 700;
    color: #9c88ff;
  }
  .day {
    color: #9c88ff;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

const Tasks = styled.div`
  color: #9c88ff;
  font-size: 18px;
  /* margin-top: 20px; */
  font-weight: bold;
  text-align: end;
`;
  

// const CheckAll = styled.div`
//   width: 32px;
//   height: 32px;
//   border-radius: 16px;
//   border: 1px solid #ced4da;
//   font-size: 24px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-right: 20px;
//   margin-top: 30px;
//   cursor: pointer;
  
//   ${props =>
//     props.checked &&
//     css`
//       border: 1px solid #9c88ff;
//       color: #9c88ff;
//     `}
// `;




function TodoHead({todos}) {
  const today = new Date();

  const dateString = today.toLocaleString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  });

  const weekday = ['일', '월', '화', '수', '목', '금', '토'];
  const dayName = weekday[today.getDay()];

  const checkedTasks = todos.filter(todo => !todo.checked);
  
  return ( 
    <TodoHeadWrapper>
      <h1>{dateString}</h1>
      <div className="day">{dayName}요일</div>
      <Tasks>{checkedTasks.length} left items</Tasks>
    </TodoHeadWrapper>
  );
}

export default TodoHead;