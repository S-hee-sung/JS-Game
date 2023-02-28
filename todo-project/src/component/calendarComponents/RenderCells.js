import React from 'react';
import styled from "styled-components";
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, format } from 'date-fns';
import { isSameMonth, isSameDay, addDays, parse } from 'date-fns';
import ShowEvent from './ShowEvent';


const CellsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .col {
    display: flex;
    border: 2px solid rgba(211, 211, 211, 1);
    width: 100%;
    padding: 20px 30px 40px;
    border-radius: 3px;

  }
  span {
    margin: 4px 0 0 4px;
  }
  .not-valid {
    color: #c4c4c4;
  }
  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;


const RenderCells = (props) => {
  const { currentMonth, selectedDate, onDateClick } = props;

  const monthStart = startOfMonth(currentMonth); // 오늘이 속한 달의 시작일
  const monthEnd = endOfMonth(monthStart); // 오늘이 속한 달의 마지막일
  const startDate = startOfWeek(monthStart); // monthStart가 속한 주의 시작일
  const endDate = endOfWeek(monthEnd);  // monthEnd가 속한 주의 마지막일

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = '';

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, 'd');
      const cloneDay = day;
        days.push(
          <div className={`col cell ${
            !isSameMonth(day, monthStart)
              ? 'disabled'
              : isSameDay(day, selectedDate)
              ? 'selected'
              : format(currentMonth, 'M') !== format(day, 'M')
              ? 'not-valid'
              : 'valid'
            }`}
            key={day}
            onClick={() => onDateClick(parse(cloneDay))}
          >
            <span
              className={
                format(currentMonth, 'M') !== format(day, 'M')
                  ? 'text not-valid'
                  : ''
              }
            >
              {formattedDate}
            </span>
          </div>,
          );
          day = addDays(day, 1);
    }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>,
      );
      days = [];
  }

  return (
    <CellsWrapper>
      {rows}
      {/* {<ShowEvent 
          days={days}
          currentMonth={currentMonth}
      />} */}
    </CellsWrapper>
  );
};


export default RenderCells;