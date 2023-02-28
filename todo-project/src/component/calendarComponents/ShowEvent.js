// import React from 'react';
// import styled from "styled-components";
// import data7 from "../book/data7.json";

// const ShowEventWrapper = styled.div`
  
  
//   .calendar-event{
// 	font-size: 15px;
// 	background: gray;
// 	color: white;
// 	border-radius: 5px;
// 	padding: 2px;
// 	margin: 1px;
// }
// `;



// function ShowEvent(props) {
//   const { days, currentMonth } = props; 

//   return (
//     <ShowEventWrapper>
//       {data7.books.map((book,i) => {
//         if (days.format('YYYYMMDD') === currentMonth(book.start).format('YYYYMMDD')) {
//           <div
//             key={i}
//             onClick={() => {console.log();}}
//             className="calendar-event"
//           >
//             {book.data}
//           </div>
//         }
//       })}
//     </ShowEventWrapper>
//   );
// }

// export default ShowEvent;