import axios from "axios";

export const getUniversity = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/v1/universities`);
    return response.data.data.universities; // API에서 반환된 데이터
  } catch (e) {
    console.error("대학 불러오기 실패:", e);
    throw e; // 에러를 상위 호출자로 전달
  }
};
