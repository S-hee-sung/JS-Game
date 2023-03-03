import React, { useState } from 'react';
import { useParams } from 'react-router';
import styled from "styled-components";

import BasicChat from "../constants/BasicChat";
import TopBar from './TopBar';
import MessageBox from './MessageBox';

import MessageInputBar from './MessageInputBar';


const Container = styled.div`
  display: flex;

  width: 100%;
  height: 700px;
  background-color: #ccc;
  flex-direction: column;
`;



function MessageView(props) {
  let { userID } = useParams();
  
  const [isMy, setIsMy] = useState(true);
  const currentUser = isMy ? 1 : userID;

  const [userMessageSet, setUserMessageSet] = useState([BasicChat[userID - 1]]);

  const clickInputButton = (messageUserInput) => {
    let id = Date.now ();
    setUserMessageSet((formerMessage) => [
      ...formerMessage, {chattingUser: currentUser, messageContext: messageUserInput, id: id}
    
    ])
  };

  return (
    <Container>
      <TopBar currentUser={currentUser} />
      {/* <MessageBox userMessageSet={userMessageSet} /> */}
      <MessageBox />
      <MessageInputBar clickInputButton={clickInputButton} />
    </Container>
  );
}

export default MessageView;