import React from 'react';
import styled from "styled-components";

import UserProfileSet from "../constants/UserProfileSet";
// import chatBot from "../constants/chatBot.jpg";
import logoImg from "../constants/home.png"
import { useNavigate } from 'react-router';

const TopWrapper = styled.div`
  background-color: white;
  color: #ba4f5f;
  display: flex;
  
  padding: 10px;
  border-bottom: solid 1px #d16f80;
  position: fixed;
  top: 0px;
  width: 100%;
`;

const ProfileImageButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 70%;
  overflow: hidden;
  padding: 0px;
  border: none;

  
  &:focus {
    outline: none;
  }
  &:hover {
    width: 70px;
    height: 70px;
  }
`;

const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 70%;
  background-position: 0px 0px;
  overflow: hidden;

  &:focus {
    outline: none;
  }
`;

const ProfileName = styled.div`
  padding-left: 20px;
  line-height: 60px;
  font-size: 20px;
`;



function TopBar(props) {
  const { currentUser } = props;
  const navigate = useNavigate();


  return (
    <TopWrapper>
      <ProfileImageButton>
        <ProfileImage src={logoImg} onClick={() => navigate('/')} />
      </ProfileImageButton>
      <ProfileName>{UserProfileSet[currentUser-1].name}</ProfileName>
    </TopWrapper>
  );
}

export default TopBar;