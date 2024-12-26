import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import * as token from "../../designToken";

function SplashScreen({ onSelectUniv }) {
  const [univ, setUniv] = useState("");

  const handleSelect = () => {
    if (univ) {
      onSelectUniv(univ);
    } else {
      alert("대학을 선택해주세요.");
    }
  };

  return (
    <Container>
      <Logo src="/Noti.svg" />
      <Title>NOTI</Title>
      <SubTitle>나만의 대학사전</SubTitle>
      <Select onChange={(e) => setUniv(e.target.value)}>
        <option value="">학교 선택</option>
        <option value="세종대학교">세종대학교</option>
      </Select>
      <Button onClick={handleSelect}>노티 받기</Button>
    </Container>
  );
}

export default SplashScreen;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${token.colors.main};
  width: 100vw;
  height: 100vh;
`;

const Logo = styled.img`
  width: 300px;
`;
const Title = styled.div``;
const SubTitle = styled.div``;

const Select = styled.select`
  padding: 10px;
  margin-bottom: 20px;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: white;
  color: ${token.colors.main};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
