import * as S from "../style/HeaderStyle";
import { useNavigate } from "react-router-dom";
import { selectedUnivState } from "../recoil/atom";
import { useRecoilValue } from "recoil";

function Header() {
  const selectedUniv = useRecoilValue(selectedUnivState); // Recoil 상태 가져오기
  const navigate = useNavigate();

  return (
    <S.Container>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <S.Logo src="/Noti.svg" alt="로고" onClick={() => navigate("/main")} />
        <S.Title>노티</S.Title>
      </div>
      <div>
        <S.School>{selectedUniv}</S.School>
        <S.SchoolLogo src="" alt="학교 로고" />
      </div>
    </S.Container>
  );
}

export default Header;
