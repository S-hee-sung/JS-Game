import React, { useState } from 'react';
import styled from "styled-components";

const MessageInputContainer = styled.div`
  color: grey;
  display: flex;
  border-top: solid 1px #d16f80;
  align-items: stretch;
  position: fixed;
  bottom: 0px;
  width: 100%;
  background-color: #DCEBFF;
`;

const MessageInputBox = styled.input`
  color: grey;
  width: 78vw;
  height: 40px;
  margin: 1% 0% 1% 2%;
  border: 0.5px #d16f80 solid;
  text-align: center;
  border-radius: 30px;

  &:focus {
    outline: none;
  }
`;

const MessageInputButton = styled.button`
  color: #333;
  width: 9vw;
  height: 44px;
  border-radius: 10px;
  background-color: #fff;
  border: 0.5px #ba4f5f solid;
  text-align: center;
  /* margin: 1%; */
  margin: 10px 10px 10px 30px;

  &:focus {
    outline: none;
  }
  &:hover {
    background-color: #d16f80;
  }
`;


function MessageInputBar(props) {
  const { clickInputButton  } = props; 
  const [messageUserInput, setMessageUserInput] = useState('');

  
  const handleClickInputButton = () => {
    if (messageUserInput !== "") {
      // clickInputButton(messageUserInput);
      setMessageUserInput(messageUserInput);
      setMessageUserInput("");
    }
  }

  const enterPressed = (e) => {
    if (e.key === "Enter") {
      handleClickInputButton();
    }
  };

  const handleChange = (e) => {
    setMessageUserInput(e.target.value);
  };


  return (
    <MessageInputContainer>
      <MessageInputBox 
        placeholder= "메시지를 입력하세요"
        value= {messageUserInput}
        onChange= {handleChange}
        onKeyPress= {enterPressed}
      />
      <MessageInputButton onClick={handleClickInputButton}>
        send
      </MessageInputButton>
    </MessageInputContainer>
  );
}

export default MessageInputBar;