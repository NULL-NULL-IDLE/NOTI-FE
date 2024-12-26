import { useState, useEffect } from "react";
import "../App.css";
import { createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import SplashScreen from "../components/SplashScreen";

function Main() {
  const [selectedUniv, setSelectedUniv] = useState(null);

  useEffect(() => {
    // 로컬 스토리지에서 선택된 대학 정보 불러오기
    const storedUniv = localStorage.getItem("selectedUniv");
    if (storedUniv) {
      setSelectedUniv(storedUniv);
    }
  }, []);

  const handleUnivSelect = (univ) => {
    // 대학 선택 시 로컬 스토리지 저장 및 상태 업데이트
    localStorage.setItem("selectedUniv", univ);
    setSelectedUniv(univ);
  };

  return selectedUniv ? (
    <div>
      <Header />
      {/* <MainScreen univ={selectedUniv} /> */}
      <div>선택됨</div>
    </div>
  ) : (
    <>
      <GlobalStyle />
      <SplashScreen onSelectUniv={handleUnivSelect} />
    </>
  );
}

export default Main;

const GlobalStyle = createGlobalStyle`
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
    min-height: 0;
    min-width: 0;
  }

  #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;
