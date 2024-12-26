import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  pageState,
  semesterState,
  departmentState,
  studentIDState,
  categoryState,
  selectedUnivState,
} from "../recoil/atom";
import * as S from "../style/MainStyle";
import Header from "../components/Header";

// TODO: 메인 페이지 말고 다른 페이지에서도 로컬 스토리지가 비어있을 경우 /으로 이동

function MainPage() {
  const navigate = useNavigate();

  const selectedUniv = useRecoilValue(selectedUnivState); // Recoil 상태 가져오기
  const page = useRecoilValue(pageState);
  const semester = useRecoilValue(semesterState);
  const department = useRecoilValue(departmentState);
  const studentID = useRecoilValue(studentIDState);
  const category = useRecoilValue(categoryState);

  const setPage = useSetRecoilState(pageState);
  const setSemester = useSetRecoilState(semesterState);
  const setDepartment = useSetRecoilState(departmentState);
  const setStudentID = useSetRecoilState(studentIDState);
  const setCategory = useSetRecoilState(categoryState);

  const [isSearchEnabled, setIsSearchEnabled] = useState(false);
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [expanded, setExpanded] = useState([]); // 드롭다운 상태 관리

  useEffect(() => {
    if (!selectedUniv) {
      navigate("/"); // 상태가 없을 경우 SplashScreen으로 이동
    }
  }, [selectedUniv, navigate]);

  useEffect(() => {
    console.log(page);
    if (page == "ChatBot") navigate("/chatbot");
    else if (page == "FAQ") navigate("/main");
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

  // 질문 (더미 데이터)
  const questions = [
    {
      id: 1,
      question: "우리학교의 졸업 요건이 어떻게 되나요?",
      answer: "졸업 요건은 총 130학점입니다.",
    },
    {
      id: 2,
      question: "수강신청 기간은 언제인가요?",
      answer: "수강신청은 매 학기 시작 전 공지됩니다.",
    },
    {
      id: 3,
      question: "졸업 프로젝트 제출은 언제인가요?",
      answer: "졸업 프로젝트는 12월 말까지 제출해야 합니다.",
    },
    {
      id: 4,
      question: "학점 교류 신청은 어떻게 하나요?",
      answer: "학점 교류는 교무처를 통해 신청할 수 있습니다.",
    },
  ];

  const toggleDropdown = (id) => {
    setExpanded((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
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
            <option value="2025">2025학년도</option>
            <option value="2024">2024학년도</option>
            <option value="2023">2023학년도</option>
            <option value="2022">2022학년도</option>
            <option value="2021">2021학년도</option>
            <option value="2020">2020학년도</option>
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
        {isSearchClicked && (
          <S.ContentContainer>
            {questions.map((q) => (
              <S.QuestionWrapper key={q.id}>
                <S.Question onClick={() => toggleDropdown(q.id)}>
                  {q.question}
                  <S.Arrow expanded={expanded.includes(q.id)}>▼</S.Arrow>
                </S.Question>
                {expanded.includes(q.id) && <S.Answer>{q.answer}</S.Answer>}
              </S.QuestionWrapper>
            ))}
          </S.ContentContainer>
        )}
      </S.Container>
    </>
  );
}

export default MainPage;
