import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { selectedUnivState } from "../recoil/atom";
import * as S from "../style/MainStyle";
import Header from "../components/Header";

// TODO: 메인 페이지 말고 다른 페이지에서도 로컬 스토리지가 비어있을 경우 /으로 이동

function MainPage() {
  const navigate = useNavigate();
  const selectedUniv = useRecoilValue(selectedUnivState); // Recoil 상태 가져오기

  const [page, setPage] = useState("");
  const [semester, setSemester] = useState("");
  const [department, setDepartment] = useState("");
  const [studentID, setStudentID] = useState("");
  const [category, setCategory] = useState("");
  const [isSearchEnabled, setIsSearchEnabled] = useState(false);
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  useEffect(() => {
    if (!selectedUniv) {
      navigate("/"); // 상태가 없을 경우 SplashScreen으로 이동
    }
  }, [selectedUniv, navigate]);

  useEffect(() => {
    console.log(page);
    if (page == "ChatBot") navigate("/chatbot");
  }, [page]);

  useEffect(() => {
    // 모든 값이 비어있지 않으면 검색 버튼 활성화
    if (semester && department && studentID && category) {
      setIsSearchEnabled(true);
    } else {
      setIsSearchEnabled(false);
    }
  }, [semester, department, studentID, category]);

  const handleSearch = () => {
    setIsSearchClicked(true);
  };

  return (
    <>
      <Header selectedUniv={selectedUniv} />

      <S.Container>
        <S.Select onChange={(e) => setPage(e.target.value)}>
          <option value="FAQ">자주 묻는 질문</option>
          <option value="ChatBot">챗봇</option>
        </S.Select>
        <div>
          {/* 학기 */}
          <S.Select onChange={(e) => setSemester(e.target.value)}>
            <option value="">학기</option>
            <option value="1-1">1-1</option>
            <option value="1-2">1-2</option>
            <option value="2-1">2-1</option>
            <option value="2-2">2-2</option>
            <option value="3-1">3-1</option>
            <option value="3-1">3-2</option>
            <option value="4-1">4-1</option>
            <option value="4-2">4-2</option>
            <option value="other">그 이상</option>
          </S.Select>

          {/* 학과 */}
          <S.Select onChange={(e) => setDepartment(e.target.value)}>
            <option value="">학과</option>
            <option value="컴퓨터공학과">컴퓨터공학과</option>
            <option value="호텔경영학과">호텔경영학과</option>
          </S.Select>

          {/* 학번 */}
          <S.Select onChange={(e) => setStudentID(e.target.value)}>
            <option value="">학번</option>
            <option value="25">25학번</option>
            <option value="24">24학번</option>
            <option value="23">23학번</option>
            <option value="22">22학번</option>
            <option value="21">21학번</option>
            <option value="21">20학번</option>
            <option value="other">그 이상</option>
          </S.Select>

          {/* 카테고리 */}
          <S.Select onChange={(e) => setCategory(e.target.value)}>
            <option value="">질문 카테고리</option>
            <option value="수강신청">수강신청</option>
            <option value="졸업">졸업</option>
            <option value="수업">수업</option>
          </S.Select>

          <S.Search disabled={!isSearchEnabled} onClick={handleSearch}>
            검색
          </S.Search>
        </div>
        {isSearchClicked && <S.Content>검색 내용</S.Content>}
      </S.Container>
    </>
  );
}

export default MainPage;
