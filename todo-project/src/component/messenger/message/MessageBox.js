import React, { useEffect } from 'react';
import styled from "styled-components";
import MessageBubble from './MessageBubble';
import snowImg from "../constants/snowimg.jpg";



const ChattingContainer = styled.div`
  width: 92vw;
  height: available;
  flex-grow: 1;
  padding-top: 97px;
  padding-bottom: 100px;

  background-image: url(${snowImg});
  background-repeat: repeat;
  margin-left: 50px;
`;




function MessageBox(props) {
  const { userMessageSet } = props;

  useEffect((e) => {
    window.scrollBy(0, window.innerHeight);
  });


  return (
    <ChattingContainer>
      {/* {userMessageSet.map((userMessage, id) => {
        <MessageBubble userMessage={userMessage} key={id} />
      })} */}
      <MessageBubble />
    </ChattingContainer>
  );
}

export default MessageBox;