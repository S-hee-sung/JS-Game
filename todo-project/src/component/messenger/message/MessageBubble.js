import React from 'react';
import styled from "styled-components";
import BasicChat from "../constants/BasicChat";
import chatBot from "../constants/chatBot.jpg";

const ChattingImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 70%;
  overflow: hidden;
  margin: 15px 15px 0px 15px;
`;

const ChattingContext = styled.div`
  padding-left: 20px;
  line-height: 28px;
  font-size: 15px;
  border: 1px solid #e99ba7;
  border-radius: 22px;
  margin: 15px 0px 0px;
  padding: 10px;
  background-color: #f4f4f4;
  color: gray;
`;

const ChattingBubble = styled.div`
  display: flex;

  flex-direction: ${(props) =>
    props.chattingUser === 1 ? "row-reverse" : "row"};
`;



function MessageBubble(props) {
  // const { userMessage } = props;

  return (
    // <ChattingBubble chattingUser={props.chattingUser} >
    <ChattingBubble  >
      <ChattingImage src={chatBot}  />
      <ChattingContext>무엇을 도와드릴까요?</ChattingContext>
      {/* <ChattingContext>{userMessage.messageContext}</ChattingContext> */}
    </ChattingBubble>
    );
}

export default MessageBubble;