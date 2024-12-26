import axios from "axios";

export const getDepartment = async () => {
  try {
    // TODO: 추후에 맨뒤 대학 아이디 바꾸기
    const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/v1/departments/1`);
    return response.data.data.departments; // API에서 반환된 데이터
  } catch (e) {
    console.error("학과 불러오기 실패:", e);
    throw e; // 에러를 상위 호출자로 전달
  }
};
