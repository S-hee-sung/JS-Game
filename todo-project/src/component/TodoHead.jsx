import styled from "styled-components";


const TodoHeadBlock = styled.div`
  padding: 48px 32px 24px 32px;
  border-bottom: 1px solid #e9ecef;
  
  h1 {
    margin: 0px;
    font-size: 36px;
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
    margin-top: 40px;
    font-weight: bold;
  `;
  


function TodoHead({todos}) {
  const today = new Date();

  const dateString = today.toLocaleString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  });


  // const dayName = today.toLocaleString('ko-KR', { weekday: 'long' });
  const weekday = ['일', '월', '화', '수', '목', '금', '토'];
  const dayName = weekday[today.getDay()];


  const headToday = today.toLocaleString();
  // const undoneTasks = todos.filter(todo => !todo.checked);

  return ( 
    <TodoHeadBlock>
      <h1>{dateString}</h1>
      <div className="day">{dayName}요일</div>
      {/* <Tasks>할 일 {undoneTasks.lenth}개 남음</Tasks> */}
    </TodoHeadBlock>
  );
}

export default TodoHead;