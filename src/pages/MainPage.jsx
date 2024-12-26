import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { selectedUnivState } from "../recoil/atom";
import Header from "../components/Header";

function MainPage() {
  const selectedUniv = useRecoilValue(selectedUnivState); // Recoil 상태 가져오기
  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedUniv) {
      navigate("/"); // 상태가 없을 경우 SplashScreen으로 이동
    }
  }, [selectedUniv, navigate]);

  return (
    <>
      <Header selectedUniv={selectedUniv} />
      <div>ddd</div>;
    </>
  );
}

export default MainPage;
