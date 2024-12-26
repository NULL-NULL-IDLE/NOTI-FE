import { useState, useEffect } from "react";
import { BrowserRouter as Routes, Route, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { selectedUnivState } from "./recoil/atom";
import { createGlobalStyle } from "styled-components";
import SplashScreen from "./components/SplashScreen";
import MainPage from "./pages/MainPage";

function App() {
  const [selectedUniv, setSelectedUniv] = useRecoilState(selectedUnivState); // Recoil 상태 가져오기 및 업데이트
  const navigate = useNavigate();

  useEffect(() => {
    // 페이지 로드 시 로컬 스토리지를 확인하여 상태 설정
    const storedUniv = localStorage.getItem("selectedUniv");
    if (storedUniv) {
      setSelectedUniv(storedUniv); // Recoil 상태 업데이트
      navigate("/main"); // Main 페이지로 이동
    } else {
      navigate("/"); // SplashScreen으로 이동
    }
  }, [setSelectedUniv, navigate]);

  return (
    <>
      <GlobalStyle />
      <Routes>
        {selectedUniv ? (
          <Route path="/main" element={<MainPage />} />
        ) : (
          <Route path="/" element={<SplashScreen />} />
        )}
      </Routes>
    </>
  );
}

// Routes를 분리하여 Recoil 상태를 안전하게 사용
// function AppRoutes() {
//   const selectedUniv = useRecoilValue(selectedUnivState); // Recoil 상태 가져오기
//   console.log(selectedUniv);

//   return (
//     <Routes>
//       {selectedUniv ? (
//         <Route path="/main" element={<Main />} />
//       ) : (
//         <Route path="/" element={<SplashScreen />} />
//       )}
//     </Routes>
//   );
// }

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
