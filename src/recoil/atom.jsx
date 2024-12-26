import { atom } from "recoil";

export const selectedUnivState = atom({
  key: "selectedUniv", // Atom의 고유 key
  default: localStorage.getItem("selectedUniv") || null, // 로컬 스토리지 값 또는 null
});
