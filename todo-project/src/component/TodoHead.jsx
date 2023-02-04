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
  .tasks {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

function TodoHead() {
  return ( 
    <TodoHeadBlock>
      <h1>2023년 2월 00일</h1>
      <div className="day">0요일</div>
      <div className="tasks">할 일 0개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;