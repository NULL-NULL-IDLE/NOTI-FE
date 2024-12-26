import { atom } from "recoil";

export const selectedUnivState = atom({
  key: "selectedUniv", // Atom의 고유 key
  default: localStorage.getItem("selectedUniv") || null, // 로컬 스토리지 값 또는 null
});

export const pageState = atom({
  key: "pageState",
  default: "",
});
export const semesterState = atom({
  key: "semesterState",
  default: "",
});
export const departmentState = atom({
  key: "departmentState",
  default: "",
});
export const studentIDState = atom({
  key: "studentIDState",
  default: "",
});
export const categoryState = atom({
  key: "categoryState",
  default: "",
});

// const [page, setPage] = useState("");
// const [semester, setSemester] = useState("");
// const [department, setDepartment] = useState("");
// const [studentID, setStudentID] = useState("");
// const [category, setCategory] = useState("");
