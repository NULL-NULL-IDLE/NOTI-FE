import { useState, useEffect } from "react";
import { Router, Routes, Route, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { selectedUnivState } from "./recoil/atom";
import { createGlobalStyle } from "styled-components";
import SplashScreen from "./components/SplashScreen";
import MainPage from "./pages/MainPage";
import ChatBot from "./pages/ChatBot";

function App() {
  const [selectedUniv, setSelectedUniv] = useRecoilState(selectedUnivState); // Recoil 상태 가져오기 및 업데이트
  const navigate = useNavigate();

  useEffect(() => {
    const storedUniv = localStorage.getItem("selectedUniv");
    if (storedUniv && !selectedUniv) {
      setSelectedUniv(storedUniv); // Recoil 상태 업데이트
      navigate("/main"); // Main 페이지로 이동
    }
  }, [selectedUniv, setSelectedUniv, navigate]); // selectedUniv가 없을 때만 실행

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/main" element={<MainPage />} />

        <Route path="/chatbot" element={<ChatBot />} />
      </Routes>
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    margin: 0 !important;
    /* overflow: hidden; 스크롤 방지 */
    min-width: 0;
  }

  #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;
